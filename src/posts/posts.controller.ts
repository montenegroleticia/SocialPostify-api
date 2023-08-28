import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePosts } from './dtos/CreatePosts';
import { UpdatePosts } from './dtos/UpdatePosts';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  post(@Body() createPost: CreatePosts) {
    return this.postsService.post(createPost);
  }

  @Get()
  get() {
    return this.postsService.get();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.postsService.getById(+id);
  }

  @Put(':id')
  put(@Param('id') id: string, @Body() updatePost: UpdatePosts) {
    return this.postsService.put(+id, updatePost);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.postsService.delete(+id);
  }
}
