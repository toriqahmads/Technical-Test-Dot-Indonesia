import { Module } from '@nestjs/common';
import { PostApi } from '../api';
import { Post } from '../entities/post';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostController } from '../controllers/post.controller';
import { PostService } from '../services/post/post.service';
import { PostMapperServiceService } from '../services/post-mapper-service/post-mapper-service.service';

@Module({
  imports: [TypeOrmModule.forFeature([Post])],
  providers: [PostService, PostMapperServiceService, PostApi],
  controllers: [PostController],
})
export class PostModule {}
