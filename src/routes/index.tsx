import { createFileRoute } from '@tanstack/react-router'

import { ListTasks } from '@/features/tasks/components/ListTasks'
import { findTasksFn } from '@/features/tasks/functions/findTasksFn'

export const Route = createFileRoute('/')({
  component: App,
  loader: () => findTasksFn(),
})

function App() {
  const tasks = Route.useLoaderData()
  return (
    <div className="min-h-screen">
      <ListTasks tasks={tasks} />
    </div>
  )
}
