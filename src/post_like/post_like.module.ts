import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostLikeEntity } from 'src/entity/post_like.entity';
import { PostLikeResolver } from './resolver/post_like.resolver';
import { PostLikeService } from './service/post_like.service';

@Module({
  imports: [TypeOrmModule.forFeature([PostLikeEntity])],
  providers: [PostLikeResolver, PostLikeService],
})
export class PostLikeModule {}
