import { Bell, ChevronRight, Moon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'

type BreadcrumbItem = {
  label: string
  current?: boolean
}

type AppTopHeaderProps = {
  /** Single title (list view) */
  title?: string
  /** Breadcrumb trail (details view); last item is current page */
  breadcrumbs?: BreadcrumbItem[]
}

export function AppTopHeader({ title, breadcrumbs }: AppTopHeaderProps) {
  const showCrumbs = breadcrumbs && breadcrumbs.length > 0

  return (
    <header
      className="flex h-[var(--top-header-height)] shrink-0 items-center justify-between gap-4 border-b border-header-border bg-card px-6"
    >
      {showCrumbs ? (
        <nav className="flex min-w-0 flex-1 items-center gap-1.5 text-sm" aria-label="Breadcrumb">
          {breadcrumbs!.map((item, i) => (
            <span key={`${item.label}-${i}`} className="flex min-w-0 items-center gap-1.5">
              {i > 0 && (
                <ChevronRight
                  className="size-4 shrink-0 text-muted-foreground"
                  aria-hidden
                />
              )}
              <span
                className={cn(
                  'min-w-0 truncate',
                  item.current
                    ? 'font-semibold text-foreground'
                    : 'font-normal text-muted-foreground'
                )}
              >
                {item.label}
              </span>
            </span>
          ))}
        </nav>
      ) : (
        <h1 className="truncate text-lg font-semibold leading-none tracking-tight text-foreground">
          {title}
        </h1>
      )}
      <div className="flex shrink-0 items-center gap-1">
        <Button type="button" variant="ghost" size="icon" aria-label="Toggle theme">
          <Moon className="size-5 text-sidebar-foreground" />
        </Button>
        <Button type="button" variant="ghost" size="icon" aria-label="Notifications">
          <Bell className="size-5 text-sidebar-foreground" />
        </Button>
        <div className="pl-1">
          <Avatar
            className="size-9 border-0 p-0"
            style={{ background: 'var(--avatar-decorative)' }}
            aria-label="User menu"
            role="img"
          />
        </div>
      </div>
    </header>
  )
}
