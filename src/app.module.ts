import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { RecipesModule } from './recipes/recipes.module';
import { join } from 'path';

@Module({
  imports: [GraphQLModule.forRoot({
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    installSubscriptionHandlers: true,
  }),RecipesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
