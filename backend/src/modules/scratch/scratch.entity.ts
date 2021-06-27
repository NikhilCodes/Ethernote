import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class ScratchEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  user: string;

  @Column({ default: '' })
  value: string;
}
