import { Injectable } from '@nestjs/common';
import { CreateMedias } from './dtos/CreateMedias';
import { UpdateMedias } from './dtos/UpdateMedias';

@Injectable()
export class MediasService {
  post(CreateMedia: CreateMedias) {
    return;
  }

  get() {
    return;
  }

  getById(id: number) {
    return;
  }

  put(id: number, UpdateMedia: UpdateMedias) {
    return;
  }
}
