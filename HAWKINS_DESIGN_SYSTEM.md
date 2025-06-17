# 🎯 Hawkins Design System

> **Built for Humans, Optimized for AI**

A comprehensive, AI-friendly design system that makes it easy for designers and AI systems to build consistent, accessible interfaces.

## 🧠 AI-First Philosophy

This design system is specifically designed to be **AI-consumable** with:
- **Semantic naming** that AI systems can understand
- **Comprehensive JSDoc** with usage examples
- **Clear variant purposes** with contextual guidance
- **Composition patterns** for complex interfaces

## 🎨 Core Principles

### 1. **Semantic Color System**
Colors have **meaning** that AI systems can interpret:

```typescript
// ✅ AI-Friendly: Semantic meaning is clear
<Button variant="destructive">Delete Account</Button>
<Tag color="green">Completed</Tag>
<Badge color="red">Error</Badge>

// ❌ Avoid: Arbitrary color choices
<Button variant="red">Save</Button>  // Red doesn't mean "save"
```

### 2. **Consistent Variant Patterns**
Every component follows the same variant logic:

- **Primary**: Most important actions
- **Secondary**: Supporting actions  
- **Tertiary**: Minimal emphasis
- **Destructive**: Dangerous actions

### 3. **Compositional Design**
Components work together seamlessly:

```tsx
// Complex interfaces through composition
<Card>
  <CardHeader>
    <div className="flex items-center gap-2">
      <Avatar user={user} />
      <div>
        <h3>{user.name}</h3>
        <Badge color="green" size="compact">Online</Badge>
      </div>
    </div>
  </CardHeader>
  <CardContent>
    <div className="flex gap-2">
      <Tag color="blue">Frontend</Tag>
      <Tag color="purple">Senior</Tag>
    </div>
  </CardContent>
  <CardFooter>
    <Button variant="primary">View Profile</Button>
    <Button variant="secondary">Send Message</Button>
  </CardFooter>
</Card>
```

## 🎯 Component Categories

### Actions
- **Button**: Primary interactive elements
- **Link**: Navigation and external links

### Display  
- **Tag**: Labels and categorization
- **Badge**: Interactive status indicators
- **Avatar**: User representation

### Forms
- **Input**: Text entry
- **Textarea**: Multi-line text input
- **Select**: Option selection
- **Switch**: Boolean toggles
- **Slider**: Range inputs

### Navigation
- **DropdownMenu**: Contextual menus
- **MenuItem**: Menu options

### Layout
- **Accordion**: For vertically stacked, collapsible content sections.

### Feedback
- **Modal**: For pop-up dialogs and user confirmations.

## 🤖 AI Usage Guidelines

### For AI Systems Building Interfaces:

1. **Use semantic colors**:
   - `red` for errors, destructive actions
   - `green` for success, completed states
   - `blue` for information, primary content
   - `yellow` for warnings, pending states

2. **Choose appropriate variants**:
   - `primary` for main actions (Save, Submit)
   - `secondary` for supporting actions (Cancel, Back)
   - `destructive` for dangerous actions (Delete, Remove)

3. **Consider context**:
   - Use `compact` size in dense layouts
   - Use `default` size for standard interfaces
   - Use icons for space-constrained areas

### For Designers:

1. **Follow the semantic color system** - it helps AI understand intent
2. **Use consistent spacing** from the design tokens
3. **Leverage composition** instead of creating new components
4. **Document custom patterns** for AI systems to learn from

## 🎨 Design Tokens

### Colors
Our color system uses **CSS custom properties** for maximum flexibility:

```css
/* Semantic colors */
--primary-rgb: var(--indigo-500);
--foreground-rgb: 0 0 0;
--background-rgb: 255 255 255;

/* Brand colors */
--indigo-500: 64 97 231;
--red-500: 229 9 20;
--green-500: 10 163 86;
```

### Typography
Consistent font sizing with semantic meaning:

```css
font-size: {
  xs: ["10px", "15px"],      // Fine print, captions
  sm: ["12px", "18px"],      // Secondary text
  base: ["13px", "20px"],    // Body text (default)
  lg: ["14px", "21px"],      // Emphasized text
  xl: ["16px", "24px"],      // Headings
}
```

