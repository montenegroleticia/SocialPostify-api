import { PartialType } from '@nestjs/mapped-types';
import { CreateMedias } from './CreateMedias';

export class UpdateMedias extends PartialType(CreateMedias) {}
