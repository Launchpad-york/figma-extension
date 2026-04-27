import { ArrowUpDown, ChevronLeft, ChevronRight, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { cn } from '@/lib/utils'

const rows = [
  {
    plan: 'BSPBlueprint (Monthly)',
    price: '$199.00',
    description: 'Some description goes here...',
  },
  {
    plan: 'BSP Assessment (Annual)',
    price: '$716.40',
    description: 'Some description goes here...',
  },
  {
    plan: 'BSP Assessment (Individual)',
    price: '$195.00',
    description: 'Some description goes here...',
  },
]

function SortableHead({
  children,
  className,
}: {
  children: string
  className?: string
}) {
  return (
    <TableHead
      className={cn(
        'h-[var(--table-row-height)] min-w-0 text-sm font-medium text-foreground',
        className
      )}
    >
      <div className="inline-flex w-full min-w-0 max-w-full items-center gap-1.5">
        <span className="truncate whitespace-nowrap">{children}</span>
        <span className="inline-flex shrink-0" aria-hidden>
          <ArrowUpDown className="size-3.5 text-muted-foreground" />
        </span>
      </div>
    </TableHead>
  )
}

export function PlansPricingContent() {
  return (
    <div className="w-full min-w-0 min-h-0">
      <div className="mb-6 text-left">
        <h2 className="text-2xl font-bold leading-9 tracking-tight text-foreground sm:text-[28px]">
          Plans &amp; Pricing
        </h2>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
          Configure pricing and rules for subscription-based plans.
        </p>
      </div>
      <div className="overflow-hidden rounded-[length:var(--radius)] border border-border bg-card">
        <div className="w-full min-w-0">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-border bg-table-header hover:bg-table-header data-[state=selected]:bg-table-header">
                <SortableHead className="w-[32%] sm:w-[30%]">Plans</SortableHead>
                <SortableHead className="w-[16%]">Price</SortableHead>
                <TableHead
                  className="h-[var(--table-row-height)] min-w-0 text-sm font-medium text-foreground"
                >
                  <div className="inline-flex w-full min-w-0 items-center gap-1.5">
                    <span className="whitespace-nowrap">Description</span>
                    <ArrowUpDown
                      className="size-3.5 shrink-0 text-muted-foreground"
                      aria-hidden
                    />
                  </div>
                </TableHead>
                <TableHead className="h-[var(--table-row-height)] w-[100px] min-w-[100px] text-right text-sm font-medium text-foreground sm:w-[120px]">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.plan}
                  className="h-[var(--table-row-height)] border-border bg-card hover:bg-card"
                >
                  <TableCell className="h-[var(--table-row-height)] max-w-0 font-medium text-foreground">
                    <span className="line-clamp-2 min-w-0 break-words">{row.plan}</span>
                  </TableCell>
                  <TableCell
                    className="h-[var(--table-row-height)] whitespace-nowrap text-foreground"
                  >
                    {row.price}
                  </TableCell>
                  <TableCell
                    className="h-[var(--table-row-height)] min-w-0 text-muted-foreground"
                  >
                    {row.description}
                  </TableCell>
                  <TableCell className="h-[var(--table-row-height)] w-[100px] min-w-[100px] text-right sm:w-[120px]">
                    <Button
                      type="button"
                      variant="secondary"
                      size="icon"
                      className="size-9 border-border shadow-none"
                      aria-label={`View ${row.plan}`}
                    >
                      <Eye className="size-4 text-sidebar-foreground" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="flex flex-col gap-3 border-t border-border bg-card px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-left text-sm text-muted-foreground">
            Showing 3 of 3 results
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
              className="flex h-8 min-w-8 items-center justify-center rounded-md border border-border bg-card px-2.5 text-sm font-medium text-foreground"
              aria-current="page"
            >
              1
            </div>
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
      </div>
    </div>
  )
}
