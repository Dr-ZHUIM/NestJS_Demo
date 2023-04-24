import { Module } from '@nestjs/common';
import { RegisterService } from './services/register.service';
import { RegisterController } from './controllers/register.controller';

@Module({
  exports: [RegisterService],
  controllers: [RegisterController],
  providers: [RegisterService],
})
export class UserModule {}
