import { Injectable } from '@nestjs/common';
import { CreatePublications } from './dtos/CreatePublications';
import { UpdatePublications } from './dtos/UpdatePublications';

@Injectable()
export class PublicationsService {
  post(createPublication: CreatePublications) {
    return;
  }

  get() {
    return;
  }

  getById(id: number) {
    return;
  }

  put(id: number, updatePublication: UpdatePublications) {
    return;
  }

  delete(id: number) {
    return;
  }
}
