import { Injectable } from '@nestjs/common';

import * as axios from 'axios';
import { IApi } from 'src/app.inteface';
import { PostDto, AddPostDto, EditPostDto, EditPutPostDto } from 'src/post/dto';

@Injectable()
export class PostApi implements IApi {
    baseEndpoint: string = 'https://jsonplaceholder.typicode.com/';
    basePath: string = 'posts';

    async find(): Promise<[PostDto]> {
        const response: axios.AxiosResponse = await axios.default.get(`${this.baseEndpoint}${this.basePath}`);
        return response.data;
    };

    async findOne(id: number): Promise<PostDto> {
        const response: axios.AxiosResponse = await axios.default.get(`${this.baseEndpoint}${this.basePath}/${id}`);
        return response.data;
    }

    async add(entities: AddPostDto): Promise<PostDto> {
        const response: axios.AxiosResponse = await axios.default.post(`${this.baseEndpoint}${this.basePath}`, entities);
        return response.data;
    }

    async edit(id: number, entities: EditPostDto): Promise<PostDto> {
        const response: axios.AxiosResponse = await axios.default.patch(`${this.baseEndpoint}${this.basePath}/${id}`, entities);
        return response.data;
    }

    async editPut(id: number, entities: EditPutPostDto): Promise<PostDto> {
        const response: axios.AxiosResponse = await axios.default.put(`${this.baseEndpoint}${this.basePath}/${id}`, entities);
        return response.data;
    }

    async remove(id: number): Promise<PostDto> {
        const response: axios.AxiosResponse = await axios.default.delete(`${this.baseEndpoint}${this.basePath}/${id}`);
        return response.data;
    }
}