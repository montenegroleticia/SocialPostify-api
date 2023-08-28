import { PartialType } from '@nestjs/mapped-types';
import { CreatePublications } from './CreatePublications';

export class UpdatePublications extends PartialType(CreatePublications) {}
