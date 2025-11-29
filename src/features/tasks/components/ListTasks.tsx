import { Task } from '@/db/schemas/tasks'
import { EmptyTasks } from '@/features/tasks/components/EmptyTasks'

export function ListTasks({ tasks }: { tasks: Array<Task> }) {
  return (
    <ol>
      {tasks.map((task: Task) => (
        <li key={task.id}>{task.text}</li>
      ))}

      {tasks.length === 0 ? <EmptyTasks /> : null}
    </ol>
  )
}
