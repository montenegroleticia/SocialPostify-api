import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PublicationsService } from './publications.service';
import { CreatePublications } from './dtos/CreatePublications';
import { UpdatePublications } from './dtos/UpdatePublications';

@Controller('publications')
export class PublicationsController {
  constructor(private readonly publicationsService: PublicationsService) {}

  @Post()
  post(@Body() createPublication: CreatePublications) {
    return this.publicationsService.post(createPublication);
  }

  @Get()
  get() {
    return this.publicationsService.get();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.publicationsService.getById(+id);
  }

  @Patch(':id')
  put(@Param('id') id: string, @Body() updatePublication: UpdatePublications) {
    return this.publicationsService.put(+id, updatePublication);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.publicationsService.delete(+id);
  }
}
