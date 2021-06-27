import { Controller, Get, Req } from '@nestjs/common';
import { Secure } from '../../decorators';

@Controller('users')
export class UsersController {
  @Secure()
  @Get()
  async getSelfUser(@Req() req) {
    return req.user;
  }
}
