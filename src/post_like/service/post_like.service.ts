import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostLikeEntity } from '../../entity/post_like.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostLikeService {
  constructor(
    @InjectRepository(PostLikeEntity)
    private readonly postLikeRepository: Repository<PostLikeEntity>,
  ) {}

  async likePostMethod(post_id: number, user_id: number) {
    const likeState = await this.postLikeRepository.findOneBy({
      post_id,
      user_id,
    });
    if (!likeState) {
      const likeEntity: PostLikeEntity = { post_id, user_id };
      this.postLikeRepository.save(likeEntity);

      return true;
    } else {
      this.postLikeRepository.delete({ post_id, user_id });

      return false;
    }
  }

  async getUsersLikeState(user_id: number, post_id: number) {
    const likeState = await this.postLikeRepository.findOneBy({
      user_id,
      post_id,
    });
    return likeState != null;
  }

  getPostLikesCount(post_id: number) {
    return this.postLikeRepository.countBy({ post_id });
  }
}
