import { desc } from 'drizzle-orm'
import { createServerFn } from '@tanstack/react-start'

import { db } from '@/db'
import { tasks } from '@/db/schemas/tasks'

export const findTasksFn = createServerFn().handler(() => {
  return db.select().from(tasks).orderBy(desc(tasks.createdAt))
})
