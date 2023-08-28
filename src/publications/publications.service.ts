import {
  Inject,
  Injectable,
  NotFoundException,
  forwardRef,
} from '@nestjs/common';
import { CreatePublications } from './dtos/CreatePublications';
import { UpdatePublications } from './dtos/UpdatePublications';
import { PublicationsRepository } from './publications.repository';
import { MediasService } from '../medias/medias.service';
import { PostsService } from '../posts/posts.service';

@Injectable()
export class PublicationsService {
  constructor(
    private readonly publicationsRepository: PublicationsRepository,
    @Inject(forwardRef(() => MediasService))
    private readonly mediasService: MediasService,
    @Inject(forwardRef(() => PostsService))
    private readonly postsService: PostsService,
  ) {}

  async post(createPublication: CreatePublications) {
    await this.mediasService.getById(createPublication.mediaId);
    await this.postsService.getById(createPublication.postId);
    return await this.publicationsRepository.post(createPublication);
  }

  async get(published?: string, after?: Date) {
    return await this.publicationsRepository.get(published, after);
  }

  async getById(id: number) {
    const publication = await this.publicationsRepository.getById(id);
    if (!publication) throw new NotFoundException();
    return publication;
  }

  async put(id: number, updatePublication: UpdatePublications) {
    await this.getById(id);
    await this.mediasService.getById(updatePublication.mediaId);
    await this.postsService.getById(updatePublication.postId);
    return await this.publicationsRepository.put(id, updatePublication);
  }

  async delete(id: number) {
    await this.getById(id);
    return await this.publicationsRepository.delete(id);
  }

  async getByMediaId(mediaId: number) {
    return await this.publicationsRepository.getByMediaId(mediaId);
  }

  async getByPostId(postId: number) {
    return await this.publicationsRepository.getByPostId(postId);
  }
}
