import devConfig from 'src/config/dev.config';
import productConfig from 'src/config/product.config';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../../../.env') });

export const ConfigService = {
  provide: 'config',
  useValue: process.env.NODE_ENV === 'development' ? devConfig : productConfig,
};
