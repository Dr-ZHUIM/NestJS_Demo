import { Module } from '@nestjs/common';
import { ArticlesService } from './service/articles.service';
import { ArticlesController } from './controllers/articles.controller';

@Module({
  providers: [ArticlesService],
  controllers: [ArticlesController],
  exports: [],
})
export class ArticlesModule {}
