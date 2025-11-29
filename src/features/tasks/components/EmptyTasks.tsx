import { ListTodoIcon, PlusIcon } from 'lucide-react'

import { Button } from '@/features/shared/components/primitives/button'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/features/shared/components/primitives/empty'

export function EmptyTasks(props: React.ComponentProps<typeof Empty>) {
  return (
    <Empty {...props}>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <ListTodoIcon />
        </EmptyMedia>
        <EmptyTitle>No Projects Yet</EmptyTitle>
        <EmptyDescription>
          You haven&apos;t created any projects yet. Get started by creating
          your first project.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className="flex gap-2">
          <Button variant="default" size="lg">
            <PlusIcon />
            Create Task
          </Button>
        </div>
      </EmptyContent>
    </Empty>
  )
}
