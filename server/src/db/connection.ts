import { createConnection, Connection, ConnectionOptions } from 'typeorm'
import {
  DB_TYPE,
  DB_HOST,
  DB_PORT,
  DB_DATABASE,
  DB_USERNAME,
  DB_PASSWORD,
} from 'src/config/server'
import * as path from 'path'

const connectionOpts: ConnectionOptions = {
  type: DB_TYPE,
  host: DB_HOST,
  port: DB_PORT,
  database: DB_DATABASE,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  entities: [path.join(__dirname, `../entity/*.ts`)],
  synchronize: true,
}

const connection: Promise<Connection> = createConnection(connectionOpts)

export default connection
