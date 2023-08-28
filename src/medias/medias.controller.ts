import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MediasService } from './medias.service';
import { CreateMedias } from './dtos/CreateMedias';
import { UpdateMedias } from './dtos/UpdateMedias';

@Controller('medias')
export class MediasController {
  constructor(private readonly mediasService: MediasService) {}

  @Post()
  post(@Body() CreateMedia: CreateMedias) {
    return this.mediasService.post(CreateMedia);
  }

  @Get()
  get() {
    return this.mediasService.get();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.mediasService.getById(+id);
  }

  @Put(':id')
  put(@Param('id') id: string, @Body() UpdateMedia: UpdateMedias) {
    return this.mediasService.put(+id, UpdateMedia);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.mediasService.delete(+id);
  }
}
