import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { DatabaseService } from './services/database/database.service';
import { ConfigService } from './modules/config/service/config.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly dbService: DatabaseService,
    private readonly configService: ConfigService,
  ) {}

  @Get('getHello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('connectDb')
  connectDb(): string {
    return this.dbService.connect();
  }

  @Get('getConfig')
  getConfig(): Config {
    return this.configService.getConfig();
  }
}
