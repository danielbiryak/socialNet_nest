import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('User')
export class UserDTO {
  @Field(() => ID)
  id: number;

  @Field()
  nickname: string;

  @Field()
  password: string;

  @Field()
  name: string;

  @Field()
  birthday_date: string;
}
