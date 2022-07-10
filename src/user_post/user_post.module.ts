import { Module } from '@nestjs/common';
import { UserPostService } from './service/user_post.service';
import { UserPostResolver } from './resolver/user_post.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserPostEntity } from 'src/entity/user_post.entity';
import { UserService } from 'src/user/service/user.service';
import { UserEntity } from 'src/entity/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserPostEntity, UserEntity])],
  providers: [UserPostService, UserPostResolver, UserService],
})
export class UserPostModule {}
