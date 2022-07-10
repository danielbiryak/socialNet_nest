import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PostLikeDTO } from 'src/gql/type/post_like.dto';
import { PostLikeService } from '../service/post_like.service';

@Resolver(() => PostLikeDTO)
export class PostLikeResolver {
  constructor(private readonly postLikeService: PostLikeService) {}

  @Mutation(() => Boolean)
  postLikeMethod(
    @Args('post_id', { type: () => Int }) post_id: number,
    @Args('user_id', { type: () => Int }) user_id: number,
  ) {
    return this.postLikeService.likePostMethod(post_id, user_id);
  }

  @Query(() => Boolean)
  getUsersLikeState(
    @Args('post_id', { type: () => Int }) post_id: number,
    @Args('user_id', { type: () => Int }) user_id: number,
  ) {
    return this.postLikeService.getUsersLikeState(post_id, user_id);
  }

  @Query(() => Int)
  getPostLikesCount(@Args('post_id', { type: () => Int }) post_id: number) {
    return this.postLikeService.getPostLikesCount(post_id);
  }
}
