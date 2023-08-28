import { IsDateString, IsInt, IsNotEmpty } from 'class-validator';

export class CreatePublications {
  @IsNotEmpty()
  @IsInt()
  mediaId: number;

  @IsNotEmpty()
  @IsInt()
  postId: number;

  @IsNotEmpty()
  @IsDateString()
  date: Date;
}
