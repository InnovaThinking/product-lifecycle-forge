
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { StatsCard } from "@/components/dashboard/StatsCard"
import { Book, Plus, TestTube, BarChart3, TrendingUp, Clock } from "lucide-react"
import { useNavigate } from "react-router-dom"

const ValidationPage = () => {
  const navigate = useNavigate()

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-validation-700">Validation Hub</h1>
          <p className="text-muted-foreground mt-2">
            Hypothesis testing and experiment management
          </p>
        </div>
        <Button className="bg-validation-600 hover:bg-validation-700">
          <Plus className="h-4 w-4 mr-2" />
          New Hypothesis
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <StatsCard
          title="Active Hypotheses"
          value="12"
          change={{ value: "+3 this week", trend: "up" }}
          icon={<Book className="h-4 w-4" />}
        />
        <StatsCard
          title="Running Experiments"
          value="5"
          change={{ value: "2 completing soon", trend: "neutral" }}
          icon={<TestTube className="h-4 w-4" />}
        />
        <StatsCard
          title="Validation Rate"
          value="67%"
          change={{ value: "+12% vs last month", trend: "up" }}
          icon={<BarChart3 className="h-4 w-4" />}
        />
        <StatsCard
          title="Avg. Test Duration"
          value="14d"
          change={{ value: "-2 days improvement", trend: "up" }}
          icon={<Clock className="h-4 w-4" />}
        />
      </div>

      {/* Main Content */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Hypothesis Management */}
        <Card className="card-hover cursor-pointer" onClick={() => navigate('/validation/hypotheses')}>
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-validation-100">
                <Book className="h-5 w-5 text-validation-600" />
              </div>
              <div>
                <CardTitle className="text-lg">Hypothesis Management</CardTitle>
                <CardDescription>Track and manage hypotheses</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <div className="text-lg font-bold text-blue-600">8</div>
                  <div className="text-xs text-muted-foreground">Draft</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-orange-600">5</div>
                  <div className="text-xs text-muted-foreground">Testing</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-green-600">12</div>
                  <div className="text-xs text-muted-foreground">Validated</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">Recent Hypotheses</div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 bg-muted/50 rounded">
                    <span className="text-xs">Mobile checkout optimization</span>
                    <Badge variant="outline" className="text-xs">Testing</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-muted/50 rounded">
                    <span className="text-xs">Personalized recommendations</span>
                    <Badge variant="secondary" className="text-xs">Draft</Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Experiment Design */}
        <Card className="card-hover cursor-pointer" onClick={() => navigate('/validation/experiments')}>
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-validation-100">
                <TestTube className="h-5 w-5 text-validation-600" />
              </div>
              <div>
                <CardTitle className="text-lg">Active Experiments</CardTitle>
                <CardDescription>Monitor running tests</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { 
                  name: "Checkout Flow A/B Test", 
                  type: "A/B Test", 
                  progress: 78, 
                  confidence: 85,
                  daysLeft: 3
                },
                { 
                  name: "Onboarding Survey", 
                  type: "Survey", 
                  progress: 45, 
                  confidence: null,
                  daysLeft: 8
                },
                { 
                  name: "Navigation Prototype", 
                  type: "Prototype", 
                  progress: 92, 
                  confidence: 92,
                  daysLeft: 1
                }
              ].map((experiment, index) => (
                <div key={index} className="space-y-2 p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{experiment.name}</span>
                    <Badge variant="outline" className="text-xs">{experiment.type}</Badge>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Progress</span>
                      <span>{experiment.progress}% • {experiment.daysLeft}d left</span>
                    </div>
                    <Progress value={experiment.progress} className="h-1" />
                    {experiment.confidence && (
                      <div className="text-xs text-muted-foreground">
                        {experiment.confidence}% confidence
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Validation Dashboard */}
        <Card className="card-hover cursor-pointer" onClick={() => navigate('/validation/dashboard')}>
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-validation-100">
                <BarChart3 className="h-5 w-5 text-validation-600" />
              </div>
              <div>
                <CardTitle className="text-lg">Validation Dashboard</CardTitle>
                <CardDescription>Results and insights</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-green-600">67%</div>
                  <div className="text-xs text-muted-foreground">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600">23</div>
                  <div className="text-xs text-muted-foreground">Total Tests</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">Recent Results</div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-xs">95% confidence: Checkout improvement</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <span className="text-xs">Failed: Color scheme test</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <span className="text-xs">Inconclusive: Mobile layout</span>
                  </div>
                </div>
              </div>
              
              <Button variant="outline" size="sm" className="w-full">
                View All Results
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Learning Repository */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-validation-100">
                <TrendingUp className="h-5 w-5 text-validation-600" />
              </div>
              <div>
                <CardTitle>Learning Repository</CardTitle>
                <CardDescription>Key insights and lessons learned</CardDescription>
              </div>
            </div>
            <Button variant="outline" size="sm">
              View All Learnings
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Mobile Checkout Optimization",
                insight: "Reducing form fields by 40% increased conversion by 23%",
                confidence: 95,
                impact: "High",
                category: "UX"
              },
              {
                title: "Personalization Engine",
                insight: "AI-driven recommendations improved engagement by 31%",
                confidence: 87,
                impact: "High",
                category: "AI/ML"
              },
              {
                title: "Pricing Strategy",
                insight: "Freemium model increased trial-to-paid conversion by 18%",
                confidence: 92,
                impact: "Medium",
                category: "Business"
              }
            ].map((learning, index) => (
              <div key={index} className="p-4 bg-muted/50 rounded-lg space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-sm">{learning.title}</h4>
                  <Badge 
                    variant={learning.impact === "High" ? "default" : "secondary"}
                    className="text-xs"
                  >
                    {learning.impact}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">{learning.insight}</p>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">{learning.confidence}% confidence</span>
                  <Badge variant="outline" className="text-xs">{learning.category}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ValidationPage
