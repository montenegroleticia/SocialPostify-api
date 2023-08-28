import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePosts {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  text: string;

  @IsOptional()
  @IsString()
  image: string;
}
