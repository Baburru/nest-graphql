import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'src/schema.gql',
  generates: {
    'gql/': {
      preset: 'client',
      documents: 'src/*.gql',
      plugins: ['typescript-react-apollo'],
    },
  },
};

export default config;
