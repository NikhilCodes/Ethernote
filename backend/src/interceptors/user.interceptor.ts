import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UsersService } from '../modules/users/users.service';

export default class UserInterceptor implements NestInterceptor {
  constructor(private usersService: UsersService) {}

  async intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ) {
    const request = context.switchToHttp().getRequest();

    const token = request.cookies?.token;
    if (token) {
      request.user = await this.usersService.findUserByToken(token);
    }

    return next.handle();
  }
}
