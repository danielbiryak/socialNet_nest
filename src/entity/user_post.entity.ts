import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user_post' })
export class UserPostEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column()
  owner_id: number;

  @Column({ length: 40 })
  title: string;

  @Column({ type: 'text' })
  text_content: string;
}
