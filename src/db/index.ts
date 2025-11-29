import { Pool } from 'pg'
import { config } from 'dotenv'
import { drizzle } from 'drizzle-orm/node-postgres'

import { senv } from '@/env/server'
import { tasks } from '@/db/schemas/tasks'

config()

const pool = new Pool({
  connectionString: senv.DATABASE_URL,
  max: 10,
})
export const db = drizzle(pool, {
  schema: { tasks },
  casing: 'snake_case',
})
