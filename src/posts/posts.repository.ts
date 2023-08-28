import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePosts } from './dtos/CreatePosts';
import { UpdatePosts } from './dtos/UpdatePosts';

@Injectable()
export class PostsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async post(data: CreatePosts) {
    return this.prisma.posts.create({
      data,
      select: {
        id: true,
        title: true,
        text: true,
        image: true,
      },
    });
  }

  async get() {
    return this.prisma.posts.findMany({
      select: {
        id: true,
        title: true,
        text: true,
        image: true,
      },
    });
  }

  async getById(id: number) {
    return this.prisma.posts.findFirst({
      where: { id },
      select: {
        id: true,
        title: true,
        text: true,
        image: true,
      },
    });
  }

  async put(id: number, data: UpdatePosts) {
    return this.prisma.posts.update({
      where: { id },
      data,
      select: {
        id: true,
        title: true,
        text: true,
        image: true,
      },
    });
  }

  async delete(id: number) {
    return this.prisma.posts.delete({
      where: { id },
    });
  }
}
