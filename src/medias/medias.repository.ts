import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMedias } from './dtos/CreateMedias';
import { UpdateMedias } from './dtos/UpdateMedias';

@Injectable()
export class MediasRepository {
  constructor(private readonly prisma: PrismaService) {}

  async post(data: CreateMedias) {
    return this.prisma.medias.create({
      data,
      select: {
        id: true,
        title: true,
        username: true,
      },
    });
  }

  async get() {
    return this.prisma.medias.findMany({
      select: {
        id: true,
        title: true,
        username: true,
      },
    });
  }

  async getById(id: number) {
    return this.prisma.medias.findFirst({
      where: { id },
      select: {
        id: true,
        title: true,
        username: true,
      },
    });
  }

  async put(id: number, data: UpdateMedias) {
    return this.prisma.medias.update({
      where: { id },
      data,
      select: {
        id: true,
        title: true,
        username: true,
      },
    });
  }

  async delete(id: number) {
    return this.prisma.medias.delete({
      where: { id },
    });
  }
}
