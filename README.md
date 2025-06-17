# Echo AI Application Template

This is a monorepo template for building full-stack AI applications. It comes pre-configured with a shared component library, utilities, and a web application, all managed with pnpm workspaces.

## What's Inside?

This monorepo includes:

- `apps/web`: A Next.js application. This is where you'll build your user-facing app.
- `packages/ui`: A shared React component library. All your reusable components go here.
- `packages/utils`: Shared utility functions (e.g., `cn` for Tailwind class names).
- `packages/typescript-config`: Shared `tsconfig.json`s for the entire monorepo.
- `packages/eslint-config`: Shared ESLint configurations.

## Getting Started

To get started with this template:

1.  Clone the repository.
2.  Install dependencies using pnpm:

    ```bash
    pnpm install
    ```

3.  Start the development server:

    ```bash
    pnpm dev
    ```

This will start the Next.js application in `apps/web`.

## Building Your Component Library

To add a new component, follow the guide in `MIGRATION_PLAN.md`. The basic process is to create the component in `packages/ui/src` and export it from `packages/ui/package.json`. It will then be available to import in any application within the monorepo.
