import { Module } from '@nestjs/common';
import { ArticlesService } from './service/articles.service';
import { ConfigModule } from '../config/config.module';
import { ArticlesController } from './controllers/articles.controller';

@Module({
  providers: [ArticlesService],
  controllers: [ArticlesController],
  exports: [],
})
export class ArticlesModule {}
