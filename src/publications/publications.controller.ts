import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { PublicationsService } from './publications.service';
import { CreatePublications } from './dtos/CreatePublications';
import { UpdatePublications } from './dtos/UpdatePublications';

@Controller('publications')
export class PublicationsController {
  constructor(private readonly publicationsService: PublicationsService) {}

  @Post()
  post(@Body() createPublication: CreatePublications) {
    try {
      return this.publicationsService.post(createPublication);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  get(@Query('published') published?: string, @Query('after') after?: Date) {
    try {
      return this.publicationsService.get();
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    try {
      return this.publicationsService.getById(+id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @Patch(':id')
  put(@Param('id') id: string, @Body() updatePublication: UpdatePublications) {
    try {
      return this.publicationsService.put(+id, updatePublication);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    try {
      return this.publicationsService.delete(+id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}
