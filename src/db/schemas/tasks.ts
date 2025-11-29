import { sql } from 'drizzle-orm'
import {
  pgTable,
  text,
  boolean,
  timestamp,
  uuid,
  index,
} from 'drizzle-orm/pg-core'

export const tasks = pgTable(
  'tasks',
  {
    id: uuid()
      .default(sql`uuidv7()`) // Use PostgreSQL's native uuidv7() function
      .primaryKey()
      .notNull(),
    text: text().notNull(),
    completed: boolean().notNull().default(false),
    createdAt: timestamp().defaultNow(),
    updatedAt: timestamp().$onUpdateFn(() => sql`now()`),
  },
  (t) => [index().on(t.id), index().on(t.text), index().on(t.completed)],
)

export type Task = typeof tasks.$inferSelect
export type NewTask = typeof tasks.$inferInsert
