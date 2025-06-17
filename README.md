# Echo AI Application Template

A clean, modern, and scalable template for building full-stack AI applications. It comes pre-configured with a shared component library, a two-page application structure, and all the necessary tooling for a seamless developer experience.

## What's Inside?

This monorepo is a ready-to-use starting point and includes:

- `apps/web`: A Next.js application with two pre-built pages:
    - A **Profile** page with a sample form.
    - A **Dashboard** page with a clean empty state.
- `packages/ui`: A shared React component library, powered by Tailwind CSS. All your reusable components go here.
- `packages/utils`: Shared utility functions (like `cn` for class names).
- `packages/typescript-config`: Shared `tsconfig.json`s.
- `packages/eslint-config`: Shared ESLint configurations.

## Getting Started

To get started with this template:

1.  Click the "Use this template" button on GitHub.
2.  Clone your new repository.
3.  Install dependencies using pnpm:

    ```bash
    pnpm install
    ```

4.  Start the development server:

    ```bash
    pnpm dev
    ```

This will launch the Next.js application, which you can view at `http://localhost:3000`.

## Building Your Component Library

This template is designed to grow with you. To add a new UI component:

1.  Create your component file in `packages/ui/src`. For example, `packages/ui/src/new-component.tsx`.
2.  Add an export for your new component in `packages/ui/package.json`:
    ```json
    "exports": {
      // ... existing exports
      "./new-component": "./src/new-component.tsx"
    },
    ```
3.  You can now import it directly into any application (e.g., `apps/web`):
    ```tsx
    import { NewComponent } from "@repo/ui/new-component";
    ```
