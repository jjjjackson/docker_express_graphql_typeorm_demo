import Express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { SERVER_PORT } from 'src/config/server'
import SCHEMA from 'src/graphql'
import DBConnection from 'src/db/connection'

const app = Express()

// GraphQL

const startServer = async () => {
  await DBConnection

  app.use(
    '/graphql',
    graphqlHTTP({
      schema: SCHEMA,
      graphiql: true,
    }),
    (err) => {
      console.log(err)
      // return { message: error.message, statusCode: error.statusCode }
    },
  )

  app.listen(SERVER_PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${SERVER_PORT}/graphql`)
  })
}

startServer()
