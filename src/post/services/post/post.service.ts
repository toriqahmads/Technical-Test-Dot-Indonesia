import { isNullOrUndefined } from 'util';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { PostApi } from 'src/post/api';
import { Post } from '../../entities/post';
import { PostDto, AddPostDto, EditPostDto, EditPutPostDto } from 'src/post/dto';
import { PostMapperServiceService } from '../post-mapper-service/post-mapper-service.service';

@Injectable()
export class PostService {
  public constructor(
    @InjectRepository(Post) private readonly postRepository: Repository<Post>,
    private readonly postMapper: PostMapperServiceService,
    private readonly postApi: PostApi,
  ) {}

  public async findAll(): Promise<PostDto[]> {
    const posts = await this.postApi.find();
    await Promise.all(
      posts.map(async (post: PostDto) => {
        await this.postRepository.save(post);
      }),
    );

    return posts.map(this.postMapper.modelToDto);
  }

  public async findOne(id: number): Promise<PostDto> {
    let post = await this.postRepository.findOne(id);
    if (isNullOrUndefined(post)) {
      post = await this.postApi.findOne(id);
      if (isNullOrUndefined(post)) throw new NotFoundException();

      await this.postRepository.save(post);
    }

    return this.postMapper.modelToDto(post);
  }

  public async add({ title, body, userId }: AddPostDto): Promise<PostDto> {
    let post = new Post(title, body, userId);
    await this.postApi.add(post);
    post = await this.postRepository.save(post);

    return this.postMapper.modelToDto(post);
  }

  public async editPut(
    id: number,
    { title, body, userId }: EditPutPostDto,
  ): Promise<PostDto> {
    let post = await this.postRepository.findOne(id);
    if (isNullOrUndefined(post)) throw new NotFoundException();

    post.title = title;
    post.body = body;
    post.userId = userId;

    await this.postApi.editPut(id, post);
    post = await this.postRepository.save(post);

    return this.postMapper.modelToDto(post);
  }

  public async edit(
    id: number,
    { title, body, userId }: EditPostDto,
  ): Promise<PostDto> {
    let post = await this.postRepository.findOne(id);
    if (isNullOrUndefined(post)) throw new NotFoundException();

    if (!isNullOrUndefined(title)) post.title = title;
    if (!isNullOrUndefined(body)) post.body = body;
    if (!isNullOrUndefined(userId)) post.userId = userId;

    await this.postApi.edit(id, post);
    post = await this.postRepository.save(post);

    return this.postMapper.modelToDto(post);
  }

  public async remove(id: number): Promise<PostDto> {
    let post = await this.postRepository.findOne(id);
    if (isNullOrUndefined(post)) throw new NotFoundException();

    await this.postApi.remove(id);
    post = await this.postRepository.remove(post);

    return this.postMapper.modelToDto(post);
  }
}
