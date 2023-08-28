import {
  ForbiddenException,
  Inject,
  Injectable,
  NotFoundException,
  forwardRef,
} from '@nestjs/common';
import { CreatePosts } from './dtos/CreatePosts';
import { UpdatePosts } from './dtos/UpdatePosts';
import { PostsRepository } from './posts.repository';
import { PublicationsService } from 'src/publications/publications.service';

@Injectable()
export class PostsService {
  constructor(
    private readonly postRepository: PostsRepository,
    @Inject(forwardRef(() => PublicationsService))
    private readonly publicationsService: PublicationsService,
  ) {}

  async post(CreatePost: CreatePosts) {
    return await this.postRepository.post(CreatePost);
  }

  async get() {
    return await this.postRepository.get();
  }

  async getById(id: number) {
    const post = await this.postRepository.getById(id);
    if (!post) throw new NotFoundException();
    return post;
  }

  async put(id: number, updatePost: UpdatePosts) {
    return await this.postRepository.put(id, updatePost);
  }

  async delete(id: number) {
    await this.getById(id);
    const publication = await this.publicationsService.getByPostId(id);
    if (publication) throw new ForbiddenException();
    return await this.postRepository.delete(id);
  }
}
