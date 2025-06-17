/**
 * HAWKINS DESIGN SYSTEM - Tag Component
 * 
 * Used for labeling, categorizing, and organizing content.
 * Perfect for status indicators, categories, and metadata.
 * 
 * AI USAGE GUIDE:
 * - Fill type: For prominent labels and categories
 * - Border type: For subtle labels and secondary information
 * - Colors: Use semantic colors (red=error, green=success, blue=info, gray=neutral)
 * 
 * @example Basic usage
 * <Tag color="blue">Feature</Tag>
 * <Tag type="border" color="gray">Optional</Tag>
 * 
 * @example With icons  
 * <Tag icon={<CheckIcon />} color="green">Completed</Tag>
 */

import * as React from "react"
import { cn } from "@repo/utils/cn"
import { cva, type VariantProps } from "class-variance-authority"

const tagVariants = cva(
  "inline-flex items-center gap-2 rounded-full font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      type: {
        fill: "text-primary-foreground/90",
        border: "border text-foreground",
      },
      size: {
        compact: "text-xs rounded-sm [&_svg]:size-3",
        default: "text-base rounded-sm [&_svg]:size-4",
      },
      showIcon: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {
        size: "default",
        showIcon: false,
        className: "px-2 py-0.5",
      },
      {
        size: "default",
        showIcon: true,
        className: "pl-1 pr-2 py-0.5",
      },
      {
        size: "compact",
        showIcon: false,
        className: "px-1 py-px",
      },
      {
        size: "compact",
        showIcon: true,
        className: "pl-0.5 pr-1 py-px",
      },
    ],
    defaultVariants: {
      type: "fill",
      size: "compact",
      showIcon: false,
    },
  },
)

/**
 * Available colors for Tag component
 * Use semantic colors for better AI understanding
 */
export type TagColor = 
  | "red"      // Error states, critical information  
  | "green"    // Success states, completed items
  | "blue"     // Information, features, primary content
  | "yellow"   // Warning states, pending items
  | "purple"   // Special categories, premium features
  | "gray"     // Neutral, secondary information
  | "indigo"   // Brand-related content
  | string     // Custom color (use sparingly)

/**
 * Tag component props for labeling and categorization
 * 
 * @interface TagProps
 * @param {"fill" | "border"} type - Visual style: 'fill' for prominent labels, 'border' for subtle ones
 * @param {"default" | "compact"} size - Size variant: 'default' for most cases, 'compact' for dense layouts
 * @param {TagColor} color - Color theme using semantic naming
 * @param {React.ReactNode} icon - Optional icon to display before text
 * 
 * @example Status tags
 * <Tag color="green" icon={<CheckIcon />}>Completed</Tag>
 * <Tag color="red" type="border">Error</Tag>
 * 
 * @example Category tags
 * <Tag color="blue" size="compact">Frontend</Tag>
 * <Tag color="purple">Premium</Tag>
 */
export interface TagProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Omit<VariantProps<typeof tagVariants>, "showIcon"> {
  /** Optional icon to display before the tag text */
  icon?: React.ReactNode
  /** Color theme - use semantic colors for better AI understanding */
  color?: TagColor
}

const Tag = React.forwardRef<HTMLDivElement, TagProps>(
  (
    {
      className,
      type,
      size,
      children,
      icon,
      color: colorProp = "indigo",
      ...props
    },
    ref,
  ) => {
    const showIcon = !!icon
    const colorValue = `rgb(var(--${colorProp}-500))`
    const tagStyle =
      type === "border"
        ? {
            borderColor: colorValue,
          }
        : { backgroundColor: colorValue }

    return (
      <div
        className={cn(tagVariants({ type, size, showIcon }), className)}
        style={tagStyle}
        ref={ref}
        {...props}
      >
        {icon}
        <span className="truncate">{children}</span>
      </div>
    )
  },
)
Tag.displayName = "Tag"

export { Tag, tagVariants }
