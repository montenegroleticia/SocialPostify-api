import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
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
    try {
      return this.mediasService.post(CreateMedia);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  get() {
    try {
      return this.mediasService.get();
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    try {
      return this.mediasService.getById(+id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @Put(':id')
  put(@Param('id') id: string, @Body() UpdateMedia: UpdateMedias) {
    try {
      return this.mediasService.put(+id, UpdateMedia);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    try {
      return this.mediasService.delete(+id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}
