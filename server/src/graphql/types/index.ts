// find the reference from https://www.graphql-tools.com/docs/stitch-combining-schemas/
import path from 'path'
import { loadFilesSync } from '@graphql-tools/load-files'
import { mergeTypeDefs } from '@graphql-tools/merge'

const typesArray = loadFilesSync(path.join(__dirname, './'), {
  extensions: ['graphql'],
})

export default mergeTypeDefs(typesArray)
