import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@repo/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Tag } from "@/components/ui/tag"
import { Textarea } from "@/components/ui/textarea"
import { Modal, ConfirmationModal } from "@/components/ui/modal"
import { Circle, Info, Plus } from "lucide-react"

export function ComponentsWorkspace() {
  return (
    <div className="p-10 space-y-8">
      <h1 className="text-3xl font-bold">UI Components Test Page</h1>

      {/* Accordion */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Accordion</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Avatar */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Avatar</h2>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </section>

      {/* Badge */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Badge</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4">Colors</h3>
            <div className="flex flex-wrap gap-4 items-start">
              <Badge>Indigo (Default)</Badge>
              <Badge color="purple">Purple</Badge>
              <Badge color="yellow">Yellow</Badge>
              <Badge color="green">Green</Badge>
              <Badge color="gray">Gray</Badge>
              <Badge color="red">Red</Badge>
              <Badge color="blue">Blue</Badge>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Statuses</h3>
            <div className="flex flex-wrap gap-4 items-start">
              <Badge color="in progress">In Progress</Badge>
              <Badge color="complete">Complete</Badge>
              <Badge color="unknown">Unknown</Badge>
              <Badge color="failure">Failure</Badge>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Compact</h3>
            <div className="flex flex-wrap gap-4 items-start">
              <Badge size="compact">Indigo (Default)</Badge>
              <Badge size="compact" color="in progress">In Progress</Badge>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Interactive</h3>
            <div className="flex flex-wrap gap-4 items-start">
              <Badge
                state="interactive"
                color="purple"
                options={[
                  { label: "Option 1", value: "1" },
                  { label: "Option 2", value: "2" },
                ]}
              >
                Interactive
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Tag */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Tag</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4">Types & Sizes</h3>
            <div className="flex flex-wrap gap-4 items-start">
              <Tag>Fill Compact</Tag>
              <Tag size="default">Fill Default</Tag>
              <Tag type="border">Border Compact</Tag>
              <Tag size="default" type="border">
                Border Default
              </Tag>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">With Icon</h3>
            <div className="flex flex-wrap gap-4 items-start">
              <Tag icon={<Info />}>Icon Compact</Tag>
              <Tag icon={<Info />} size="default">
                Icon Default
              </Tag>
              <Tag icon={<Info />} type="border">
                Icon Compact
              </Tag>
              <Tag icon={<Info />} size="default" type="border">
                Icon Default
              </Tag>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Colors (Fill)</h3>
            <div className="flex flex-wrap gap-4 items-start">
              <Tag color="indigo">Indigo</Tag>
              <Tag color="purple">Purple</Tag>
              <Tag color="yellow">Yellow</Tag>
              <Tag color="green">Green</Tag>
              <Tag color="gray">Gray</Tag>
              <Tag color="red">Red</Tag>
              <Tag color="blue">Blue</Tag>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Colors (Border)</h3>
            <div className="flex flex-wrap gap-4 items-start">
              <Tag type="border" color="indigo">
                Indigo
              </Tag>
              <Tag type="border" color="purple">
                Purple
              </Tag>
              <Tag type="border" color="yellow">
                Yellow
              </Tag>
              <Tag type="border" color="green">
                Green
              </Tag>
              <Tag type="border" color="gray">
                Gray
              </Tag>
              <Tag type="border" color="red">
                Red
              </Tag>
              <Tag type="border" color="blue">
                Blue
              </Tag>
            </div>
          </div>
        </div>
      </section>

      {/* Button */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Button</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium mb-2">Default Size</h3>
            <div className="flex flex-wrap items-start gap-4">
              <Button variant="primary">Primary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="secondary-destructive">Secondary Destructive</Button>
              <Button variant="tertiary">Tertiary</Button>
              <Button variant="icon" size="icon">
                <Plus />
              </Button>
              <Button variant="primary" icon={<Plus />}>
                Icon Left
              </Button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Compact Size</h3>
            <div className="flex flex-wrap items-start gap-4">
              <Button size="compact" variant="primary">Primary</Button>
              <Button size="compact" variant="destructive">Destructive</Button>
              <Button size="compact" variant="secondary">Secondary</Button>
              <Button size="compact" variant="secondary-destructive">Secondary Destructive</Button>
              <Button size="compact" variant="tertiary">Tertiary</Button>
              <Button size="compact" variant="primary" icon={<Plus />}>
                Icon Left
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Dropdown Menu */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Dropdown Menu</h2>
        <div className="flex flex-wrap items-start gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" dropdown>Open Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="compact" dropdown>Compact Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </section>

      {/* Input */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Input</h2>
        <Input type="email" placeholder="Email" className="max-w-sm" />
      </section>

      {/* Select */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Select</h2>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </section>

      {/* Slider */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Slider</h2>
        <Slider defaultValue={[50]} max={100} step={1} className="w-[60%]" />
      </section>

      {/* Switch */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Switch</h2>
        <div className="flex items-center space-x-2">
          <Switch id="airplane-mode" />
          <label htmlFor="airplane-mode">Airplane Mode</label>
        </div>
      </section>

      {/* Textarea */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Textarea</h2>
        <Textarea placeholder="Type your message here." />
      </section>

      {/* Modal */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Modal</h2>
        <div className="flex flex-wrap items-start gap-4">
          <Modal>
            <Modal.Trigger asChild>
              <Button variant="secondary">Open Modal</Button>
            </Modal.Trigger>
            <Modal.Content className="gap-3">
              <Modal.Header>
                <Modal.Title>Email Digest</Modal.Title>
                <Modal.Description>
                  Configure your email address and which projects you want to monitor.
                </Modal.Description>
              </Modal.Header>
              <Modal.Body>
                <div className="flex flex-col gap-2">
                  <Input type="email" placeholder="Input text" />
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All projects" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="project1">Project 1</SelectItem>
                      <SelectItem value="project2">Project 2</SelectItem>
                      <SelectItem value="project3">Project 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Modal.Close asChild>
                  <Button variant="secondary">Cancel</Button>
                </Modal.Close>
                <Button variant="primary">Submit</Button>
              </Modal.Footer>
            </Modal.Content>
          </Modal>

          <ConfirmationModal
            trigger={<Button variant="destructive">Discard Changes</Button>}
            title="Discard unsaved changes?"
            description="You'll lose all changes you've made."
            confirmText="Discard"
            cancelText="Keep Editing"
            onConfirm={() => console.log("Confirmed!")}
          />
        </div>
      </section>
    </div>
  )
} 