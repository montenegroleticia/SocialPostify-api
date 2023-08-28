import { Injectable } from '@nestjs/common';
import { CreatePosts } from './dtos/CreatePosts';
import { UpdatePosts } from './dtos/UpdatePosts';

@Injectable()
export class PostsService {
  post(CreatePost: CreatePosts) {
    return;
  }

  get() {
    return;
  }

  getById(id: number) {
    return;
  }

  put(id: number, updatePost: UpdatePosts) {
    return;
  }

  delete(id: number) {
    return;
  }
}
