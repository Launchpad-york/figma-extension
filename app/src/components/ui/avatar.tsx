import * as React from 'react'
import { cn } from '@/lib/utils'

function Avatar({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="avatar"
      className={cn(
        'relative flex size-9 shrink-0 overflow-hidden rounded-full border border-border bg-muted',
        className
      )}
      {...props}
    />
  )
}

function AvatarImage({ className, ...props }: React.ComponentProps<'img'>) {
  return (
    <img
      data-slot="avatar-image"
      className={cn('aspect-square size-full object-cover', className)}
      alt=""
      {...props}
    />
  )
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="avatar-fallback"
      className={cn(
        'flex size-full items-center justify-center bg-muted text-xs font-medium text-muted-foreground',
        className
      )}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback }
