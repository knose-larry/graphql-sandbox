import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs } from '@graphql-tools/merge';
import path from 'path';

// Load all .graphql files from the schema directory
const typesArray = loadFilesSync(path.join(__dirname, './*.graphql'));

// Merge all the type definitions into a single schema
export const typeDefs = mergeTypeDefs(typesArray);