
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { StatsCard } from "@/components/dashboard/StatsCard"
import { Code, Plus, Calendar, Folder, GitBranch, Target } from "lucide-react"
import { useNavigate } from "react-router-dom"

const DevelopmentPage = () => {
  const navigate = useNavigate()

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-development-700">Development Hub</h1>
          <p className="text-muted-foreground mt-2">
            Product roadmap, features, and development workflow
          </p>
        </div>
        <Button className="bg-development-600 hover:bg-development-700">
          <Plus className="h-4 w-4 mr-2" />
          New Feature
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <StatsCard
          title="Active Features"
          value="24"
          change={{ value: "+8 this sprint", trend: "up" }}
          icon={<Code className="h-4 w-4" />}
        />
        <StatsCard
          title="Sprint Velocity"
          value="42 SP"
          change={{ value: "+15% vs last sprint", trend: "up" }}
          icon={<Target className="h-4 w-4" />}
        />
        <StatsCard
          title="Code Coverage"
          value="87%"
          change={{ value: "+3% improvement", trend: "up" }}
          icon={<GitBranch className="h-4 w-4" />}
        />
        <StatsCard
          title="Tech Debt"
          value="12"
          change={{ value: "-3 items resolved", trend: "up" }}
          icon={<Folder className="h-4 w-4" />}
        />
      </div>

      {/* Main Content */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Product Roadmap */}
        <Card className="card-hover cursor-pointer" onClick={() => navigate('/development/roadmap')}>
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-development-100">
                <Calendar className="h-5 w-5 text-development-600" />
              </div>
              <div>
                <CardTitle className="text-lg">Product Roadmap</CardTitle>
                <CardDescription>Strategic feature planning</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-3">
                {[
                  { quarter: "Q1 2024", features: 8, progress: 75 },
                  { quarter: "Q2 2024", features: 12, progress: 45 },
                  { quarter: "Q3 2024", features: 6, progress: 10 }
                ].map((quarter, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{quarter.quarter}</span>
                      <Badge variant="secondary" className="text-xs">
                        {quarter.features} features
                      </Badge>
                    </div>
                    <Progress value={quarter.progress} className="h-2" />
                    <div className="text-xs text-muted-foreground">
                      {quarter.progress}% complete
                    </div>
                  </div>
                ))}
              </div>
              
              <Button variant="outline" size="sm" className="w-full">
                View Full Roadmap
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Feature Management */}
        <Card className="card-hover cursor-pointer" onClick={() => navigate('/development/features')}>
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-development-100">
                <Code className="h-5 w-5 text-development-600" />
              </div>
              <div>
                <CardTitle className="text-lg">Feature Management</CardTitle>
                <CardDescription>Active development items</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-lg font-bold text-blue-600">6</div>
                  <div className="text-xs text-muted-foreground">In Progress</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-yellow-600">4</div>
                  <div className="text-xs text-muted-foreground">In Review</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">Current Sprint</div>
                <div className="space-y-2">
                  {[
                    { name: "Mobile Payment Integration", priority: "High", progress: 80 },
                    { name: "Advanced Search Filters", priority: "Medium", progress: 45 },
                    { name: "User Profile Enhancement", priority: "Low", progress: 25 }
                  ].map((feature, index) => (
                    <div key={index} className="p-2 bg-muted/50 rounded space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium">{feature.name}</span>
                        <Badge 
                          variant={
                            feature.priority === "High" ? "destructive" : 
                            feature.priority === "Medium" ? "default" : "secondary"
                          }
                          className="text-xs"
                        >
                          {feature.priority}
                        </Badge>
                      </div>
                      <Progress value={feature.progress} className="h-1" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Releases */}
        <Card className="card-hover cursor-pointer" onClick={() => navigate('/development/releases')}>
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-development-100">
                <GitBranch className="h-5 w-5 text-development-600" />
              </div>
              <div>
                <CardTitle className="text-lg">Release Management</CardTitle>
                <CardDescription>Version control & deployment</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-3">
                {[
                  { 
                    version: "v2.1.0", 
                    status: "Ready", 
                    date: "Mar 15", 
                    features: 8,
                    statusColor: "bg-green-500"
                  },
                  { 
                    version: "v2.0.5", 
                    status: "Testing", 
                    date: "Mar 8", 
                    features: 3,
                    statusColor: "bg-yellow-500"
                  },
                  { 
                    version: "v2.2.0", 
                    status: "Planning", 
                    date: "Apr 1", 
                    features: 12,
                    statusColor: "bg-blue-500"
                  }
                ].map((release, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${release.statusColor}`}></div>
                      <div>
                        <div className="font-medium text-sm">{release.version}</div>
                        <div className="text-xs text-muted-foreground">
                          {release.features} features • {release.date}
                        </div>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {release.status}
                    </Badge>
                  </div>
                ))}
              </div>
              
              <Button variant="outline" size="sm" className="w-full">
                View All Releases
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Development Workflow & Quality Metrics */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-development-100">
                <Target className="h-5 w-5 text-development-600" />
              </div>
              <div>
                <CardTitle>Development Workflow</CardTitle>
                <CardDescription>Team performance and metrics</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">42</div>
                  <div className="text-sm text-muted-foreground">Story Points</div>
                  <div className="text-xs text-green-600">+15% vs last sprint</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">2.3d</div>
                  <div className="text-sm text-muted-foreground">Avg Cycle Time</div>
                  <div className="text-xs text-green-600">-0.5d improvement</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">Sprint Progress</div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>Sprint 24 Progress</span>
                    <span>78% (Day 8/10)</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div>
                  <div className="font-bold">18</div>
                  <div className="text-muted-foreground">Todo</div>
                </div>
                <div>
                  <div className="font-bold">12</div>
                  <div className="text-muted-foreground">In Progress</div>
                </div>
                <div>
                  <div className="font-bold">24</div>
                  <div className="text-muted-foreground">Done</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-development-100">
                <Folder className="h-5 w-5 text-development-600" />
              </div>
              <div>
                <CardTitle>Quality Metrics</CardTitle>
                <CardDescription>Code quality and technical health</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Code Coverage</div>
                  <div className="flex items-center gap-2">
                    <Progress value={87} className="h-2 flex-1" />
                    <span className="text-sm font-medium">87%</span>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Performance Score</div>
                  <div className="flex items-center gap-2">
                    <Progress value={92} className="h-2 flex-1" />
                    <span className="text-sm font-medium">92</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">Technical Debt</div>
                <div className="space-y-2">
                  {[
                    { type: "Critical", count: 2, color: "bg-red-500" },
                    { type: "High", count: 5, color: "bg-orange-500" },
                    { type: "Medium", count: 8, color: "bg-yellow-500" }
                  ].map((debt, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-muted/50 rounded">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${debt.color}`}></div>
                        <span className="text-sm">{debt.type}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {debt.count} items
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default DevelopmentPage
