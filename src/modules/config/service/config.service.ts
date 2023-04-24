import { Injectable } from '@nestjs/common';
import { readdirSync } from 'fs';
import path from 'path';

@Injectable()
export class ConfigService {
  private config: Config = {};

  constructor() {
    const config = { path: path.resolve(__dirname, '../../../config') };
    console.log('configPath', config);
    readdirSync(config.path, { encoding: 'utf-8' }).map(async (file) => {
      if (file.slice(-2) === 'js') {
        const module = await import(path.resolve(config.path, file));
        this.config = { ...this.config, ...module.default };
        console.log('this.config', this.config);
      }
    });
  }

  public getConfig() {
    return this.config;
  }
}
