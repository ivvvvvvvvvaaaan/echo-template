"use client"

import { useState } from "react"
import { Button } from "@repo/ui/button"
import { Badge } from "@/components/ui/badge"
import { Cloud } from "lucide-react"
import { ComponentsWorkspace } from "@/components/components-workspace"
import { ProfileWorkspace } from "@/components/profile-workspace"
import { DashboardWorkspace } from "@/components/dashboard-workspace"
import { Header } from "@/components/header"

type View = "profile" | "dashboard" | "components"

export default function DubbingApp() {
  const [isConnected, setIsConnected] = useState(false)
  const [activeView, setActiveView] = useState<View>("profile")

  const handleConnectionToggle = () => {
    setIsConnected(!isConnected)
  }

  return (
    <div className="min-h-screen bg-surface-0 text-foreground">
      <Header activeView={activeView} setActiveView={setActiveView}>
        {/* Custom Actions */}
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
        <Button variant="icon" size="icon" className="text-foreground-dim hover:text-foreground-inverse">
          <Cloud className="h-5 w-5" />
        </Button>
      </Header>

      {/* Main Content Area */}
      <main className="flex-1 p-6">
        {activeView === "profile" && <ProfileWorkspace />}
        {activeView === "dashboard" && <DashboardWorkspace />}
        {activeView === "components" && <ComponentsWorkspace />}
      </main>
    </div>
  )
}
