//créer le model src/recipes/recipe.model.ts
import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'recipe ' })
export class Recipe {
    @Field((type) => ID)
    id: string;

    @Field()
    @Directive('@upper')
    title: string;

    @Field({ nullable: true })
    description?: string;

    @Field()
    creationDate: Date;

    @Field((type) => [String])
    ingredients: string[];
}
