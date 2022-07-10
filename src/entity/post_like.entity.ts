import { Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'post_like' })
export class PostLikeEntity {
  @PrimaryColumn()
  user_id: number;

  @PrimaryColumn()
  post_id: number;
}
