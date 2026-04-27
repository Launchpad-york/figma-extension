import type { LucideIcon } from 'lucide-react'
import {
  Activity,
  BookOpen,
  Building2,
  CreditCard,
  FileText,
  Landmark,
  LayoutDashboard,
  Library,
  Lock,
  PanelLeft,
  Receipt,
  Shield,
  Tag,
  UserCircle2,
  Users,
} from 'lucide-react'
import bspLogo from '@/assets/bsp-logo.svg'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type NavItem = { label: string; icon: LucideIcon }

const sections: { title: string; items: NavItem[] }[] = [
  {
    title: 'Main',
    items: [{ label: 'Dashboard', icon: LayoutDashboard }],
  },
  {
    title: 'Administration',
    items: [
      { label: 'Corporation Directory', icon: Building2 },
      { label: 'Company Directory', icon: Landmark },
    ],
  },
  {
    title: 'Users & Access',
    items: [
      { label: 'User Directory', icon: Users },
      { label: 'Roles & Permissions', icon: Shield },
      { label: 'Coaches', icon: UserCircle2 },
    ],
  },
  {
    title: 'Finance',
    items: [
      { label: 'Billing Management', icon: CreditCard },
      { label: 'Plans & Pricing', icon: FileText },
      { label: 'Invoices', icon: Receipt },
      { label: 'Promo Code Management', icon: Tag },
    ],
  },
  {
    title: 'Assessments',
    items: [{ label: 'Question Bank', icon: BookOpen }],
  },
  {
    title: 'BSPU',
    items: [{ label: 'Learning Library', icon: Library }],
  },
  {
    title: 'System',
    items: [
      { label: 'System Health', icon: Activity },
      { label: 'Security Baselines', icon: Lock },
    ],
  },
]

function isPlansAndPricing(item: NavItem) {
  return item.label === 'Plans & Pricing'
}

export function AppSidebar() {
  return (
    <aside className="flex min-h-dvh w-[var(--sidebar-width)] shrink-0 flex-col border-r border-header-border bg-sidebar">
      <div className="flex h-[var(--top-header-height)] items-center justify-between gap-2 border-b border-header-border px-4">
        <div className="flex min-w-0 items-center gap-2">
          <img src={bspLogo} alt="" className="size-8 shrink-0" width={32} height={32} />
          <span className="truncate text-[15px] font-semibold tracking-tight text-foreground">
            BSPBlueprint
          </span>
        </div>
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          className="shrink-0 text-sidebar-foreground"
          aria-label="Toggle sidebar"
        >
          <PanelLeft className="size-4" />
        </Button>
      </div>
      <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-3">
        {sections.map((section) => (
          <div key={section.title} className="mb-1">
            <p className="px-2 pb-2 text-[10px] font-medium uppercase leading-none tracking-wide text-sidebar-muted">
              {section.title}
            </p>
            <ul className="space-y-0.5">
              {section.items.map((item) => {
                const Icon = item.icon
                const active = isPlansAndPricing(item)
                return (
                  <li key={`${section.title}-${item.label}`}>
                    <a
                      href="#"
                      className={cn(
                        'flex items-center gap-2 rounded-md px-2.5 py-2 text-sm font-medium leading-none transition-colors',
                        active
                          ? 'bg-primary text-primary-foreground'
                          : 'text-sidebar-foreground hover:bg-interactive-hover'
                      )}
                      aria-current={active ? 'page' : undefined}
                    >
                      <Icon
                        className={cn(
                          'size-[18px] shrink-0',
                          active ? 'text-primary-foreground' : 'text-sidebar-foreground'
                        )}
                      />
                      <span className="truncate">{item.label}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  )
}
