import { PartialType } from '@nestjs/mapped-types';
import { CreatePosts } from './CreatePosts';

export class UpdatePosts extends PartialType(CreatePosts) {}
