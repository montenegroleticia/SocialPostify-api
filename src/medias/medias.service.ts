import {
  ConflictException,
  ForbiddenException,
  Inject,
  Injectable,
  NotFoundException,
  forwardRef,
} from '@nestjs/common';
import { MediasRepository } from './medias.repository';
import { CreateMedias } from './dtos/CreateMedias';
import { UpdateMedias } from './dtos/UpdateMedias';
import { PublicationsService } from '../publications/publications.service';

@Injectable()
export class MediasService {
  constructor(
    private readonly mediasRepository: MediasRepository,
    @Inject(forwardRef(() => PublicationsService))
    private readonly publicationsService: PublicationsService,
  ) {}

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
    const publication = await this.publicationsService.getByMediaId(id);
    if (publication) throw new ForbiddenException();
    return await this.mediasRepository.delete(id);
  }
}
