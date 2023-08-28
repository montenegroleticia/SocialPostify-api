import { Injectable } from '@nestjs/common';
import { MediasRepository } from './medias.repository';
import { CreateMedias } from './dtos/CreateMedias';
import { UpdateMedias } from './dtos/UpdateMedias';

@Injectable()
export class MediasService {
  constructor(private readonly mediasRepository: MediasRepository) {}

  async post(CreateMedia: CreateMedias) {
    return await this.mediasRepository.post(CreateMedia);
  }

  async get() {
    return await this.mediasRepository.get();
  }

  async getById(id: number) {
    return await this.mediasRepository.getById(id);
  }

  async put(id: number, UpdateMedia: UpdateMedias) {
    return await this.mediasRepository.put(id, UpdateMedia);
  }

  async delete(id: number) {
    return await this.mediasRepository.delete(id);
  }
}
