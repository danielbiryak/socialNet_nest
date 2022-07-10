import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20 })
  nickname: string;

  @Column({ length: 30 })
  password: string;

  @Column({ length: 30 })
  name: string;

  @Column({ length: 15 })
  birthday_date: string;
}
