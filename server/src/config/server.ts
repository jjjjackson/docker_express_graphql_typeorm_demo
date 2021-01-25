import Dotenv from 'dotenv'

Dotenv.config({
  path: '../.env',
})

export const SERVER_PORT = Number(process.env.SERVER_PORT) || 4000

export const DB_TYPE = 'mysql'
export const DB_HOST = process.env.MYSQL_HOST || 'localhost'
export const DB_PORT = Number(process.env.MYSQL_PORT) || 3306
export const DB_DATABASE = process.env.MYSQL_DATABASE || 'demo_db'
export const DB_USERNAME = process.env.MYSQL_USER || 'demo_user'
export const DB_PASSWORD = process.env.MYSQL_PASSWORD || 'demo_password'
