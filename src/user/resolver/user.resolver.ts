import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserCreateInput } from '../../gql/input/user_create.input';
import { UserDTO } from '../../gql/type/user.dto';
import { UserService } from '../service/user.service';

@Resolver(() => UserDTO)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => UserDTO)
  getUser(@Args('id', { type: () => Int }) id: number): Promise<UserDTO> {
    return this.userService.getUser(id);
  }

  @Query(() => [UserDTO], { nullable: true })
  searchUsersByNickname(@Args('nickname') nickname: string) {
    return this.userService.searchUsersByNickname(nickname);
  }

  @Mutation(() => UserDTO)
  createUser(
    @Args('createUser') userCreateInput: UserCreateInput,
  ): Promise<UserDTO> {
    return this.userService.createUser(userCreateInput);
  }

  @Mutation(() => UserDTO, { nullable: true })
  authUser(
    @Args('nickname') nickname: string,
    @Args('password') password: string,
  ): Promise<UserDTO> {
    return this.userService.authUser(nickname, password);
  }
}
