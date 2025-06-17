"use client"

import { useState } from "react"
import { Button } from "@repo/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Settings, Cloud, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ComponentsWorkspace } from "@/components/components-workspace"
import { ProfileWorkspace } from "@/components/profile-workspace"
import { DashboardWorkspace } from "@/components/dashboard-workspace"

type View = "profile" | "dashboard" | "components"

export default function DubbingApp() {
  const [isConnected, setIsConnected] = useState(false)
  const [activeView, setActiveView] = useState<View>("profile")

  const handleConnectionToggle = () => {
    setIsConnected(!isConnected)
  }

  return (
    <div className="min-h-screen bg-surface-0 text-foregrounds">
      {/* Header */}
      <header className="h-[72px] border-b border-borders-dim bg-[#2D2D2D]">
        <div className="flex h-full items-center justify-between px-4">
          {/* Left side - Logo and Navigation */}
          <div className="flex items-center space-x-6">
            {/* Logo */}
            <div className="flex items-center justify-center w-8 h-8 bg-surface-product-brand rounded text-white font-bold text-lg">
              N
            </div>

            {/* Navigation Tabs */}
            <nav className="flex space-x-1">
              <div
                onClick={() => setActiveView("profile")}
                className={`cursor-pointer rounded px-3 py-2 text-base font-semibold ${
                  activeView === "profile"
                    ? "bg-surface-navigation-selected text-white hover:bg-surface-navigation-selected-hover"
                    : "text-foregrounds-dim hover:bg-gray-800/40 hover:text-white"
                }`}
              >
                Profile
              </div>
              <div
                onClick={() => setActiveView("dashboard")}
                className={`cursor-pointer rounded px-3 py-2 text-base font-semibold ${
                  activeView === "dashboard"
                    ? "bg-surface-navigation-selected text-white hover:bg-surface-navigation-selected-hover"
                    : "text-foregrounds-dim hover:bg-gray-800/40 hover:text-white"
                }`}
              >
                Dashboard
              </div>
            </nav>
          </div>

          {/* Right side - Actions and User */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              {isConnected && (
                <Badge color="green" className="bg-transparent text-foreground">
                  Connected
                </Badge>
              )}
              <Button
                variant={isConnected ? "secondary" : "primary"}
                size="compact"
                onClick={handleConnectionToggle}
              >
                <span>{isConnected ? "Disconnect" : "Connect to Pro Tools"}</span>
              </Button>
            </div>

            <Button variant="icon" size="icon" className="text-foregrounds-dim hover:text-white">
              <Cloud className="h-5 w-5" />
            </Button>

            <Button variant="icon" size="icon" className="text-foregrounds-dim hover:text-white">
              <Settings className="h-5 w-5" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="tertiary" className="flex items-center space-x-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setActiveView("components")}>
                  Components
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 p-6">
        {activeView === "profile" && <ProfileWorkspace />}
        {activeView === "dashboard" && <DashboardWorkspace />}
        {activeView === "components" && <ComponentsWorkspace />}
      </main>
    </div>
  )
}
