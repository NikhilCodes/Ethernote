import { Controller, Get } from '@nestjs/common';
import { Cookies, Secure } from '../../decorators';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Secure()
  @Get()
  async getSelfUser(@Cookies('token') token) {
    return this.usersService.findUserByToken(token);
  }
}
