import { ArrowUpDown, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { cn } from '@/lib/utils'

const tierRows: { level: string; price: string }[] = [
  { level: '<25 employees', price: '$199.00' },
  { level: '26-50 employees', price: '$299.00' },
  { level: '51-75 employees', price: '$399.00' },
  { level: '76-100 employees', price: '$499.00' },
  { level: '101-125 employees', price: '$599.00' },
  { level: '126-150 employees', price: '$699.00' },
  { level: '151-175 employees', price: '$799.00' },
  { level: '176-200 employees', price: '$899.00' },
  { level: '201-225 employees', price: '$999.00' },
  { level: '226-250 employees', price: '$1,099.00' },
]

function SortableHead({
  children,
  className,
  align = 'left',
}: {
  children: string
  className?: string
  align?: 'left' | 'right'
}) {
  return (
    <TableHead
      className={cn(
        'h-[var(--table-row-height)] min-w-0 text-sm font-medium text-foreground',
        align === 'right' && 'text-right',
        className
      )}
    >
      <div
        className={cn(
          'inline-flex w-full min-w-0 max-w-full items-center gap-1.5',
          align === 'right' && 'justify-end'
        )}
      >
        <span className="truncate whitespace-nowrap">{children}</span>
        <span className="inline-flex shrink-0" aria-hidden>
          <ArrowUpDown className="size-3.5 text-muted-foreground" />
        </span>
      </div>
    </TableHead>
  )
}

type PlansPricingViewDetailsContentProps = {
  planTitle?: string
  onBack: () => void
}

export function PlansPricingViewDetailsContent({
  planTitle = 'BSPBlueprint (Monthly)',
  onBack,
}: PlansPricingViewDetailsContentProps) {
  return (
    <div className="w-full min-w-0 min-h-0">
      <Card className="overflow-hidden p-0 shadow-none">
        <CardContent>
          <div className="flex flex-col gap-4 border-b border-border bg-card px-6 pb-4 pt-6 sm:flex-row sm:items-center sm:gap-4">
            <Button
              type="button"
              variant="secondary"
              onClick={onBack}
              className="h-9 w-fit shrink-0 border border-border bg-card px-3 font-medium text-foreground shadow-sm"
            >
              <span className="inline-flex items-center gap-1">
                <ChevronLeft className="size-4" />
                Back
              </span>
            </Button>
            <h2 className="text-2xl font-bold leading-9 tracking-tight text-foreground sm:text-[28px]">
              {planTitle}
            </h2>
          </div>
          <div className="w-full min-w-0">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-border bg-table-header hover:bg-table-header data-[state=selected]:bg-table-header">
                  <SortableHead className="w-[60%] sm:w-1/2">Plan Level</SortableHead>
                  <SortableHead className="w-[40%] sm:w-1/2" align="right">
                    Price
                  </SortableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tierRows.map((row) => (
                  <TableRow
                    key={row.level}
                    className="h-[var(--table-row-height)] border-border bg-card hover:bg-card"
                  >
                    <TableCell
                      className="h-[var(--table-row-height)] max-w-0 text-foreground"
                    >
                      {row.level}
                    </TableCell>
                    <TableCell
                      className="h-[var(--table-row-height)] text-right font-medium text-foreground tabular-nums"
                    >
                      {row.price}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="flex flex-col gap-3 border-t border-border bg-card px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-left text-sm text-muted-foreground">
              Showing 8 of 12 results
            </p>
            <div className="flex items-center justify-end gap-2">
              <Button
                type="button"
                variant="secondary"
                size="sm"
                className="h-8 min-w-0 border-border bg-card px-2.5 text-muted-foreground shadow-sm"
              >
                <span className="inline-flex items-center gap-1">
                  <ChevronLeft className="size-3.5" />
                  Previous
                </span>
              </Button>
              <div
                className="flex h-8 min-w-8 items-center justify-center rounded-md bg-primary px-2.5 text-sm font-medium text-primary-foreground"
                aria-current="page"
              >
                1
              </div>
              <Button
                type="button"
                variant="secondary"
                size="sm"
                className="h-8 min-w-8 border border-border bg-card px-2 text-sm font-medium text-foreground shadow-sm"
                aria-label="Page 2"
              >
                2
              </Button>
              <Button
                type="button"
                variant="secondary"
                size="sm"
                className="h-8 min-w-0 border-border bg-card px-2.5 text-muted-foreground shadow-sm"
              >
                <span className="inline-flex items-center gap-1">
                  Next
                  <ChevronRight className="size-3.5" />
                </span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
