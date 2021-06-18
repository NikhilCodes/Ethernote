import { Controller, Request, Post, Response, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Cookies, Secure } from '../../decorators';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Request() req, @Response({ passthrough: true }) res) {
    const { access_token } = await this.authService.login(req.body);
    res.cookie('token', access_token, {
      maxAge: new Date(new Date().getTime() + 60 * 60 * 24 * 30),
      sameSite: 'strict',
      httpOnly: true,
    });
  }

  @Post('register')
  async register(@Request() req, @Response({ passthrough: true }) res) {
    const { access_token } = await this.authService.register(req.body);
    res.cookie('token', access_token, {
      maxAge: new Date(new Date().getTime() + 60 * 60 * 24 * 30),
      sameSite: 'strict',
      httpOnly: true,
    });
  }

  @Get('status')
  async getAuthStatus(@Cookies('token') token: string) {
    let authStatus;
    if (!token) {
      authStatus = false;
    } else {
      authStatus = this.authService.getAuthStatus(token);
    }
    return {
      authStatus,
    };
  }

  @Secure()
  @Get()
  getAuthUser(@Request() req) {
    return req.user;
  }
}
