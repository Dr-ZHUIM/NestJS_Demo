import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  BadRequestException,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import CreateArticleDto from './dto/createArticles.Dto';

@Injectable()
export class ArticlesPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    return metadata.metatype === Number ? +value : value;
  }
}

@Injectable()
export class CreateArticlesPipe implements PipeTransform {
  async transform(value: CreateArticleDto, metadata: ArgumentMetadata) {
    const instance = plainToInstance(metadata.metatype, value);
    const errors = await validate(instance);
    if (errors.length) {
      let errString = '';
      errors.map((err) => {
        const errArr = Object.values(err.constraints);
        errArr.forEach((str) => (errString += `${str}\n`));
        console.log('err', err.constraints);
      });
      throw new BadRequestException('表单验证错误');
    }
    return value;
  }
}
