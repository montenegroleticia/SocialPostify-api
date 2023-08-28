import { Module, forwardRef } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { PostsRepository } from './posts.repository';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PublicationsModule } from 'src/publications/publications.module';

@Module({
  controllers: [PostsController],
  providers: [PostsService, PostsRepository],
  imports: [PrismaModule, forwardRef(() => PublicationsModule)],
  exports: [PostsService],
})
export class PostsModule {}
