// When styling this component, please use values from tailwind.config.ts.
// Avoid using arbitrary values for colors, font sizes, etc.

import * as React from "react"

import { cn } from "@/lib/utils"

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-[4px] border border-border-dim bg-surface-highlight py-[10px] pl-3 pr-2 text-base font-normal leading-5 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-foreground-subtle focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-border-system-focus disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = "Input"

export { Input }
