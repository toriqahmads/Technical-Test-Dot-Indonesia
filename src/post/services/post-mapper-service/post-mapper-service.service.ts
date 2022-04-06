import { Injectable } from '@nestjs/common';

import { Post } from '../../entities/post';
import { PostDto } from 'src/post/dto';

@Injectable()
export class PostMapperServiceService {
    public modelToDto({ id, title, body, userId }: Post): PostDto {
        return new PostDto({ id, title, body, userId });
    }
}
