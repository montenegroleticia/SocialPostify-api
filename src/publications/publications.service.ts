import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePublications } from './dtos/CreatePublications';
import { UpdatePublications } from './dtos/UpdatePublications';
import { PublicationsRepository } from './publications.repository';

@Injectable()
export class PublicationsService {
  constructor(
    private readonly publicationsRepository: PublicationsRepository,
  ) {}

  async post(createPublication: CreatePublications) {
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
    return await this.publicationsRepository.put(id, updatePublication);
  }

  async delete(id: number) {
    await this.getById(id);
    return await this.publicationsRepository.delete(id);
  }
}
