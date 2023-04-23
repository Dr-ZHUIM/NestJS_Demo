import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigService } from './services/config/config.service';
import { DatabaseService } from './services/database/database.service';
import { UserModule } from './modules/user/user.module';

console.log(process.env.NODE_ENV);

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService, ConfigService, DatabaseService],
})
export class AppModule {}
