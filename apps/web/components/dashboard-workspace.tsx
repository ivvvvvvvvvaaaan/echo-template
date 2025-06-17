import { Button } from "@repo/ui/button"
import { Rocket } from "lucide-react"

export function DashboardWorkspace() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center bg-surface-1 p-12 rounded-lg shadow-lg">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-surface-2 mb-6">
          <Rocket className="h-8 w-8 text-foreground-dim" />
        </div>
        <h2 className="text-2xl font-semibold text-foreground mb-2">
          Ready for Liftoff!
        </h2>
        <p className="max-w-md mx-auto text-foreground-dim mb-6">
          This is your blank canvas. Start by creating a new project, connecting a data source, or exploring the documentation.
        </p>
        <Button variant="primary">Create Your First Project</Button>
      </div>
    </div>
  )
} 