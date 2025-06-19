// When styling this component, please use values from tailwind.config.ts.
// Avoid using arbitrary values for colors, font sizes, etc.

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@repo/utils/cn"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"
import { MenuItem } from "./menu-item"

const badgeVariants = cva(
  "inline-flex items-center gap-2 rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      state: {
        readonly: "",
        interactive: "cursor-pointer",
      },
      size: {
        default: "px-2 py-0.5 text-base",
        compact: "px-1.5 py-px text-sm",
      },
    },
    defaultVariants: {
      state: "readonly",
      size: "default",
    },
  },
)

const dotVariants = cva("rounded-full", {
  variants: {
    size: {
      default: "size-2",
      compact: "size-1.5",
    },
  },
  defaultVariants: {
    size: "default",
  },
})

type Status = "in progress" | "complete" | "unknown" | "failure" | "new"

const statusColorMap: Record<Status, string> = {
  "in progress": "yellow",
  complete: "green",
  unknown: "gray",
  failure: "red",
  new: "blue",
}

export interface BadgeProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color">,
    VariantProps<typeof badgeVariants> {
  color?: string | Status
  options?: { label: string; value: string }[]
  onOptionSelect?: (_value: string) => void
  value?: string
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  (
    {
      className,
      color: colorProp = "indigo",
      state,
      size,
      children,
      options,
      onOptionSelect,
      value,
      ...props
    },
    ref,
  ) => {
    const colorName =
      colorProp in statusColorMap
        ? statusColorMap[colorProp as Status]
        : colorProp

    const colorValue = `rgb(var(--${colorName}-500))`

    const badgeStyle = {
      borderColor: colorValue,
      color: "var(--foreground)",
    }

    const dotStyle = {
      backgroundColor: colorValue,
    }

    const badgeContent = (
      <div
        className={cn(badgeVariants({ state, size }), className)}
        style={badgeStyle}
        ref={ref}
        {...props}
      >
        <div className={cn(dotVariants({ size }))} style={dotStyle} />
        <span className="truncate min-w-0">{children}</span>
        {state === "interactive" && (
          <svg
            className="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 15.5l-6-6h12l-6 6z" />
          </svg>
        )}
      </div>
    )

    if (state === "interactive" && options) {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>{badgeContent}</DropdownMenuTrigger>
          <DropdownMenuContent>
            {options.map(option => (
              <MenuItem
                key={option.value}
                selected={value === option.value}
                onSelect={() => onOptionSelect?.(option.value)}
              >
                {option.label}
              </MenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }

    return badgeContent
  },
)
Badge.displayName = "Badge"

export { Badge, badgeVariants }
