"use client"

import * as React from "react"
import { Avatar, AvatarImage, AvatarFallback, AvatarProps } from "./avatar"
import { cn } from "@repo/utils/cn"

const colors = [
  "bg-indigo-500",
  "bg-purple-500",
  "bg-yellow-500",
  "bg-green-500",
  "bg-red-500",
  "bg-blue-500",
]

const getAvatarColor = (name: string) => {
  const charCodeSum = name
    .split("")
    .reduce((sum, char) => sum + char.charCodeAt(0), 0)
  return colors[charCodeSum % colors.length]
}

export interface UserAvatarProps extends AvatarProps {
  name: string
  src?: string
  className?: string
}

export function UserAvatar({ name, src, className, size }: UserAvatarProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .substring(0, 2)
    .toUpperCase()

  const colorClass = getAvatarColor(name)

  return (
    <Avatar className={className} size={size}>
      <AvatarImage src={src} alt={name} />
      <AvatarFallback
        size={size}
        className={cn(
          "text-foreground",
          !src && colorClass,
        )}
      >
        {initials}
      </AvatarFallback>
    </Avatar>
  )
}