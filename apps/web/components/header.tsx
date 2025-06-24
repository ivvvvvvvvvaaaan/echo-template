"use client";

import * as React from "react";
import { HorizontalNav } from "./horizontal-nav";
import { Button } from "@repo/ui/button";
import { Settings, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuItem } from "./ui/menu-item";
import { UserAvatar } from "./ui/user-avatar";
import { ThemeToggle } from "./theme-toggle";

type View = "profile" | "dashboard" | "components";

interface HeaderProps {
  activeView: View;
  setActiveView: (_view: View) => void;
  children?: React.ReactNode;
}

export function Header({ activeView, setActiveView, children }: HeaderProps) {
  return (
    <header className="h-[72px] border-b border-border-dim bg-surface-0 dark:bg-surface-3 shadow-low dark:shadow-none">
      <div className="flex h-full items-center justify-between px-4">
        <div className="flex items-center space-x-6">
          <div className="flex items-center justify-center w-8 h-8 bg-surface-product-brand rounded text-foreground-inverse font-bold text-lg">
            N
          </div>
          <HorizontalNav activeView={activeView} setActiveView={setActiveView} />
        </div>

        <div className="flex items-center space-x-3">
          {children}

          <ThemeToggle />

          <Button variant="icon" size="icon">
            <Settings className="h-5 w-5" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="tertiary"
                className="flex items-center space-x-2 hover:bg-transparent"
              >
                <UserAvatar name="John Doe" size="small" />
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <MenuItem onClick={() => setActiveView("components")}>
                Components
              </MenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
} 