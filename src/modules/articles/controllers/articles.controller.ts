import { Controller, Get, Param, Post, UsePipes, Body } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ArticlesPipe, CreateArticlesPipe } from '../articles.pipe';
import CreateArticleDto from '../dto/createArticles.Dto';
import { ArticlesService } from '../service/articles.service';

@Controller('/articles')
export class ArticlesController {
  constructor(
    private readonly config: ConfigService,
    private readonly article: ArticlesService,
  ) {}

  @Get('')
  async index() {
    return `index article => ${this.config.get('NODE_ENV')}`;
  }

  @Get(':id')
  @UsePipes(ArticlesPipe)
  getArticle(@Param('id') id: number) {
    return this.article.getArticle(id);
  }

  @Post('add')
  @UsePipes(CreateArticlesPipe)
  add(@Body() dto: CreateArticleDto) {
    console.log('dto', dto);
    return dto;
  }
}
