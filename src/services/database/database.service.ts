import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseService {
  constructor(@Inject('config') private readonly config: Config) {}
  public connect() {
    return `<h1>connect to my dataBase -- ${this.config.dataBase}</h1>`;
  }
}
