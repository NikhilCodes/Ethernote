import { EntityRepository, Repository } from 'typeorm';
import UsersEntity from '../modules/users/users.entity';

@EntityRepository(UsersEntity)
export class UsersRepository extends Repository<UsersEntity> {}
