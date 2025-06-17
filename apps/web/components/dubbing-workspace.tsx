"use client"

// When styling this component, please use values from tailwind.config.ts.
// Avoid using arbitrary values for colors, font sizes, etc.

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Search, MoreHorizontal, Play, Share, Check, Pause } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { SettingsSwitch } from "@/components/settings-switch"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export function DubbingWorkspace() {
  const [selectedVoice, setSelectedVoice] = useState("will")
  const [ttsModel, setTtsModel] = useState("eleven-multilingual")
  const [openAccordion, setOpenAccordion] = useState<string[]>(["voice-selection"])
  const [searchQuery, setSearchQuery] = useState("")
  const [stability, setStability] = useState([0.5])
  const [similarityBoost, setSimilarityBoost] = useState([0.75])
  const [styleExagg, setStyleExagg] = useState([0.0])
  const [speed, setSpeed] = useState([1.0])
  const [useSpeakerBoost, setUseSpeakerBoost] = useState(true)
  const [isProcessing, setIsProcessing] = useState(false)
  const [isTranslationEnabled, setIsTranslationEnabled] = useState(false)
  const [generatedSpeechText, setGeneratedSpeechText] = useState("")
  const [isPreviewGenerating, setIsPreviewGenerating] = useState(false)
  const [previews, setPreviews] = useState<{ id: number; text: string; duration: number }[]>([])
  const [selectedPreviewId, setSelectedPreviewId] = useState<number | null>(null)
  const [playingPreview, setPlayingPreview] = useState<{
    id: number
    progress: number
  } | null>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const handleGrabAudio = () => {
    setIsProcessing(true)
    setIsTranslationEnabled(false)

    setTimeout(() => {
      setIsProcessing(false)
      setIsTranslationEnabled(true)
    }, 1000)
  }

  const handleTranslate = () => {
    setGeneratedSpeechText(
      "El camino del hombre justo está rodeado por todos lados por la injusticia de los egoístas y la tiranía de los malvados.",
    )
  }

  const handleGeneratePreview = () => {
    if (!generatedSpeechText.trim()) return

    setIsPreviewGenerating(true)
    setSelectedPreviewId(null)
    if (intervalRef.current) clearInterval(intervalRef.current)
    setPlayingPreview(null)

    setTimeout(() => {
      const newPreview = {
        id: Date.now(),
        text: generatedSpeechText,
        duration: Math.floor(Math.random() * 10) + 3, // Mock duration 3-12s
      }
      setPreviews((prev) => [newPreview, ...prev])
      setIsPreviewGenerating(false)
    }, 1500)
  }

  const handlePlayPause = (id: number, duration: number) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }

    if (playingPreview?.id === id) {
      setPlayingPreview(null)
      return
    }

    setPlayingPreview({ id, progress: 0 })

    intervalRef.current = setInterval(() => {
      setPlayingPreview((curr) => {
        if (!curr) {
          if (intervalRef.current) clearInterval(intervalRef.current)
          return null
        }
        const newProgress = curr.progress + 100 / (duration * 10) // Update every 100ms
        if (newProgress >= 100) {
          if (intervalRef.current) clearInterval(intervalRef.current)
          return null
        }
        return { ...curr, progress: newProgress }
      })
    }, 100)
  }

  const formatDuration = (seconds: number) => {
    const m = Math.floor(seconds / 60)
    const s = seconds % 60
    return `${m}:${s.toString().padStart(2, "0")}`
  }

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  const voices = [
    { name: "Will", isCloned: false },
    { name: "Jessica", isCloned: false },
    { name: "Eric", isCloned: false },
    { name: "Chris", isCloned: true },
    { name: "Brian", isCloned: false },
    { name: "Daniel", isCloned: false },
    { name: "Lily", isCloned: false },
    { name: "Bill", isCloned: false },
    { name: "Actor VO", isCloned: true },
  ]

  const ttsModelOptions = [
    { value: "eleven-multilingual", label: "Eleven Multilingual v2" },
    { value: "other-model", label: "Other Model" },
  ]

  const filteredVoices = voices.filter((voice) =>
    voice.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="grid grid-cols-[2fr_3fr_2fr] gap-6 h-[calc(100vh-120px)]">
      {/* Column 1: Setup */}
      <div className="bg-surface-1 rounded-lg space-y-6">
        <div className="flex items-center justify-between p-6 pb-0">
          <h2 className="text-2xl font-semibold text-foreground">Setup</h2>
          <Badge
            state="interactive"
            options={ttsModelOptions}
            onOptionSelect={setTtsModel}
            value={ttsModel}
          >
            {ttsModelOptions.find(opt => opt.value === ttsModel)?.label}
          </Badge>
        </div>

        <Accordion
          type="multiple"
          className="w-full"
          value={openAccordion}
          onValueChange={setOpenAccordion}
        >
          <AccordionItem
            value="voice-selection"
            className={cn(openAccordion.includes("voice-selection") && "border-b border-borders-dim")}
          >
            <AccordionTrigger className="px-6 hover:no-underline">
              <div className="flex w-full items-center justify-between">
                <span className="text-base font-semibold">Voice</span>
                <span className="text-sm font-normal text-foreground-dim capitalize">
                  {selectedVoice}
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pt-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground-dim" />
                <Input
                  placeholder="Search voices..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="max-h-[200px] space-y-2 overflow-y-auto pr-1 pt-2">
                {filteredVoices.map((voice) => {
                  const isSelected = selectedVoice === voice.name.toLowerCase()
                  return (
                    <Button
                      key={voice.name}
                      variant={isSelected ? "secondary" : "tertiary"}
                      onClick={() => setSelectedVoice(voice.name.toLowerCase())}
                      className="w-full justify-start"
                    >
                      <span className="flex h-3.5 w-3.5 items-center justify-center">
                        {isSelected && <Check className="h-4 w-4" />}
                      </span>
                      {voice.name}
                      {voice.isCloned && (
                        <span className="ml-2 text-xs text-foreground-dim/80">
                          (Cloned)
                        </span>
                      )}
                    </Button>
                  )
                })}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="space-y-4 pt-4 px-6">
          <h3 className="text-lg font-semibold text-foreground">Voice Settings</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-base font-semibold text-foreground">Stability</label>
              <span className="text-sm text-foreground-dim">{stability[0].toFixed(2)}</span>
            </div>
            <Slider value={stability} onValueChange={setStability} max={1} min={0} step={0.01} className="w-full" />
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-base font-semibold text-foreground">Similarity Boost</label>
              <span className="text-sm text-foreground-dim">{similarityBoost[0].toFixed(2)}</span>
            </div>
            <Slider
              value={similarityBoost}
              onValueChange={setSimilarityBoost}
              max={1}
              min={0}
              step={0.01}
              className="w-full"
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-base font-semibold text-foreground">Style Exagg.</label>
              <span className="text-sm text-foreground-dim">{styleExagg[0].toFixed(2)}</span>
            </div>
            <Slider value={styleExagg} onValueChange={setStyleExagg} max={1} min={0} step={0.01} className="w-full" />
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-base font-semibold text-foreground">Speed</label>
              <span className="text-sm text-foreground-dim">{speed[0].toFixed(2)}x</span>
            </div>
            <Slider value={speed} onValueChange={setSpeed} max={2} min={0.25} step={0.01} className="w-full" />
          </div>

          <SettingsSwitch label="Use Speaker Boost" checked={useSpeakerBoost} onCheckedChange={setUseSpeakerBoost} />
        </div>
      </div>

      {/* Column 2: Text & Cloning */}
      <div className="bg-surface-1 rounded-lg p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-foreground">Text & Cloning</h2>
          <Button variant="secondary" size="compact" onClick={handleGrabAudio}>
            Grab Audio From Pro Tools
          </Button>
        </div>

        <div>
          <label className="text-base font-semibold text-foreground pb-2 block">Transcription</label>
          <div className="rounded-lg pb-4 h-auto mb-4">
            <p
              className={`${
                isTranslationEnabled
                  ? "text-xl text-foreground"
                  : "text-base text-foreground-dim"
              }`}
            >
              {isProcessing
                ? "Processing..."
                : isTranslationEnabled
                ? "The path of the righteous man is beset on all sides by the inequities of the selfish and the tyranny of evil men."
                : "Select text in Pro Tools to transcribe..."}
            </p>
          </div>

          <div
            className={`flex items-center justify-between ${
              !isTranslationEnabled ? "opacity-50 pointer-events-none" : ""
            }`}
          >
            <div className="flex flex-1 items-center gap-2 mr-4">
              <Select defaultValue="spanish">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="spanish">Spanish</SelectItem>
                  <SelectItem value="french">French</SelectItem>
                  <SelectItem value="german">German</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="secondary" onClick={handleTranslate}>
                Translate
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="icon" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-80" align="end">
                  <div className="p-4 space-y-4">
                    <h3 className="font-semibold text-foreground">Create Voice Clone</h3>
                    <div>
                      <label className="text-sm font-semibold text-foreground mb-2 block">New Voice Name:</label>
                      <Input placeholder="Enter name for clone..." />
                    </div>
                    <p className="text-xs text-foreground-dim">Uses audio from 'Get Clip Audio' button above.</p>
                    <Button className="w-full">Create Voice Clone</Button>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-borders-dim">
          <label className="text-base font-semibold text-foreground mb-2 block">Generate Speech</label>
          <Textarea
            className="h-24 mb-4 bg-surface-2"
            placeholder="Add text to generate audio"
            value={generatedSpeechText}
            onChange={(e) => setGeneratedSpeechText(e.target.value)}
          />
          <div className="flex justify-end">
            <Button
              variant="secondary"
              onClick={handleGeneratePreview}
              disabled={isPreviewGenerating || !generatedSpeechText.trim()}
            >
              {isPreviewGenerating ? (
                "Generating..."
              ) : (
                <>
                  <Play className="mr-2 h-4 w-4" />
                  Generate Preview
                </>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Column 3: Preview & Export */}
      <div className="bg-surface-1 rounded-lg p-6 space-y-6">
        <h2 className="text-2xl font-semibold text-foreground mb-2">Preview & Export</h2>

        <div>
          <label className="text-base font-semibold text-foreground mb-2 block">Preview</label>
          <div
            className={cn("rounded-lg flex flex-col mb-4", {
              "bg-surface-2 p-2 min-h-[128px]": previews.length === 0,
            })}
          >
            {previews.length === 0 ? (
              <div className="flex-1 flex items-center justify-center">
                <p className="text-sm text-foreground-dim">No previews generated yet</p>
              </div>
            ) : (
              <div className="max-h-[220px] overflow-y-auto space-y-2">
                {previews.map((preview) => (
                  <div
                    key={preview.id}
                    className={cn(
                      "bg-surface-3 p-2 rounded-md flex items-center justify-between cursor-pointer transition-colors hover:bg-surface-highlight",
                      selectedPreviewId === preview.id && "ring-2 ring-border-system-focus",
                    )}
                    onClick={() => setSelectedPreviewId(preview.id)}
                  >
                    <div className="flex items-center gap-3 w-full">
                      <Button
                        variant="icon"
                        size="icon"
                        className="shrink-0"
                        onClick={(e) => {
                          e.stopPropagation()
                          handlePlayPause(preview.id, preview.duration)
                        }}
                      >
                        {playingPreview?.id === preview.id ? (
                          <Pause className="h-5 w-5" />
                        ) : (
                          <Play className="h-5 w-5" />
                        )}
                      </Button>
                      <div className="w-full space-y-1">
                        <div className="bg-surface-low rounded-full h-1 w-full">
                          <div
                            className="bg-border-system-focus h-1 rounded-full"
                            style={{
                              width: `${
                                playingPreview?.id === preview.id ? playingPreview.progress : 0
                              }%`,
                            }}
                          />
                        </div>
                        <span className="text-xs text-foreground-dim">
                          {formatDuration(preview.duration)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="flex justify-end">
            <Button disabled={!selectedPreviewId}>
              <Share className="mr-2 h-4 w-4" />
              Send to Pro Tools
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
