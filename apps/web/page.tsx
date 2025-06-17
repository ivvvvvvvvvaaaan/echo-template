"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Settings, Cloud, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { DubbingWorkspace } from "@/components/dubbing-workspace"
import { DubbingAgentWorkspace } from "@/components/dubbing-agent-workspace"
import { ComponentsWorkspace } from "@/components/components-workspace"

type View = "text-to-speech" | "dubbing-agent" | "components"

export default function DubbingApp() {
  const [isConnected, setIsConnected] = useState(false)
  const [activeView, setActiveView] = useState<View>("components")

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
                onClick={() => setActiveView("text-to-speech")}
                className={`cursor-pointer rounded px-3 py-2 text-base font-semibold ${
                  activeView === "text-to-speech"
                    ? "bg-surface-navigation-selected text-white hover:bg-surface-navigation-selected-hover"
                    : "text-foregrounds-dim hover:bg-gray-800/40 hover:text-white"
                }`}
              >
                Text to Speech
              </div>
              <div
                onClick={() => setActiveView("dubbing-agent")}
                className={`cursor-pointer rounded px-3 py-2 text-base font-semibold ${
                  activeView === "dubbing-agent"
                    ? "bg-surface-navigation-selected text-white hover:bg-surface-navigation-selected-hover"
                    : "text-foregrounds-dim hover:bg-gray-800/40 hover:text-white"
                }`}
              >
                Dubbing Agent
              </div>
              <div
                onClick={() => setActiveView("components")}
                className={`cursor-pointer rounded px-3 py-2 text-base font-semibold ${
                  activeView === "components"
                    ? "bg-surface-navigation-selected text-white hover:bg-surface-navigation-selected-hover"
                    : "text-foregrounds-dim hover:bg-gray-800/40 hover:text-white"
                }`}
              >
                Components
              </div>
            </nav>
          </div>

          {/* Right side - Actions and User */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              {isConnected && (
                <Badge variant="positive" className="bg-transparent text-foreground">
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
                <Button variant="tertiary" className="flex items-center space-x-2 text-foregrounds-dim hover:text-white">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" />
                    <AvatarFallback className="bg-gray-700 text-white">U</AvatarFallback>
                  </Avatar>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-gray-800 border-gray-700">
                <DropdownMenuItem className="text-foregrounds-dim hover:text-white hover:bg-gray-700">
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="text-foregrounds-dim hover:text-white hover:bg-gray-700">
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem className="text-foregrounds-dim hover:text-white hover:bg-gray-700">
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 p-6">
        {activeView === "text-to-speech" && <DubbingWorkspace />}
        {activeView === "dubbing-agent" && <DubbingAgentWorkspace />}
        {activeView === "components" && <ComponentsWorkspace />}
      </main>
    </div>
  )
}
