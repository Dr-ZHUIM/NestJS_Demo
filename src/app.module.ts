import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseService } from './services/database/database.service';
import { UserModule } from './modules/user/user.module';
import { ArticlesModule } from './modules/articles/articles.module';
import { ConfigModule } from './modules/config/config.module';

console.log(process.env.NODE_ENV);

@Module({
  imports: [UserModule, ArticlesModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService, DatabaseService],
})
export class AppModule {}
