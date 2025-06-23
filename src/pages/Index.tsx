
import { StatsCard } from "@/components/dashboard/StatsCard"
import { ModuleOverview } from "@/components/dashboard/ModuleOverview"
import { RecentActivity } from "@/components/dashboard/RecentActivity"
import { Search, Book, Code, Calendar, List, TrendingUp } from "lucide-react"

const Index = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 p-8">
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to <span className="gradient-text">ProductOS</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Your complete digital product management platform. From discovery to growth, 
            manage every aspect of your product lifecycle in one unified workspace.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-20">
          <div className="mesh-gradient w-full h-full rounded-l-full"></div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Active Products"
          value="12"
          change={{ value: "+2 this month", trend: "up" }}
          icon={<Search className="h-4 w-4" />}
        />
        <StatsCard
          title="Running Experiments"
          value="8"
          change={{ value: "3 completed", trend: "neutral" }}
          icon={<Book className="h-4 w-4" />}
        />
        <StatsCard
          title="Features in Development"
          value="24"
          change={{ value: "+15% velocity", trend: "up" }}
          icon={<Code className="h-4 w-4" />}
        />
        <StatsCard
          title="Upcoming Releases"
          value="3"
          change={{ value: "On schedule", trend: "up" }}
          icon={<Calendar className="h-4 w-4" />}
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ModuleOverview />
        </div>
        
        <div className="space-y-6">
          <RecentActivity />
          
          {/* Quick Actions */}
          <div className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-xl p-6">
            <h3 className="font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full text-left p-3 rounded-lg hover:bg-background/80 transition-colors flex items-center gap-3">
                <Search className="h-4 w-4 text-discovery-600" />
                <span className="text-sm">Create Research Insight</span>
              </button>
              <button className="w-full text-left p-3 rounded-lg hover:bg-background/80 transition-colors flex items-center gap-3">
                <Book className="h-4 w-4 text-validation-600" />
                <span className="text-sm">Start New Experiment</span>
              </button>
              <button className="w-full text-left p-3 rounded-lg hover:bg-background/80 transition-colors flex items-center gap-3">
                <Code className="h-4 w-4 text-development-600" />
                <span className="text-sm">Add Feature</span>
              </button>
              <button className="w-full text-left p-3 rounded-lg hover:bg-background/80 transition-colors flex items-center gap-3">
                <TrendingUp className="h-4 w-4 text-management-600" />
                <span className="text-sm">View Analytics</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
