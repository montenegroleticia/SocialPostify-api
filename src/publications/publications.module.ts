import { Module, forwardRef } from '@nestjs/common';
import { PublicationsController } from './publications.controller';
import { PublicationsService } from './publications.service';
import { PublicationsRepository } from './publications.repository';
import { PrismaModule } from '../prisma/prisma.module';
import { PostsModule } from '../posts/posts.module';
import { MediasModule } from '../medias/medias.module';

@Module({
  controllers: [PublicationsController],
  providers: [PublicationsService, PublicationsRepository],
  imports: [
    PrismaModule,
    forwardRef(() => PostsModule),
    forwardRef(() => MediasModule),
  ],
  exports: [PublicationsService],
})
export class PublicationsModule {}
