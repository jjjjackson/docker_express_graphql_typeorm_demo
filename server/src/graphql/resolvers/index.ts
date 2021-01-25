// find the reference from https://www.graphql-tools.com/docs/stitch-combining-schemas/
import path from 'path'
import { loadFilesSync } from '@graphql-tools/load-files'
import { mergeResolvers } from '@graphql-tools/merge'

const resolversArray = loadFilesSync(path.join(__dirname, './**/*.resolver.*'))

export default mergeResolvers(resolversArray)
