import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class UsersEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ nullable: false })
  fullName: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ nullable: false })
  passkey: string;
}
