import { PlusIcon } from 'lucide-react'

import { Logo } from '@/features/shared/components/layout/Logo'
import { Button } from '@/features/shared/components/primitives/button'

export function Header() {
  return (
    <header className="w-full shadow-sm flex justify-between items-center">
      <div className="flex justify-between items-center gap-2">
        <Logo />

        <h1 className="text-5xl font-extrabold text-peach italic">
          Tadoo Tasks
        </h1>
      </div>
      <div>
        <Button variant="default" size="lg">
          <PlusIcon />
          Create Task
        </Button>
      </div>
    </header>
  )
}
