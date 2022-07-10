import { Test, TestingModule } from '@nestjs/testing';
import { PostLikeResolver } from './post_like.resolver';

describe('PostLikeResolver', () => {
  let resolver: PostLikeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostLikeResolver],
    }).compile();

    resolver = module.get<PostLikeResolver>(PostLikeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
