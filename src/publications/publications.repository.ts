import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePublications } from './dtos/CreatePublications';
import { UpdatePublications } from './dtos/UpdatePublications';

@Injectable()
export class PublicationsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async post(data: CreatePublications) {
    return this.prisma.publications.create({
      data,
      select: {
        id: true,
        mediaId: true,
        postId: true,
        date: true,
      },
    });
  }

  async get() {
    return this.prisma.publications.findMany({
      select: {
        id: true,
        mediaId: true,
        postId: true,
        date: true,
      },
    });
  }

  async getById(id: number) {
    return this.prisma.publications.findFirst({
      where: { id },
      select: {
        id: true,
        mediaId: true,
        postId: true,
        date: true,
      },
    });
  }

  async put(id: number, data: UpdatePublications) {
    return this.prisma.publications.update({
      where: { id },
      data,
      select: {
        id: true,
        mediaId: true,
        postId: true,
        date: true,
      },
    });
  }

  async delete(id: number) {
    return this.prisma.publications.delete({ where: { id } });
  }
}
