
import { ModuleCard } from "@/components/ui/module-card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Search, Book, Code, Calendar, List } from "lucide-react"
import { useNavigate } from "react-router-dom"

const modules = [
  {
    id: "discovery",
    title: "Descoberta",
    description: "Research, personas e oportunidades",
    icon: <Search className="h-5 w-5" />,
    gradient: "bg-gradient-to-br from-discovery-500 to-discovery-600",
    progress: 75,
    activeItems: 12,
    route: "/discovery"
  },
  {
    id: "validation",
    title: "Validação",
    description: "Hipóteses e experimentos",
    icon: <Book className="h-5 w-5" />,
    gradient: "bg-gradient-to-br from-validation-500 to-validation-600",
    progress: 60,
    activeItems: 8,
    route: "/validation"
  },
  {
    id: "development",
    title: "Desenvolvimento",
    description: "Features e roadmap",
    icon: <Code className="h-5 w-5" />,
    gradient: "bg-gradient-to-br from-development-500 to-development-600",
    progress: 85,
    activeItems: 24,
    route: "/development"
  },
  {
    id: "launch",
    title: "Lançamento",
    description: "Go-to-market e execução",
    icon: <Calendar className="h-5 w-5" />,
    gradient: "bg-gradient-to-br from-launch-500 to-launch-600",
    progress: 40,
    activeItems: 5,
    route: "/launch"
  },
  {
    id: "management",
    title: "Gestão",
    description: "Analytics e performance",
    icon: <List className="h-5 w-5" />,
    gradient: "bg-gradient-to-br from-management-500 to-management-600",
    progress: 90,
    activeItems: 18,
    route: "/management"
  }
]

export function ModuleOverview() {
  const navigate = useNavigate()

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Module Overview</h2>
        <p className="text-muted-foreground">
          Monitor progress across all product lifecycle modules
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {modules.map((module) => (
          <ModuleCard
            key={module.id}
            title={module.title}
            description={module.description}
            icon={module.icon}
            gradient={module.gradient}
            onClick={() => navigate(module.route)}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-medium">{module.progress}%</span>
              </div>
              <Progress value={module.progress} className="h-2" />
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Active Items</span>
                <Badge variant="secondary" className="text-xs">
                  {module.activeItems}
                </Badge>
              </div>
            </div>
          </ModuleCard>
        ))}
      </div>
    </div>
  )
}
