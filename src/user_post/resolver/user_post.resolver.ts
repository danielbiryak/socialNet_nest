import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserPostInput } from '../../gql/input/user_post_create.input';
import { UserPostDTO } from '../../gql/type/user_post.dto';
import { UserPostService } from '../service/user_post.service';

@Resolver(() => UserPostDTO)
export class UserPostResolver {
  constructor(private readonly userPostService: UserPostService) {}

  @Mutation(() => UserPostDTO)
  createUserPost(@Args('userPost') userPost: UserPostInput) {
    return this.userPostService.createUserPost(userPost);
  }

  @Query(() => [UserPostDTO], { nullable: true })
  getUserPosts(@Args('userId', { type: () => Int }) userId: number) {
    return this.userPostService.getUserPosts(userId);
  }
}
