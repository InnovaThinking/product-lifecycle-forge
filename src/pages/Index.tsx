
import { StatsCard } from "@/components/dashboard/StatsCard"
import { ModuleOverview } from "@/components/dashboard/ModuleOverview"
import { RecentActivity } from "@/components/dashboard/RecentActivity"
import { Search, Book, Code, Calendar, List, TrendingUp, Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const Index = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5 p-8 animate-scale-in">
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-xl bg-gradient-to-br from-primary via-purple-600 to-pink-600">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-xs font-medium text-primary">Premium Edition</span>
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            Bem-vindo ao{" "}
            <span className="gradient-text">ProductOS</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mb-6 leading-relaxed">
            Sua plataforma completa de gestão de produtos digitais. Da descoberta ao crescimento, 
            gerencie todos os aspectos do ciclo de vida do seu produto em um workspace unificado com 
            ferramentas de nível empresarial e insights premium.
          </p>
          <div className="flex gap-4">
            <Button className="premium-button h-10 px-6 text-sm">
              Começar
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
            <Button variant="outline" className="h-10 px-6 text-sm border-border/40 hover:bg-accent/50">
              Ver Demo
            </Button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-30">
          <div className="mesh-gradient w-full h-full rounded-l-full"></div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="animate-slide-up" style={{ animationDelay: '100ms' }}>
          <StatsCard
            title="Produtos Ativos"
            value="12"
            change={{ value: "+2 este mês", trend: "up" }}
            icon={<Search className="h-4 w-4" />}
          />
        </div>
        <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
          <StatsCard
            title="Experimentos em Execução"
            value="8"
            change={{ value: "3 concluídos", trend: "neutral" }}
            icon={<Book className="h-4 w-4" />}
          />
        </div>
        <div className="animate-slide-up" style={{ animationDelay: '300ms' }}>
          <StatsCard
            title="Funcionalidades em Desenvolvimento"
            value="24"
            change={{ value: "+15% velocidade", trend: "up" }}
            icon={<Code className="h-4 w-4" />}
          />
        </div>
        <div className="animate-slide-up" style={{ animationDelay: '400ms' }}>
          <StatsCard
            title="Próximos Lançamentos"
            value="3"
            change={{ value: "No prazo", trend: "up" }}
            icon={<Calendar className="h-4 w-4" />}
          />
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 animate-slide-up" style={{ animationDelay: '500ms' }}>
          <ModuleOverview />
        </div>
        
        <div className="space-y-6">
          <div className="animate-slide-up" style={{ animationDelay: '600ms' }}>
            <RecentActivity />
          </div>
          
          {/* Quick Actions */}
          <div className="premium-card p-6 animate-slide-up" style={{ animationDelay: '700ms' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-br from-primary/10 to-purple-600/10">
                <Sparkles className="h-4 w-4 text-primary" />
              </div>
              <h3 className="font-semibold text-base">Ações Rápidas</h3>
            </div>
            <div className="space-y-2">
              {[
                { icon: Search, label: "Criar Insight de Pesquisa", color: "text-discovery-600", bg: "bg-discovery-50" },
                { icon: Book, label: "Iniciar Novo Experimento", color: "text-validation-600", bg: "bg-validation-50" },
                { icon: Code, label: "Adicionar Funcionalidade", color: "text-development-600", bg: "bg-development-50" },
                { icon: TrendingUp, label: "Ver Analytics", color: "text-management-600", bg: "bg-management-50" }
              ].map((action, index) => (
                <button 
                  key={action.label}
                  className="w-full text-left p-3 rounded-lg hover:bg-accent/30 transition-all duration-300 flex items-center gap-3 group hover:scale-[1.02]"
                  style={{ animationDelay: `${800 + index * 50}ms` }}
                >
                  <div className={`p-1.5 rounded-lg ${action.bg} group-hover:scale-110 transition-transform duration-300`}>
                    <action.icon className={`h-3 w-3 ${action.color}`} />
                  </div>
                  <span className="text-sm font-medium group-hover:text-primary transition-colors">
                    {action.label}
                  </span>
                  <ArrowRight className="h-3 w-3 ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