### Spacing
Based on a **4px grid** for consistent layouts:

```typescript
// Use Tailwind spacing classes
className="p-4 m-2 gap-3"  // 16px, 8px, 12px
```

## 🔧 Implementation Examples

### Status Indicators
```tsx
// Order status workflow
<Tag color="blue">Processing</Tag>
<Tag color="yellow">Pending</Tag>  
<Tag color="green">Completed</Tag>
<Tag color="red">Failed</Tag>
```

### Action Hierarchies
```tsx
// Form actions
<div className="flex gap-2">
  <Button variant="primary">Save Changes</Button>
  <Button variant="secondary">Cancel</Button>
  <Button variant="destructive">Delete</Button>
</div>
```

### Information Architecture
```tsx
// User profile card
<div className="space-y-4">
  <div className="flex items-center gap-3">
    <Avatar user={user} />
    <div>
      <h3 className="font-semibold">{user.name}</h3>
      <Badge color="green" size="compact">Active</Badge>
    </div>
  </div>
  
  <div className="flex flex-wrap gap-2">
    <Tag color="blue" size="compact">React</Tag>
    <Tag color="purple" size="compact">TypeScript</Tag>
    <Tag color="indigo" size="compact">Design Systems</Tag>
  </div>
</div>
```

### Modal Dialogs
The `Modal` component is compositional, allowing you to build complex dialogs. For common use cases, the `ConfirmationModal` provides a simple, pre-built solution.

```tsx
// Standard Modal
import { Modal } from '@/components/ui';

<Modal>
  <Modal.Trigger asChild>
    <Button variant="primary">Open Modal</Button>
  </Modal.Trigger>
  <Modal.Content>
    <Modal.Header>
      <Modal.Title>Modal Title</Modal.Title>
      <Modal.Description>
        This is a description for the modal.
      </Modal.Description>
    </Modal.Header>
    <Modal.Body>
      <p>This is the body of the modal.</p>
    </Modal.Body>
    <Modal.Footer>
      <Modal.Close asChild>
        <Button variant="secondary">Cancel</Button>
      </Modal.Close>
      <Button variant="primary">Save</Button>
    </Modal.Footer>
  </Modal.Content>
</Modal>
```

```tsx
// Confirmation Modal
import { ConfirmationModal } from '@/components/ui';

<ConfirmationModal
  trigger={<Button variant="destructive">Delete Item</Button>}
  title="Are you sure you want to delete this?"
  description="This action cannot be undone."
  onConfirm={() => console.log('Item deleted')}
/>
```

## 🚀 Best Practices

### Do's ✅
- Use semantic color names (`red`, `green`, `blue`)
- Follow consistent variant patterns across components
- Compose components instead of creating new ones
- Document custom patterns with JSDoc
- Test with both light and dark themes

### Don'ts ❌
- Don't use arbitrary colors or sizes
- Don't create component variants that break semantic meaning
- Don't ignore accessibility requirements
- Don't use colors without semantic meaning

## 🔍 Accessibility

Every component includes:
- **Proper ARIA attributes**
- **Keyboard navigation** support
- **Focus management**
- **Screen reader** compatibility
- **High contrast** color ratios

## 📱 Responsive Design

Components adapt to different screen sizes:
- **Mobile-first** approach
- **Flexible sizing** with CSS custom properties  
- **Touch-friendly** interaction areas
- **Readable typography** at all sizes

## 🎯 Getting Started

1. **Import components** from the design system:
   ```tsx
   import { Button, Tag, Badge } from '@/components/ui'
   ```

2. **Use semantic variants**:
   ```tsx
   <Button variant="primary">Main Action</Button>
   <Tag color="blue">Information</Tag>
   ```

3. **Compose complex interfaces**:
   ```tsx
   <Card>
     <CardHeader>
       <Badge color="green">Active</Badge>
     </CardHeader>
     <CardContent>
       <p>Content here</p>
     </CardContent>
   </Card>
   ```

## 🤝 Contributing

When adding new components:
1. Follow the **semantic naming** conventions
2. Add comprehensive **JSDoc** documentation
3. Include **usage examples** for AI systems
4. Test **accessibility** and **responsive** behavior
5. Update this guide with new patterns

---

**Built with ❤️ for the future of AI-assisted design**