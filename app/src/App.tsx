import { AppSidebar } from '@/components/common/app-sidebar'
import { AppTopHeader } from '@/components/common/app-top-header'
import { PlansPricingContent } from '@/components/common/plans-pricing-content'

export default function App() {
  return (
    <div className="mx-auto flex w-full min-h-dvh max-w-[length:var(--content-max-width)] flex-row bg-background">
      <AppSidebar />
      <div className="flex min-h-dvh min-w-0 flex-1 flex-col overflow-hidden border-x border-header-border">
        <AppTopHeader title="Plans & Pricing" />
        <div
          className="min-h-0 flex-1 overflow-y-auto"
          style={{ padding: 'var(--page-padding-y) var(--page-padding-x)' }}
        >
          <PlansPricingContent />
        </div>
      </div>
    </div>
  )
}
