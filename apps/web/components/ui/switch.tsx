// When styling this component, please use values from tailwind.config.ts.
// Avoid using arbitrary values for colors, font sizes, etc.

"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@repo/utils/cn"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer group relative inline-flex h-4 w-8 shrink-0 cursor-pointer items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
      "data-[state=checked]:bg-indigo-500",
      "data-[state=unchecked]:bg-surface-5",
      className
    )}
    {...props}
    ref={ref}
  >
    <div className="absolute inset-0 flex items-center justify-between px-[7px]">
      <div className="h-[6px] w-[1.5px] rounded-lg bg-white transition-opacity group-data-[state=checked]:opacity-100 group-data-[state=unchecked]:opacity-0" />
      <div className="h-[6px] w-[6px] rounded-full border-[1.5px] border-white/60 transition-opacity group-data-[state=checked]:opacity-0 group-data-[state=unchecked]:opacity-100" />
    </div>
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-3 w-3 rounded-lg bg-white shadow-lg ring-0 transition-transform",
        "data-[state=checked]:translate-x-[18px]",
        "data-[state=unchecked]:translate-x-[2px]"
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
