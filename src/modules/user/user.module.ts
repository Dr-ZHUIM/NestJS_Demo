import { Module } from '@nestjs/common';
import { RegisterService } from './services/register.service';
import { ConfigService } from 'src/services/config/config.service';
import { RegisterController } from './controllers/register.controller';

@Module({
  exports: [RegisterService],
  controllers: [RegisterController],
  providers: [RegisterService, ConfigService],
})
export class UserModule {}
