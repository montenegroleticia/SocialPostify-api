import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePublications } from './dtos/CreatePublications';
import { UpdatePublications } from './dtos/UpdatePublications';
import { PublicationsRepository } from './publications.repository';
import { MediasService } from 'src/medias/medias.service';
import { PostsService } from 'src/posts/posts.service';

@Injectable()
export class PublicationsService {
  constructor(
    private readonly publicationsRepository: PublicationsRepository,
    private readonly mediasService: MediasService,
    private readonly postsService: PostsService,
  ) {}

  async post(createPublication: CreatePublications) {
    await this.mediasService.getById(createPublication.mediaId);
    await this.postsService.getById(createPublication.postId);
    return await this.publicationsRepository.post(createPublication);
  }

  async get() {
    return await this.publicationsRepository.get();
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
}
