import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserPostEntity } from '../../entity/user_post.entity';
import { UserPostInput } from '../../gql/input/user_post_create.input';
import { Repository } from 'typeorm';

@Injectable()
export class UserPostService {
  constructor(
    @InjectRepository(UserPostEntity)
    private readonly userPostRepository: Repository<UserPostEntity>,
  ) {}

  async createUserPost(userPost: UserPostInput) {
    return this.userPostRepository.save(userPost);
  }

  getUserPosts(userId: number) {
    return this.userPostRepository.find({ where: { owner_id: userId } });
  }
}
