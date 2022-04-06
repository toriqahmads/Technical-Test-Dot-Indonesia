import { PostService } from '../services/post/post.service';
import { PostDto, AddPostDto, EditPostDto, EditPutPostDto } from '../dto';
import { Controller, Get, Param, Post, Put, Patch, Delete, Body } from '@nestjs/common';

@Controller('posts')
export class PostController {
    public constructor(private readonly postService: PostService) {}

    @Get()
    public findAll(): Promise<PostDto[]> {
        return this.postService.findAll();
    }

    @Get(':id')
    public findOne(@Param('id') id: number): Promise<PostDto> {
        return this.postService.findOne(id);
    }

    @Post()
    public add(@Body() post: AddPostDto): Promise<PostDto> {
        return this.postService.add(post);
    }

    @Put(':id')
    public editPut(@Param('id') id: number, @Body() post: EditPutPostDto): Promise<PostDto> {
        return this.postService.editPut(id, post);
    }

    @Patch(':id')
    public edit(@Param('id') id: number, @Body() post: EditPostDto): Promise<PostDto> {
        return this.postService.edit(id, post);
    }

    @Delete(':id')
    public remove(@Param('id') id: number): Promise<PostDto> {
        return this.postService.remove(id);
    }
}
