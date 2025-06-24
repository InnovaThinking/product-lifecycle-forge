
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
  ChevronRight,
  Sparkles
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
    gradient: "from-discovery-600/10 to-blue-600/10",
    children: [
      { title: "Central de Pesquisa", url: "/discovery/research" },
      { title: "Canvas de Oportunidades", url: "/discovery/opportunities" },
      { title: "Inteligência de Mercado", url: "/discovery/market" },
      { title: "Personas", url: "/discovery/personas" },
      { title: "Mapas de Jornada", url: "/discovery/journeys" }
    ]
  },
  { 
    title: "Validação", 
    url: "/validation", 
    icon: Book,
    color: "text-validation-600",
    bgColor: "bg-validation-50",
    gradient: "from-validation-600/10 to-purple-600/10",
    children: [
      { title: "Gestão de Hipóteses", url: "/validation/hypotheses" },
      { title: "Experimentos", url: "/validation/experiments" },
      { title: "Dashboard de Validação", url: "/validation/dashboard" }
    ]
  },
  { 
    title: "Desenvolvimento", 
    url: "/development", 
    icon: Code,
    color: "text-development-600",
    bgColor: "bg-development-50",
    gradient: "from-development-600/10 to-emerald-600/10",
    children: [
      { title: "Roadmap do Produto", url: "/development/roadmap" },
      { title: "Gestão de Funcionalidades", url: "/development/features" },
      { title: "Releases", url: "/development/releases" }
    ]
  },
  { 
    title: "Lançamento", 
    url: "/launch", 
    icon: Calendar,
    color: "text-launch-600",
    bgColor: "bg-launch-50",
    gradient: "from-launch-600/10 to-orange-600/10",
    children: [
      { title: "Go-to-Market", url: "/launch/planning" },
      { title: "Execução do Lançamento", url: "/launch/execution" },
      { title: "Pós-Lançamento", url: "/launch/analysis" }
    ]
  },
  { 
    title: "Gestão", 
    url: "/management", 
    icon: List,
    color: "text-management-600",
    bgColor: "bg-management-50",
    gradient: "from-management-600/10 to-cyan-600/10",
    children: [
      { title: "Analytics", url: "/management/analytics" },
      { title: "Experiência do Usuário", url: "/management/ux" },
      { title: "Portfólio", url: "/management/portfolio" }
    ]
  }
]

const quickAccess = [
  { title: "Dashboard", url: "/", icon: Folder },
  { title: "Produtos", url: "/products", icon: Image },
  { title: "Configurações", url: "/settings", icon: List }
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
    if (!isCollapsed) {
      setExpandedGroups(prev => 
        prev.includes(groupId) 
          ? prev.filter(id => id !== groupId)
          : [...prev, groupId]
      )
    }
  }

  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    cn(
      "nav-item",
      isActive && "active"
    )

  return (
    <Sidebar
      className={cn(
        "glass-panel border-r-0 transition-all duration-500",
        isCollapsed ? "w-16" : "w-72"
      )}
      collapsible="icon"
    >
      <div className="flex h-16 items-center border-b border-border/50 px-4 bg-gradient-to-r from-background/50 to-background/80 backdrop-blur-xl">
        <SidebarTrigger className="ml-auto hover:bg-accent/50 transition-all duration-300 hover:scale-110" />
        {!isCollapsed && (
          <div className="flex items-center gap-3 animate-fade-in">
            <div className="relative h-9 w-9 rounded-xl bg-gradient-to-br from-primary via-purple-600 to-pink-600 p-0.5">
              <div className="h-full w-full rounded-[10px] bg-background flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-primary" />
              </div>
            </div>
            <span className="font-bold text-xl gradient-text">ProductOS</span>
          </div>
        )}
      </div>

      <SidebarContent className="px-3 py-6 space-y-6">
        {/* Quick Access */}
        <SidebarGroup>
          {!isCollapsed && (
            <SidebarGroupLabel className="text-xs font-semibold tracking-wide text-muted-foreground/80 mb-3">
              Acesso Rápido
            </SidebarGroupLabel>
          )}
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {quickAccess.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={isCollapsed ? item.title : undefined}>
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
          {!isCollapsed && (
            <div 
              className="flex items-center justify-between cursor-pointer group mb-3"
              onClick={() => toggleGroup('modules')}
            >
              <SidebarGroupLabel className="text-xs font-semibold tracking-wide text-muted-foreground/80 group-hover:text-foreground transition-colors">
                Módulos
              </SidebarGroupLabel>
              <div className="transition-transform duration-300 group-hover:scale-110">
                {isGroupExpanded('modules') ? 
                  <ChevronDown className="h-3 w-3 text-muted-foreground" /> : 
                  <ChevronRight className="h-3 w-3 text-muted-foreground" />
                }
              </div>
            </div>
          )}
          
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {moduleItems.map((item, index) => {
                const isModuleActive = isActive(item.url)
                return (
                  <div key={item.title} className="animate-slide-up" style={{ animationDelay: `${index * 50}ms` }}>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild tooltip={isCollapsed ? item.title : undefined}>
                        <NavLink 
                          to={item.url} 
                          className={cn(
                            "relative group rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-300 hover:scale-[1.02]",
                            isModuleActive 
                              ? `bg-gradient-to-r ${item.gradient} text-primary border border-primary/20 shadow-lg shadow-primary/5` 
                              : "hover:bg-accent/50 hover:text-accent-foreground"
                          )}
                        >
                          <div className="flex items-center gap-3">
                            <div className={cn(
                              "p-1.5 rounded-lg transition-all duration-300",
                              isModuleActive 
                                ? "bg-primary/10 text-primary" 
                                : "group-hover:bg-accent/50"
                            )}>
                              <item.icon className="h-4 w-4" />
                            </div>
                            {!isCollapsed && <span>{item.title}</span>}
                          </div>
                          {isModuleActive && (
                            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/0 rounded-xl pointer-events-none" />
                          )}
                        </NavLink>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    
                    {/* Sub-items - only show when expanded and module is active */}
                    {!isCollapsed && isModuleActive && item.children && (isGroupExpanded('modules') || isCollapsed) && (
                      <div className="ml-6 mt-2 space-y-1 animate-fade-in">
                        {item.children.map((child, childIndex) => (
                          <SidebarMenuItem key={child.title}>
                            <SidebarMenuButton asChild size="sm">
                              <NavLink 
                                to={child.url}
                                className={cn(
                                  "text-sm text-muted-foreground hover:text-foreground transition-all duration-300 rounded-lg px-3 py-2 hover:bg-accent/30 hover:scale-[1.01]",
                                  isActive(child.url) && "text-primary font-medium bg-primary/5"
                                )}
                                style={{ animationDelay: `${childIndex * 30}ms` }}
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
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
