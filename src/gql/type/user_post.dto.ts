import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType('UserPost')
export class UserPostDTO {
  @Field(() => ID)
  id: number;

  @Field(() => Int)
  owner_id: number;

  @Field()
  title: string;

  @Field()
  text_content: string;
}
