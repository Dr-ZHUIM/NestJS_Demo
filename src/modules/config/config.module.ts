import { Module } from '@nestjs/common';
import { Global } from '@nestjs/common/decorators';
import { ConfigService } from './service/config.service';
@Global()
@Module({
  imports: [],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
