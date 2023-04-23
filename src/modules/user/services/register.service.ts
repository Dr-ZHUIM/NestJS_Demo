import { Injectable, Inject } from '@nestjs/common';
import { DOMAIN } from 'src/constants/cons';

@Injectable()
export class RegisterService {
  constructor(
    @Inject('config')
    private readonly config: Config,
  ) {}
  public createUser() {
    return 'here is a new User.' + DOMAIN + this.config.defaultAvatarUrl;
  }
}
