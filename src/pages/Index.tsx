
import { StatsCard } from "@/components/dashboard/StatsCard"
import { ModuleOverview } from "@/components/dashboard/ModuleOverview"
import { RecentActivity } from "@/components/dashboard/RecentActivity"
import { Search, Book, Code, Calendar, List, TrendingUp, Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const Index = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5 p-12 animate-scale-in">
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-xl bg-gradient-to-br from-primary via-purple-600 to-pink-600">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-xs font-medium text-primary">Premium Edition</span>
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Welcome to{" "}
            <span className="gradient-text">ProductOS</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-8 leading-relaxed">
            Your complete digital product management platform. From discovery to growth, 
            manage every aspect of your product lifecycle in one unified workspace with 
            enterprise-grade tools and premium insights.
          </p>
          <div className="flex gap-4">
            <Button className="premium-button h-12 px-8 text-base">
              Get Started
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
            <Button variant="outline" className="h-12 px-8 text-base border-border/40 hover:bg-accent/50">
              Watch Demo
            </Button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-30">
          <div className="mesh-gradient w-full h-full rounded-l-full"></div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="animate-slide-up" style={{ animationDelay: '100ms' }}>
          <StatsCard
            title="Active Products"
            value="12"
            change={{ value: "+2 this month", trend: "up" }}
            icon={<Search className="h-5 w-5" />}
          />
        </div>
        <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
          <StatsCard
            title="Running Experiments"
            value="8"
            change={{ value: "3 completed", trend: "neutral" }}
            icon={<Book className="h-5 w-5" />}
          />
        </div>
        <div className="animate-slide-up" style={{ animationDelay: '300ms' }}>
          <StatsCard
            title="Features in Development"
            value="24"
            change={{ value: "+15% velocity", trend: "up" }}
            icon={<Code className="h-5 w-5" />}
          />
        </div>
        <div className="animate-slide-up" style={{ animationDelay: '400ms' }}>
          <StatsCard
            title="Upcoming Releases"
            value="3"
            change={{ value: "On schedule", trend: "up" }}
            icon={<Calendar className="h-5 w-5" />}
          />
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 animate-slide-up" style={{ animationDelay: '500ms' }}>
          <ModuleOverview />
        </div>
        
        <div className="space-y-8">
          <div className="animate-slide-up" style={{ animationDelay: '600ms' }}>
            <RecentActivity />
          </div>
          
          {/* Quick Actions */}
          <div className="premium-card p-8 animate-slide-up" style={{ animationDelay: '700ms' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gradient-to-br from-primary/10 to-purple-600/10">
                <Sparkles className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Quick Actions</h3>
            </div>
            <div className="space-y-3">
              {[
                { icon: Search, label: "Create Research Insight", color: "text-discovery-600", bg: "bg-discovery-50" },
                { icon: Book, label: "Start New Experiment", color: "text-validation-600", bg: "bg-validation-50" },
                { icon: Code, label: "Add Feature", color: "text-development-600", bg: "bg-development-50" },
                { icon: TrendingUp, label: "View Analytics", color: "text-management-600", bg: "bg-management-50" }
              ].map((action, index) => (
                <button 
                  key={action.label}
                  className="w-full text-left p-4 rounded-xl hover:bg-accent/30 transition-all duration-300 flex items-center gap-4 group hover:scale-[1.02]"
                  style={{ animationDelay: `${800 + index * 50}ms` }}
                >
                  <div className={`p-2 rounded-lg ${action.bg} group-hover:scale-110 transition-transform duration-300`}>
                    <action.icon className={`h-4 w-4 ${action.color}`} />
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
