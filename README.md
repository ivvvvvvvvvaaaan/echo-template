# HKNS AI Application Template

A clean, modern, and scalable template for building full-stack AI application. Get all Hawkins components out the box.

## What's Inside?

This monorepo is a ready-to-use starting point and includes:

- `apps/web`: A Next.js application with two pre-built pages:
    - A **Profile** page with a sample form.
    - A **Dashboard** page with a clean empty state.
- `packages/ui`: A shared React component library, powered by Tailwind CSS. All your reusable components go here.
- `packages/utils`: Shared utility functions (like `cn` for class names).
- `packages/typescript-config`: Shared `tsconfig.json`s.
- `packages/eslint-config`: Shared ESLint configurations.

## Components

This template includes a variety of pre-built components to get you started:

### UI Components

- **Accordion**: A vertically stacked set of interactive headings.
- **Avatar**: An image element with a fallback for representing a user.
- **UserAvatar**: A specialized avatar that shows initials or a profile picture.
- **Badge**: For displaying a small amount of information.
- **Button**: A clickable button element.
- **DropdownMenu**: A menu that appears upon user interaction.
- **Input**: A standard text input field.
- **MenuItem**: An item within a menu.
- **Modal**: A dialog that is displayed on top of the current page.
- **Select**: A dropdown for selecting from a list of options.
- **Slider**: For selecting a value from a range.
- **Switch**: A control that can be toggled on or off.
- **Tag**: For categorizing or labeling content.
- **Textarea**: A multi-line text input field.

### Page Components

- **Header**: The main header for the application.
- **HorizontalNav**: A horizontal navigation bar.
- **ThemeProvider**: Manages application themes (e.g., light/dark mode).

## Prerequisites

```**Install Cursor (or else) and ask it to explain this to you if its unclear.**```

To work with this template effectively, you'll need a few things set up on your computer. 


- **Node.js**: This project requires Node.js to run. We recommend using the latest Long-Term Support (LTS) version. You can download it from [nodejs.org](https://nodejs.org/).
- **pnpm**: We use pnpm as the package manager for this monorepo. After installing Node.js, you can install pnpm by running `npm install -g pnpm` in your terminal.
- **Code Editor**: A modern code editor is recommended for the best experience. We suggest using [VS Code](https://code.visualstudio.com/) or [Cursor](https://cursor.sh/), as they offer powerful features like IntelliSense for code completion and an integrated terminal for running commands.

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
