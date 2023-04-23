import { Controller, Get } from '@nestjs/common';
import { RegisterService } from '../services/register.service';

@Controller('/register')
export class RegisterController {
  constructor(private readonly register: RegisterService) {}

  @Get('/createUser')
  createUser() {
    return this.register.createUser();
  }
}
