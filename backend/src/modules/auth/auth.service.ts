import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email);
    if (user && (await argon2.verify(user.passkey, pass))) {
      const { passkey, ...result } = user;
      return result;
    }
    return null;
  }

  async login(obj: { email: string; password: string }) {
    const foundUser = await this.validateUser(obj.email, obj.password);
    if (!foundUser) {
      throw new UnauthorizedException('Invalid Credentials');
    }
    const payload = { sub: foundUser.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(obj: { email: string; name: string; password: string }) {
    const hashed_password = await argon2.hash(obj.password);

    const newUser = await this.usersService.createUser({
      email: obj.email,
      name: obj.name,
      passkey_raw: hashed_password,
    });

    const payload = { sub: newUser.id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  getAuthStatus(token: string) {
    try {
      this.jwtService.verify(token);
    } catch (e) {
      if (e.message !== 'invalid token') {
        console.log(e.message);
      }

      return false;
    }

    return true;
  }
}
