import { Module, forwardRef } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { PostsRepository } from './posts.repository';
import { PrismaModule } from '../prisma/prisma.module';
import { PublicationsModule } from '../publications/publications.module';

@Module({
  controllers: [PostsController],
  providers: [PostsService, PostsRepository],
  imports: [PrismaModule, forwardRef(() => PublicationsModule)],
  exports: [PostsService],
})
export class PostsModule {}
