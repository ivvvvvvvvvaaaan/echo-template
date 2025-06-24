"use client";

import * as React from "react";

type View = "profile" | "dashboard" | "components";

interface HorizontalNavProps {
  activeView: View;
  setActiveView: (_view: View) => void;
}

export function HorizontalNav({ activeView, setActiveView }: HorizontalNavProps) {
  return (
    <nav className="flex space-x-1">
      <div
        onClick={() => setActiveView("profile")}
        className={`cursor-pointer rounded px-3 py-2 text-base font-semibold ${
          activeView === "profile"
            ? "bg-surface-navigation-selected text-white hover:bg-surface-navigation-selected-hover"
            : "text-foreground hover:bg-gray-800/40 hover:text-white"
        }`}
      >
        Profile
      </div>
      <div
        onClick={() => setActiveView("dashboard")}
        className={`cursor-pointer rounded px-3 py-2 text-base font-semibold ${
          activeView === "dashboard"
            ? "bg-surface-navigation-selected text-white hover:bg-surface-navigation-selected-hover"
            : "text-foreground hover:bg-gray-800/40 hover:text-white"
        }`}
      >
        Dashboard
      </div>
    </nav>
  );
} 