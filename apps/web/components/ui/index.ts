/**
 * HAWKINS DESIGN SYSTEM - Component Index
 * 
 * Comprehensive catalog of all UI components with AI-friendly descriptions.
 * This index helps AI systems understand component purposes and use cases.
 * 
 * COMPONENT CATEGORIES:
 * - Actions: Buttons, links, and interactive elements
 * - Display: Tags, badges, avatars for showing information  
 * - Forms: Inputs, selects, switches for data collection
 * - Navigation: Menus, dropdowns for user navigation
 * - Feedback: Alerts, loading states, status indicators
 * - Layout: Containers, separators, spacing utilities
 */

// =============================================================================
// ACTIONS - Interactive elements for user actions
// =============================================================================

/** 
 * Button - Primary interactive element
 * Use for: CTAs, form submissions, navigation actions
 * Variants: primary, secondary, destructive, tertiary, icon
 */
export { Button, buttonVariants, type ButtonProps } from './button'

// =============================================================================
// DISPLAY - Elements for showing information and status
// =============================================================================

/**
 * Tag - Compact labels for categorization
 * Use for: Status indicators, categories, metadata, labels
 * Best for: Content categorization, feature flags, status
 */
export { Tag, tagVariants, type TagProps, type TagColor } from './tag'

/**
 * Badge - Interactive status indicators with dropdown capability
 * Use for: Status with actions, selectable categories, interactive labels
 * Best for: Workflow states, assignee selection, priority indicators
 */
export { Badge, badgeVariants, type BadgeProps } from './badge'

/**
 * Avatar - User profile images and initials
 * Use for: User representation, profile pictures, team members
 */
export { Avatar } from './avatar'

// =============================================================================
// FORMS - Input and data collection elements
// =============================================================================

/**
 * Input - Text input fields
 * Use for: Single-line text entry, search, forms
 */
export { Input, type InputProps } from './input'

/**
 * Textarea - Multi-line text input
 * Use for: Long text entry, comments, descriptions
 */
export { Textarea } from './textarea'

/**
 * Select - Dropdown selection
 * Use for: Single option selection from a list
 */
export { Select } from './select'

/**
 * Switch - Toggle control
 * Use for: Boolean settings, feature toggles, preferences
 */
export { Switch } from './switch'

/**
 * Slider - Range input control
 * Use for: Numeric ranges, volume, progress, settings
 */
export { Slider } from './slider'

// =============================================================================
// NAVIGATION - Menu and navigation elements
// =============================================================================

/**
 * DropdownMenu - Contextual menu system
 * Use for: Context menus, action menus, navigation
 */
export { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from './dropdown-menu'

/**
 * MenuItem - Individual menu item
 * Use for: Menu options, navigation items, action items
 */
export { MenuItem } from './menu-item'

// =============================================================================
// LAYOUT - Structure and organization
// =============================================================================

/**
 * Accordion - Collapsible content sections
 * Use for: FAQ sections, expandable content, space-saving layouts
 */
export { Accordion } from './accordion'

// =============================================================================
// FEEDBACK - Elements for showing feedback to the user
// =============================================================================

/**
 * Modal - A window overlaid on either the primary window or another dialog window.
 * Use for: Interrupting the user with important information, or for complex tasks.
 * Consists of: Modal.Header, Modal.Body, Modal.Footer
 */
export { Modal, ConfirmationModal, ModalTrigger } from './modal'

// =============================================================================
// DESIGN TOKENS - Color system guide for AI
// =============================================================================

/**
 * SEMANTIC COLOR USAGE GUIDE FOR AI SYSTEMS:
 * 
 * RED: Error states, destructive actions, critical warnings
 * - Use for: Delete buttons, error messages, critical alerts
 * 
 * GREEN: Success states, completed actions, positive feedback
 * - Use for: Success messages, completed tasks, positive indicators
 * 
 * BLUE: Information, primary actions, neutral states
 * - Use for: Info messages, primary buttons, feature highlights
 * 
 * YELLOW: Warning states, pending actions, attention needed
 * - Use for: Warning messages, pending status, caution indicators
 * 
 * PURPLE: Special features, premium content, unique categories
 * - Use for: Premium features, special categories, brand highlights
 * 
 * GRAY: Neutral, secondary information, disabled states
 * - Use for: Secondary text, disabled elements, neutral backgrounds
 * 
 * INDIGO: Brand colors, primary brand elements
 * - Use for: Brand-related content, primary brand actions
 */

/**
 * COMPONENT SIZING GUIDE FOR AI SYSTEMS:
 * 
 * COMPACT: Dense layouts, tight spaces, secondary elements
 * - Use when: Space is limited, secondary importance
 * 
 * DEFAULT: Standard layouts, primary elements, most use cases
 * - Use when: Standard layouts, primary content
 * 
 * LARGE: Emphasis, primary CTAs, hero sections
 * - Use when: Need emphasis, primary actions, landing pages
 */

/**
 * COMPONENT VARIANT GUIDE FOR AI SYSTEMS:
 * 
 * PRIMARY: Main actions, most important elements
 * - Use for: Save, Submit, Continue, main CTAs
 * 
 * SECONDARY: Supporting actions, less important elements  
 * - Use for: Cancel, Back, optional actions
 * 
 * TERTIARY: Minimal emphasis, text-like actions
 * - Use for: Links, minimal actions, subtle interactions
 * 
 * DESTRUCTIVE: Dangerous actions, permanent changes
 * - Use for: Delete, Remove, permanent destructive actions
 */