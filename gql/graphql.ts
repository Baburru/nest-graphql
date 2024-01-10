/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type CreateRecipeDto = {
  description?: InputMaybe<Scalars['String']['input']>;
  ingredients: Array<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addRecipe: Recipe;
  removeRecipe: Scalars['Boolean']['output'];
};


export type MutationAddRecipeArgs = {
  newRecipeData: CreateRecipeDto;
};


export type MutationRemoveRecipeArgs = {
  id: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  recipe: Recipe;
  recipes: Array<Recipe>;
};


export type QueryRecipeArgs = {
  id: Scalars['String']['input'];
};


export type QueryRecipesArgs = {
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};

/** recipe  */
export type Recipe = {
  __typename?: 'Recipe';
  creationDate: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  ingredients: Array<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type Subscription = {
  __typename?: 'Subscription';
  recipeAdded: Recipe;
};

export type CreateRecipeMutationVariables = Exact<{
  title: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  ingredients: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type CreateRecipeMutation = { __typename?: 'Mutation', addRecipe: { __typename?: 'Recipe', id: string, title: string, description?: string | null, ingredients: Array<string> } };

export type FindAllRecipesQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllRecipesQuery = { __typename?: 'Query', recipes: Array<{ __typename?: 'Recipe', id: string, title: string, description?: string | null, ingredients: Array<string>, creationDate: any }> };

export type FindRecipeByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type FindRecipeByIdQuery = { __typename?: 'Query', recipe: { __typename?: 'Recipe', id: string, title: string, description?: string | null, ingredients: Array<string>, creationDate: any } };

export type RecipeAddedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type RecipeAddedSubscription = { __typename?: 'Subscription', recipeAdded: { __typename?: 'Recipe', id: string, title: string, description?: string | null, ingredients: Array<string>, creationDate: any } };


/* export const CreateRecipeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createRecipe"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ingredients"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addRecipe"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"newRecipeData"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"ingredients"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ingredients"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"ingredients"}}]}}]}}]} as unknown as DocumentNode<CreateRecipeMutation, CreateRecipeMutationVariables>;
export const FindAllRecipesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findAllRecipes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"recipes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"ingredients"}},{"kind":"Field","name":{"kind":"Name","value":"creationDate"}}]}}]}}]} as unknown as DocumentNode<FindAllRecipesQuery, FindAllRecipesQueryVariables>;
export const FindRecipeByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findRecipeById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"recipe"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"ingredients"}},{"kind":"Field","name":{"kind":"Name","value":"creationDate"}}]}}]}}]} as unknown as DocumentNode<FindRecipeByIdQuery, FindRecipeByIdQueryVariables>;
export const RecipeAddedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"recipeAdded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"recipeAdded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"ingredients"}},{"kind":"Field","name":{"kind":"Name","value":"creationDate"}}]}}]}}]} as unknown as DocumentNode<RecipeAddedSubscription, RecipeAddedSubscriptionVariables>;
 */
export const CreateRecipeDocument = gql`
    mutation createRecipe($title: String!, $description: String, $ingredients: [String!]!) {
  addRecipe(
    newRecipeData: {title: $title, description: $description, ingredients: $ingredients}
  ) {
    id
    title
    description
    ingredients
  }
}
    `;
export type CreateRecipeMutationFn = Apollo.MutationFunction<CreateRecipeMutation, CreateRecipeMutationVariables>;

/**
 * __useCreateRecipeMutation__
 *
 * To run a mutation, you first call `useCreateRecipeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRecipeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRecipeMutation, { data, loading, error }] = useCreateRecipeMutation({
 *   variables: {
 *      title: // value for 'title'
 *      description: // value for 'description'
 *      ingredients: // value for 'ingredients'
 *   },
 * });
 */
export function useCreateRecipeMutation(baseOptions?: Apollo.MutationHookOptions<CreateRecipeMutation, CreateRecipeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateRecipeMutation, CreateRecipeMutationVariables>(CreateRecipeDocument, options);
      }
export type CreateRecipeMutationHookResult = ReturnType<typeof useCreateRecipeMutation>;
export type CreateRecipeMutationResult = Apollo.MutationResult<CreateRecipeMutation>;
export type CreateRecipeMutationOptions = Apollo.BaseMutationOptions<CreateRecipeMutation, CreateRecipeMutationVariables>;
export const FindAllRecipesDocument = gql`
    query findAllRecipes {
  recipes {
    id
    title
    description
    ingredients
    creationDate
  }
}
    `;

/**
 * __useFindAllRecipesQuery__
 *
 * To run a query within a React component, call `useFindAllRecipesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllRecipesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllRecipesQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindAllRecipesQuery(baseOptions?: Apollo.QueryHookOptions<FindAllRecipesQuery, FindAllRecipesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAllRecipesQuery, FindAllRecipesQueryVariables>(FindAllRecipesDocument, options);
      }
export function useFindAllRecipesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAllRecipesQuery, FindAllRecipesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAllRecipesQuery, FindAllRecipesQueryVariables>(FindAllRecipesDocument, options);
        }
export function useFindAllRecipesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindAllRecipesQuery, FindAllRecipesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindAllRecipesQuery, FindAllRecipesQueryVariables>(FindAllRecipesDocument, options);
        }
export type FindAllRecipesQueryHookResult = ReturnType<typeof useFindAllRecipesQuery>;
export type FindAllRecipesLazyQueryHookResult = ReturnType<typeof useFindAllRecipesLazyQuery>;
export type FindAllRecipesSuspenseQueryHookResult = ReturnType<typeof useFindAllRecipesSuspenseQuery>;
export type FindAllRecipesQueryResult = Apollo.QueryResult<FindAllRecipesQuery, FindAllRecipesQueryVariables>;
export const FindRecipeByIdDocument = gql`
    query findRecipeById($id: String!) {
  recipe(id: $id) {
    id
    title
    description
    ingredients
    creationDate
  }
}
    `;

/**
 * __useFindRecipeByIdQuery__
 *
 * To run a query within a React component, call `useFindRecipeByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindRecipeByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindRecipeByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindRecipeByIdQuery(baseOptions: Apollo.QueryHookOptions<FindRecipeByIdQuery, FindRecipeByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindRecipeByIdQuery, FindRecipeByIdQueryVariables>(FindRecipeByIdDocument, options);
      }
export function useFindRecipeByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindRecipeByIdQuery, FindRecipeByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindRecipeByIdQuery, FindRecipeByIdQueryVariables>(FindRecipeByIdDocument, options);
        }
export function useFindRecipeByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindRecipeByIdQuery, FindRecipeByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindRecipeByIdQuery, FindRecipeByIdQueryVariables>(FindRecipeByIdDocument, options);
        }
export type FindRecipeByIdQueryHookResult = ReturnType<typeof useFindRecipeByIdQuery>;
export type FindRecipeByIdLazyQueryHookResult = ReturnType<typeof useFindRecipeByIdLazyQuery>;
export type FindRecipeByIdSuspenseQueryHookResult = ReturnType<typeof useFindRecipeByIdSuspenseQuery>;
export type FindRecipeByIdQueryResult = Apollo.QueryResult<FindRecipeByIdQuery, FindRecipeByIdQueryVariables>;
export const RecipeAddedDocument = gql`
    subscription recipeAdded {
  recipeAdded {
    id
    title
    description
    ingredients
    creationDate
  }
}
    `;

/**
 * __useRecipeAddedSubscription__
 *
 * To run a query within a React component, call `useRecipeAddedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useRecipeAddedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecipeAddedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useRecipeAddedSubscription(baseOptions?: Apollo.SubscriptionHookOptions<RecipeAddedSubscription, RecipeAddedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<RecipeAddedSubscription, RecipeAddedSubscriptionVariables>(RecipeAddedDocument, options);
      }
export type RecipeAddedSubscriptionHookResult = ReturnType<typeof useRecipeAddedSubscription>;
export type RecipeAddedSubscriptionResult = Apollo.SubscriptionResult<RecipeAddedSubscription>;