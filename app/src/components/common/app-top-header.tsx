import { Bell, Moon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar } from '@/components/ui/avatar'

type AppTopHeaderProps = {
  title: string
}

export function AppTopHeader({ title }: AppTopHeaderProps) {
  return (
    <header
      className="flex h-[var(--top-header-height)] shrink-0 items-center justify-between border-b border-header-border bg-card px-6"
    >
      <h1 className="text-lg font-semibold leading-none tracking-tight text-foreground">
        {title}
      </h1>
      <div className="flex items-center gap-1">
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
