import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../../entity/user.entity';
import { UserCreateInput } from '../../gql/input/user_create.input';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  getUser(id: number) {
    return this.userRepository.findOneBy({ id: id });
  }

  createUser(user: UserCreateInput): Promise<UserEntity> {
    return this.userRepository.save(user).then((res) => {
      return Promise.resolve(res);
    });
  }

  authUser(nickname: string, password: string): Promise<UserEntity> {
    return this.userRepository.findOneBy({
      password: password,
      nickname: nickname,
    });
  }

  searchUsersByNickname(nickname: string) {
    return this.userRepository.findBy({ nickname });
  }
}
