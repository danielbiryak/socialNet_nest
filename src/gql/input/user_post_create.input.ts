import { Field, ID, InputType } from '@nestjs/graphql';

@InputType('UserPostCreate')
export class UserPostInput {
  @Field(() => ID)
  owner_id: number;

  @Field()
  title: string;

  @Field()
  text_content: string;
}
