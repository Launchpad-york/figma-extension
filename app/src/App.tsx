import { useState } from 'react'
import { AppSidebar } from '@/components/common/app-sidebar'
import { AppTopHeader } from '@/components/common/app-top-header'
import { PlansPricingContent } from '@/components/common/plans-pricing-content'
import { PlansPricingViewDetailsContent } from '@/components/common/plans-pricing-view-details-content'

type View = 'list' | 'details'

export default function App() {
  const [view, setView] = useState<View>('details')
  const [selectedPlan, setSelectedPlan] = useState('BSPBlueprint (Monthly)')

  return (
    <div className="mx-auto flex w-full min-h-dvh max-w-[length:var(--content-max-width)] flex-row bg-background">
      <AppSidebar />
      <div className="flex min-h-dvh min-w-0 flex-1 flex-col overflow-hidden border-x border-header-border">
        {view === 'details' ? (
          <AppTopHeader
            breadcrumbs={[
              { label: 'Plans & Pricing' },
              { label: 'View Details', current: true },
            ]}
          />
        ) : (
          <AppTopHeader title="Plans & Pricing" />
        )}
        <div
          className="min-h-0 flex-1 overflow-y-auto"
          style={{ padding: 'var(--page-padding-y) var(--page-padding-x)' }}
        >
          {view === 'details' ? (
            <PlansPricingViewDetailsContent
              planTitle={selectedPlan}
              onBack={() => setView('list')}
            />
          ) : (
            <PlansPricingContent
              onViewDetails={(planName) => {
                setSelectedPlan(planName)
                setView('details')
              }}
            />
          )}
        </div>
      </div>
    </div>
  )
}
