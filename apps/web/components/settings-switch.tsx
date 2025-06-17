"use client"

import { Switch } from "@/components/ui/switch"

interface SettingsSwitchProps {
  label: string
  checked: boolean
  onCheckedChange: (checked: boolean) => void
}

export function SettingsSwitch({ label, checked, onCheckedChange }: SettingsSwitchProps) {
  return (
    <div className="flex items-center justify-between">
      <label className="text-base font-semibold text-foreground">{label}</label>
      <Switch checked={checked} onCheckedChange={onCheckedChange} />
    </div>
  )
}
