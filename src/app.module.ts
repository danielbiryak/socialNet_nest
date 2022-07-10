import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { db_config } from './database/config.database';
import { UserModule } from './user/user.module';
import { UserPostModule } from './user_post/user_post.module';
import { PostLikeModule } from './post_like/post_like.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot(db_config),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    UserModule,
    UserPostModule,
    PostLikeModule,
  ],
})
export class AppModule {}
