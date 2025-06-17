"use client"

import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Check } from "lucide-react"
import { cn } from "@repo/utils/cn"

export interface MenuItemProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> {
  selected?: boolean
}

const MenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  MenuItemProps
>(({ className, children, selected = false, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-3 py-[10px] text-base outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      selected && "bg-white/10 text-foreground",
      !selected && "focus:bg-white/5 focus:text-foreground",
      className,
    )}
    {...props}
  >
    <span
      className={cn(
        "absolute left-3 flex h-3.5 w-3.5 items-center justify-center",
        !selected && "hidden",
      )}
    >
      <Check className="h-4 w-4" />
    </span>
    <span className={cn(selected && "pl-8")}>{children}</span>
  </DropdownMenuPrimitive.Item>
))

MenuItem.displayName = "MenuItem"

export { MenuItem }
