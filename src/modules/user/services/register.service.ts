import { Injectable, Inject } from '@nestjs/common';
import { DOMAIN } from 'src/constants/cons';

@Injectable()
export class RegisterService {
  public createUser() {
    return 'here is a new User.' + DOMAIN;
  }
}
