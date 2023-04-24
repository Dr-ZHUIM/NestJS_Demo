import { Controller, Get } from '@nestjs/common';
import { ConfigService } from 'src/modules/config/service/config.service';

@Controller('/articles')
export class ArticlesController {
  constructor(private readonly config: ConfigService) {}

  @Get('')
  async index() {
    return `index article => ${this.config.getConfig().dev.dataBase}`;
  }
}
