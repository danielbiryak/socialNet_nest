import { Field, InputType } from '@nestjs/graphql';

@InputType('UserCreate')
export class UserCreateInput {
  @Field()
  nickname: string;

  @Field()
  password: string;

  @Field()
  name: string;

  @Field()
  birthday_date: string;
}
