import { Test, TestingModule } from '@nestjs/testing';
import { UserPostResolver } from './user_post.resolver';

describe('UserPostResolver', () => {
  let resolver: UserPostResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserPostResolver],
    }).compile();

    resolver = module.get<UserPostResolver>(UserPostResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
