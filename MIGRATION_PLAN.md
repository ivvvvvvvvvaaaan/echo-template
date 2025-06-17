# Component Migration Plan

This document outlines the process for migrating components from the `apps/web` application into the shared `packages/ui` library. Following this process will build out your reusable component library, which can then be shared across multiple applications.

## General Workflow

The core idea is to move a component from `apps/web/components/ui` to `packages/ui/src`, update its dependencies and imports, and then consume it from the `web` app via the `@repo/ui` package.

### Step-by-Step Guide

1.  **Choose a Component to Migrate**:
    *   Select a component from `apps/web/components/ui`. Let's use `input.tsx` as an example.

2.  **Move the Component**:
    *   Move the component file from `apps/web/components/ui/input.tsx` to `packages/ui/src/input.tsx`.

3.  **Update Imports and Dependencies**:
    *   Open `packages/ui/src/input.tsx`.
    *   Look for any local imports, like `import { cn } from "@/lib/utils"`.
    *   Change the import to point to a shared package. For `cn`, this becomes `import { cn } from "@repo/utils/cn"`.
    *   The `@/*` alias will no longer work here, as it's local to the `web` app.

4.  **Update `packages/ui/package.json`**:
    *   Add any new dependencies the component needs to `packages/ui/package.json`. For example, if the component uses `class-variance-authority`, it needs to be a dependency here.
    *   Ensure `@repo/utils` is listed as a dependency if you're using `cn`.
    *   Add an export for the new component:
        ```json
        "exports": {
          // ... existing exports
          "./input": "./src/input.tsx"
        },
        ```

5.  **Install Dependencies**:
    *   From the root of the `echo-template` directory, run `pnpm install`. This will install the new dependencies and link the local packages.

6.  **Update the Web Application**:
    *   Find where the migrated component was used in the `apps/web` application (e.g., in `apps/web/app/page.tsx`).
    *   Change the import statement from `import { Input } from "@/components/ui/input"` to `import { Input } from "@repo/ui/input"`.

7.  **Update `apps/web/package.json`**:
    *   Make sure `@repo/ui` is listed as a dependency in `apps/web/package.json`. We've already added it, but it's a good step to verify.

8.  **Clean Up**:
    *   Once you've confirmed the application works with the new shared component, you can safely delete the original file from `apps/web/components/ui/input.tsx`.

9.  **Restart the Dev Server**:
    *   It's often a good idea to restart the development server (`pnpm dev`) to ensure all changes are picked up correctly.

By following these steps for each component, you will systematically build your design system in the `packages/ui` library, making it easy to reuse across this and future projects. 