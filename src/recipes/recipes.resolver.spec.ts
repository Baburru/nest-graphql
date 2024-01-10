import { Test, TestingModule } from '@nestjs/testing';
import { RecipesResolver } from './recipes.resolver';
import { RecipesService } from '../recipes/recipes.service';
import { Recipe } from '../recipes/recipe.model';

describe('RecipesResolver', () => {
  let resolver: RecipesResolver;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecipesService, RecipesResolver],
    }).compile();
    resolver = module.get<RecipesResolver>(RecipesResolver);
  });
  it('should create a recipe', async () => {
    const newRecipe = {
      title: 'Spaghetti Bolognese',
      creationDate: new Date(),
      ingredients: ['spaghetti', 'tomatoes', 'meat'],
    };
    const createdRecipe = await resolver.addRecipe(newRecipe);
    const { id } = createdRecipe;
    expect(createdRecipe).toEqual({ id, ...newRecipe });
  });
  it('should find a recipe', async () => {
    const recipeId = '0';
    const retrievedRecipe = await resolver.recipe(recipeId);
    expect(retrievedRecipe).toBeDefined();
    expect(retrievedRecipe.id).toBe(recipeId);
  });
  it('should delete a recipe', async () => {
    const recipeId = '0';
    await resolver.removeRecipe(recipeId);
    try {
      await resolver.recipe(recipeId);
    } catch (error) {
      expect(error.response.error).toMatch(/Not Found/i);
    }
  });
});