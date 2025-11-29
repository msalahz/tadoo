# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Package Manager

This project uses **pnpm** (not npm or yarn). All commands should use `pnpm`.

## Development Commands

### Running the Application
```bash
pnpm install          # Install dependencies
pnpm dev              # Start development server on port 3000
pnpm build            # Build for production
pnpm serve            # Preview production build
```

### Testing
```bash
pnpm test             # Run all tests with Vitest
```

### Code Quality
```bash
pnpm lint             # Run ESLint
pnpm format           # Run Prettier
pnpm check            # Format with Prettier and fix ESLint issues
```

### Database Operations
```bash
pnpm db:generate      # Generate Drizzle migrations
pnpm db:migrate       # Run migrations
pnpm db:push          # Push schema changes to database
pnpm db:pull          # Pull schema from database
pnpm db:studio        # Open Drizzle Studio UI
```

### Adding UI Components
Use the latest version of Shadcn to add new components:
```bash
pnpx shadcn@latest add <component-name>
```

## Architecture Overview

### Tech Stack
- **Framework**: TanStack Start (React-based meta-framework with SSR)
- **Router**: TanStack Router with file-based routing
- **Data Fetching**: TanStack Query with SSR integration
- **Database**: PostgreSQL with Drizzle ORM
- **UI**: Shadcn components + Tailwind CSS v4
- **Forms**: TanStack Form
- **Build Tool**: Vite with Nitro server
- **Testing**: Vitest with Testing Library

### Routing Architecture
- File-based routing in `src/routes/`
- Routes are automatically generated into `src/routeTree.gen.ts`
- Root layout defined in `src/routes/__root.tsx`
- Router instance created in `src/router.tsx` with TanStack Query integration
- SSR-enabled with route loaders supported

### Data Layer
- Database schema defined in `src/db/tasks.ts` using Drizzle ORM
- Database connection configured in `src/db/index.ts`
- Uses PostgreSQL with connection string from `DATABASE_URL` environment variable
- Migrations managed through Drizzle Kit (see `drizzle.config.ts`)

### State Management
- TanStack Query for server state (integrated with router context)
- Query client setup in `src/integrations/tanstack-query/root-provider.tsx`
- Router context includes `queryClient` for SSR query integration
- TanStack Store available for local state if needed

### Environment Variables
- Type-safe environment variables using T3 Env (see `src/server.ts`)
- Client variables must be prefixed with `VITE_`
- Server variables have no prefix requirement
- Environment config in `.server.local`

### Path Aliases
- `@/*` maps to `src/*` (configured in `tsconfig.json`)
- Enabled via `vite-tsconfig-paths` plugin

### UI Components
- Shadcn components in `src/components/ui/`
- Configured in `components.json`
- Custom components in `src/components/`
- Header component used in root layout

### Styling
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- Global styles in `src/styles.css`
- Class utilities via `src/lib/utils.ts` (clsx + tailwind-merge)

### Development Tools
- TanStack DevTools panel with integrated Router and Query devtools
- Enabled in `__root.tsx` shellComponent
- Positioned at bottom-right by default

## Key Patterns

### Adding New Routes
1. Create a new file in `src/routes/` (e.g., `about.tsx`)
2. TanStack Router will auto-generate the route
3. Use `createRoute` or `createFileRoute` to define the route
4. Access route data with `useLoaderData()` hook

### Data Fetching in Routes
Use route loaders for SSR-compatible data fetching:
```tsx
export const Route = createFileRoute('/example')({
  loader: async () => {
    // Fetch data here
  },
  component: ExampleComponent,
})
```

### Database Queries
Import the database instance and schema:
```tsx
import { db } from '@/db'
import { todos } from '@/db/schema'
```

### Environment Variables
Import and use typed environment variables:
```tsx
import { server } from '@/server'
// Access: server.VITE_APP_TITLE or server.SERVER_URL
```

## Demo Files
Files prefixed with `demo` (in `src/routes/demo/`, `src/components/`, `src/hooks/`, `src/data/`) are examples and can be safely deleted.
