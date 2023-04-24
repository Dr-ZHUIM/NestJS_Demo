import { Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseService {
  public connect() {
    return `<h1>connect to my dataBase --</h1>`;
  }
}
