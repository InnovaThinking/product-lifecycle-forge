
"use client"

import { Search, Bell, User, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center px-4 gap-4">
        {/* Search */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search products, features, experiments..."
              className="pl-9 bg-muted/50 border-0 focus-visible:ring-1"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-4 w-4" />
                <Badge 
                  className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs"
                  variant="destructive"
                >
                  3
                </Badge>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex-col items-start p-3">
                <div className="flex w-full items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span className="font-medium">Experiment Completed</span>
                  <span className="ml-auto text-xs text-muted-foreground">2m ago</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  A/B test for checkout flow has finished with 95% confidence
                </p>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex-col items-start p-3">
                <div className="flex w-full items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-launch-500"></div>
                  <span className="font-medium">Release Ready</span>
                  <span className="ml-auto text-xs text-muted-foreground">1h ago</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Version 2.1.0 passed all quality gates
                </p>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex-col items-start p-3">
                <div className="flex w-full items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-validation-500"></div>
                  <span className="font-medium">New Hypothesis</span>
                  <span className="ml-auto text-xs text-muted-foreground">3h ago</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Team created hypothesis for mobile conversion optimization
                </p>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg" alt="User" />
                  <AvatarFallback>PM</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">Product Manager</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    pm@company.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
