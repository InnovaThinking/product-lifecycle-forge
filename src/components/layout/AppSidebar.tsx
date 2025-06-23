
"use client"

import { useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import {
  Search,
  Book,
  Calendar,
  Code,
  Folder,
  Image,
  List,
  ChevronDown,
  ChevronRight
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"

const moduleItems = [
  { 
    title: "Descoberta", 
    url: "/discovery", 
    icon: Search,
    color: "text-discovery-600",
    bgColor: "bg-discovery-50",
    children: [
      { title: "Research Hub", url: "/discovery/research" },
      { title: "Opportunity Canvas", url: "/discovery/opportunities" },
      { title: "Market Intelligence", url: "/discovery/market" },
      { title: "Personas", url: "/discovery/personas" },
      { title: "Journey Maps", url: "/discovery/journeys" }
    ]
  },
  { 
    title: "Validação", 
    url: "/validation", 
    icon: Book,
    color: "text-validation-600",
    bgColor: "bg-validation-50",
    children: [
      { title: "Hypothesis Management", url: "/validation/hypotheses" },
      { title: "Experiments", url: "/validation/experiments" },
      { title: "Validation Dashboard", url: "/validation/dashboard" }
    ]
  },
  { 
    title: "Desenvolvimento", 
    url: "/development", 
    icon: Code,
    color: "text-development-600",
    bgColor: "bg-development-50",
    children: [
      { title: "Product Roadmap", url: "/development/roadmap" },
      { title: "Feature Management", url: "/development/features" },
      { title: "Releases", url: "/development/releases" }
    ]
  },
  { 
    title: "Lançamento", 
    url: "/launch", 
    icon: Calendar,
    color: "text-launch-600",
    bgColor: "bg-launch-50",
    children: [
      { title: "Go-to-Market", url: "/launch/planning" },
      { title: "Launch Execution", url: "/launch/execution" },
      { title: "Post-Launch", url: "/launch/analysis" }
    ]
  },
  { 
    title: "Gestão", 
    url: "/management", 
    icon: List,
    color: "text-management-600",
    bgColor: "bg-management-50",
    children: [
      { title: "Analytics", url: "/management/analytics" },
      { title: "User Experience", url: "/management/ux" },
      { title: "Portfolio", url: "/management/portfolio" }
    ]
  }
]

const quickAccess = [
  { title: "Dashboard", url: "/", icon: Folder },
  { title: "Products", url: "/products", icon: Image },
  { title: "Settings", url: "/settings", icon: List }
]

export function AppSidebar() {
  const { state } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname
  const [expandedGroups, setExpandedGroups] = useState<string[]>(['modules'])
  
  const isCollapsed = state === "collapsed"

  const isActive = (path: string) => currentPath === path || currentPath.startsWith(path + '/')
  const isGroupExpanded = (groupId: string) => expandedGroups.includes(groupId)
  
  const toggleGroup = (groupId: string) => {
    setExpandedGroups(prev => 
      prev.includes(groupId) 
        ? prev.filter(id => id !== groupId)
        : [...prev, groupId]
    )
  }

  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    cn(
      "nav-item",
      isActive && "active"
    )

  return (
    <Sidebar
      className={cn(
        "border-r transition-all duration-300",
        isCollapsed ? "w-16" : "w-72"
      )}
      collapsible="icon"
    >
      <div className="flex h-14 items-center border-b px-4">
        <SidebarTrigger className="ml-auto" />
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-purple-600"></div>
            <span className="font-semibold text-lg gradient-text">ProductOS</span>
          </div>
        )}
      </div>

      <SidebarContent className="px-2 py-4">
        {/* Quick Access */}
        <SidebarGroup>
          {!isCollapsed && <SidebarGroupLabel>Quick Access</SidebarGroupLabel>}
          <SidebarGroupContent>
            <SidebarMenu>
              {quickAccess.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end={item.url === "/"} 
                      className={getNavCls}
                    >
                      <item.icon className="h-4 w-4" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Modules */}
        <SidebarGroup>
          <div 
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleGroup('modules')}
          >
            {!isCollapsed && <SidebarGroupLabel>Modules</SidebarGroupLabel>}
            {!isCollapsed && (
              isGroupExpanded('modules') ? 
                <ChevronDown className="h-4 w-4" /> : 
                <ChevronRight className="h-4 w-4" />
            )}
          </div>
          
          {(isGroupExpanded('modules') || isCollapsed) && (
            <SidebarGroupContent>
              <SidebarMenu>
                {moduleItems.map((item) => {
                  const isModuleActive = isActive(item.url)
                  return (
                    <div key={item.title}>
                      <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                          <NavLink 
                            to={item.url} 
                            className={cn(
                              getNavCls({ isActive: isModuleActive }),
                              isModuleActive && `${item.bgColor} ${item.color}`
                            )}
                          >
                            <item.icon className="h-4 w-4" />
                            {!isCollapsed && <span>{item.title}</span>}
                          </NavLink>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      
                      {/* Sub-items */}
                      {!isCollapsed && isModuleActive && item.children && (
                        <div className="ml-6 mt-1 space-y-1">
                          {item.children.map((child) => (
                            <SidebarMenuItem key={child.title}>
                              <SidebarMenuButton asChild size="sm">
                                <NavLink 
                                  to={child.url}
                                  className={cn(
                                    "text-sm text-muted-foreground hover:text-foreground",
                                    isActive(child.url) && "text-primary font-medium"
                                  )}
                                >
                                  <span>{child.title}</span>
                                </NavLink>
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          )}
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
