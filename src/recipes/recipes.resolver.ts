	// src/recipes/resolver.ts
import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';
import { RecipesArgs } from './dto/find-recipes.args';
import { PubSub } from 'graphql-subscriptions';	
 
const pubSub = new PubSub();
 
@Resolver((of) => Recipe)
export class RecipesResolver {
  constructor(private readonly recipesService: RecipesService) {}
 
  @Query((returns) => Recipe)
  async recipe(@Args('id') id: string): Promise<Recipe> {
    const recipe = await this.recipesService.findOneById(id);
    if (!recipe) {
      throw new NotFoundException(id);
    }
    return recipe;
  }
 
  @Query((returns) => [Recipe])
  //write an example of the graphql query for the findAll to use in the playground
  recipes(@Args() recipesArgs: RecipesArgs): Promise<Recipe[]> {
    return this.recipesService.findAll(recipesArgs);
  }

  	
  @Mutation((returns) => Recipe)
  async addRecipe(
    @Args('newRecipeData') newRecipeData: CreateRecipeDto,
  ): Promise<Recipe> {
    const recipe = await this.recipesService.create(newRecipeData);
    pubSub.publish('recipeAdded', { recipeAdded: recipe }); // <-------------- changement
    return recipe;
  }
 
  @Mutation((returns) => Boolean)
  async removeRecipe(@Args('id') id: string) {
    return this.recipesService.remove(id);
  }
 
  @Subscription((returns) => Recipe) // <-------------- ajout
  recipeAdded() {
    return pubSub.asyncIterator('recipeAdded');
  }
}