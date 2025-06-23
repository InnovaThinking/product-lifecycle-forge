
import { ModuleCard } from "@/components/ui/module-card"
import { Search, Book, Code, Calendar, List } from "lucide-react"
import { useNavigate } from "react-router-dom"

const modules = [
  {
    title: "Descoberta",
    description: "Research, personas,e oportunidades de mercado",
    icon: <Search className="h-6 w-6" />,
    gradient: "bg-gradient-to-br from-discovery-600 to-blue-600",
    url: "/discovery",
    stats: { active: 5, completed: 12 }
  },
  {
    title: "Validação",
    description: "Hipóteses, experimentos e testes A/B",
    icon: <Book className="h-6 w-6" />,
    gradient: "bg-gradient-to-br from-validation-600 to-purple-600",
    url: "/validation",
    stats: { active: 3, completed: 8 }
  },
  {
    title: "Desenvolvimento",
    description: "Roadmap, features e releases",
    icon: <Code className="h-6 w-6" />,
    gradient: "bg-gradient-to-br from-development-600 to-emerald-600",
    url: "/development",
    stats: { active: 12, completed: 24 }
  },
  {
    title: "Lançamento",
    description: "Go-to-market e execução de launches",
    icon: <Calendar className="h-6 w-6" />,
    gradient: "bg-gradient-to-br from-launch-600 to-orange-600",
    url: "/launch",
    stats: { active: 2, completed: 6 }
  },
  {
    title: "Gestão",
    description: "Analytics, UX e gestão de portfólio",
    icon: <List className="h-6 w-6" />,
    gradient: "bg-gradient-to-br from-management-600 to-cyan-600",
    url: "/management",
    stats: { active: 8, completed: 15 }
  }
]

export function ModuleOverview() {
  const navigate = useNavigate()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Product Modules</h2>
          <p className="text-muted-foreground">Manage your product lifecycle across all phases</p>
        </div>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {modules.map((module, index) => (
          <div
            key={module.title}
            className="animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <ModuleCard
              title={module.title}
              description={module.description}
              icon={module.icon}
              gradient={module.gradient}
              onClick={() => navigate(module.url)}
            >
              <div className="flex items-center justify-between pt-4 border-t border-border/40">
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">{module.stats.active}</div>
                  <div className="text-xs text-muted-foreground">Active</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-muted-foreground">{module.stats.completed}</div>
                  <div className="text-xs text-muted-foreground">Completed</div>
                </div>
              </div>
            </ModuleCard>
          </div>
        ))}
      </div>
    </div>
  )
}
