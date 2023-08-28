import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { MediasRepository } from './medias.repository';
import { CreateMedias } from './dtos/CreateMedias';
import { UpdateMedias } from './dtos/UpdateMedias';

@Injectable()
export class MediasService {
  constructor(private readonly mediasRepository: MediasRepository) {}

  async post(CreateMedia: CreateMedias) {
    const media = await this.mediasRepository.findMedia(CreateMedia);
    if (media) throw new ConflictException();
    return await this.mediasRepository.post(CreateMedia);
  }

  async get() {
    return await this.mediasRepository.get();
  }

  async getById(id: number) {
    const media = await this.mediasRepository.getById(id);
    if (!media) throw new NotFoundException();
    return media;
  }

  async put(id: number, UpdateMedia: UpdateMedias) {
    await this.getById(id);
    return await this.mediasRepository.put(id, UpdateMedia);
  }

  async delete(id: number) {
    await this.getById(id);
    return await this.mediasRepository.delete(id);
  }
}
