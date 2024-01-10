import { Injectable } from '@nestjs/common';

import { Recipe } from './recipe.model';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { RecipesArgs } from './dto/find-recipes.args'

const RECIPES: Recipe[] = [];
let uniqueID = 0

@Injectable()
export class RecipesService {

  async create(data: CreateRecipeDto): Promise<Recipe> {
    const recipe: Recipe = {
      ...data,
      id: String(uniqueID++),
      creationDate: new Date(),
    }
    RECIPES.push(recipe);
    return recipe;
  }

  async findOneById(id: string): Promise<Recipe> {
    return RECIPES.find((recipe) => recipe.id === id);
  }

  async findAll(recipesArgs: RecipesArgs): Promise<Recipe[]> {
    //TODO return all recipes
    return RECIPES.slice(recipesArgs.skip, recipesArgs.take);
  }

  async remove(id: string): Promise<boolean> {
    RECIPES.splice(RECIPES.findIndex((recipe) => recipe.id === id), 1);
    return true;
  }
}
