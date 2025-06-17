"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Tag } from "@/components/ui/tag"

export function ProfileWorkspace() {
  const [selection, setSelection] = useState<"pro" | "against" | null>(null)

  return (
    <div className="max-w-2xl mx-auto p-8 space-y-8 bg-surface-1 rounded-lg">
      <h1 className="text-3xl font-bold text-foreground">User Profile</h1>
      
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-base font-semibold text-foreground">Name</label>
          <Input placeholder="Enter your name" autoComplete="name" />
        </div>
        
        <div className="space-y-2">
          <label className="text-base font-semibold text-foreground">Username</label>
          <Input placeholder="Enter your username" autoComplete="username" />
        </div>

        <div className="space-y-3">
          <label className="text-base font-semibold text-foreground">Stance</label>
          <div className="flex gap-4">
            <Tag
              type={selection === "pro" ? "fill" : "border"}
              color={selection === "pro" ? "green" : "gray"}
              onClick={() => setSelection("pro")}
              className="cursor-pointer"
              size="default"
            >
              I&apos;m pro
            </Tag>
            <Tag
              type={selection === "against" ? "fill" : "border"}
              color={selection === "against" ? "red" : "gray"}
              onClick={() => setSelection("against")}
              className="cursor-pointer"
              size="default"
            >
              I&apos;m against
            </Tag>
          </div>
        </div>
      </div>
    </div>
  )
} 