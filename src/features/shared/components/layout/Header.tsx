import { Logo } from '@/features/shared/components/layout/Logo'

export function Header() {
  return (
    <header className="w-full bg-white shadow-sm fixed">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 flex items-end gap-3">
        <Logo />
        <h1 className="text-5xl font-extrabold text-orange-600 uppercase">Tadoo</h1>
      </div>
    </header>
  )
}
