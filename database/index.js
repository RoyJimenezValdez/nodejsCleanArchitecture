import { instance } from './DAL/index'
import dotenv from 'dotenv'
dotenv.config()
;(async function setupDb () {
  console.log('Setting up database...')
  // database collection will automatically be created if it does not exist
  // indexes will only be added if they don't exist
  const db = await instance()
  const result = await db
    .collection('entries')
  console.log(result)
  console.log('Database setup complete...')
  process.exit()
})()
