import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersRepository } from '../../repositories/user.repository';
import { EMAIL_REGEX } from '../../shared/regex';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    private usersRepository: UsersRepository,
    private jwtService: JwtService,
  ) {}

  async findOneByEmail(email: string) {
    if (!EMAIL_REGEX.test(email)) {
      throw new BadRequestException(`Invalid email: ${email}`);
    }

    return this.usersRepository.findOne({
      where: { email },
    });
  }

  async createUser(obj: { name: string; email: string; passkey_raw: string }) {
    return this.usersRepository.save({
      email: obj.email,
      fullName: obj.name,
      passkey: obj.passkey_raw,
    });
  }

  async findUserByToken(token: string) {
    return this.usersRepository.findOne(this.jwtService.decode(token).sub, {
      select: ['fullName', 'email', 'id'],
    });
  }
}
