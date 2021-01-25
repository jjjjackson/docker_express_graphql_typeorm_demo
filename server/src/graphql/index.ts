// find the reference from https://www.graphql-tools.com/docs/stitch-combining-schemas/
// https://openbase.com/js/@graphql-tools/merge/documentation
import { makeExecutableSchema } from '@graphql-tools/schema'
import typeDefs from './types'
import resolvers from './resolvers'

export default makeExecutableSchema({
  typeDefs,
  resolvers,
})
