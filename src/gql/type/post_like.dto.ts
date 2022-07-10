import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('PostLike')
export class PostLikeDTO {
  @Field(() => ID)
  user_id: number;

  @Field(() => ID)
  post_id: number;
}
