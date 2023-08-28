import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMedias {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  username: string;
}
