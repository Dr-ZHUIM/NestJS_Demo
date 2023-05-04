import { IsNotEmpty } from 'class-validator';

export default class CreateArticleDto {
  @IsNotEmpty({ message: 'Error! Title cannot be empty!' })
  title: string;
  @IsNotEmpty({ message: 'Error! Content cannot be empty!' })
  content: string;
}
