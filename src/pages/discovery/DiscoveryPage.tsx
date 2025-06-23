
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { StatsCard } from "@/components/dashboard/StatsCard"
import { Search, Plus, Users, MapPin, Target, TrendingUp } from "lucide-react"
import { useNavigate } from "react-router-dom"

const DiscoveryPage = () => {
  const navigate = useNavigate()

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-discovery-700">Discovery Hub</h1>
          <p className="text-muted-foreground mt-2">
            Research, insights, and opportunity identification
          </p>
        </div>
        <Button className="bg-discovery-600 hover:bg-discovery-700">
          <Plus className="h-4 w-4 mr-2" />
          New Research
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <StatsCard
          title="Research Insights"
          value="47"
          change={{ value: "+12 this week", trend: "up" }}
          icon={<Search className="h-4 w-4" />}
        />
        <StatsCard
          title="Active Personas"
          value="8"
          change={{ value: "2 updated", trend: "neutral" }}
          icon={<Users className="h-4 w-4" />}
        />
        <StatsCard
          title="Journey Maps"
          value="5"
          change={{ value: "1 in progress", trend: "up" }}
          icon={<MapPin className="h-4 w-4" />}
        />
        <StatsCard
          title="Opportunities"
          value="23"
          change={{ value: "5 prioritized", trend: "up" }}
          icon={<Target className="h-4 w-4" />}
        />
      </div>

      {/* Main Content */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Research Hub */}
        <Card className="card-hover cursor-pointer" onClick={() => navigate('/discovery/research')}>
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-discovery-100">
                <Search className="h-5 w-5 text-discovery-600" />
              </div>
              <div>
                <CardTitle className="text-lg">Research Hub</CardTitle>
                <CardDescription>Centralized research insights</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>User Interviews</span>
                  <span className="font-medium">24</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Survey Responses</span>
                  <span className="font-medium">847</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Analytics Reviews</span>
                  <span className="font-medium">12</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">Recent Insights</div>
                <div className="space-y-1">
                  <div className="text-xs bg-muted p-2 rounded">
                    Mobile checkout abandonment analysis
                  </div>
                  <div className="text-xs bg-muted p-2 rounded">
                    User onboarding friction points
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Personas */}
        <Card className="card-hover cursor-pointer" onClick={() => navigate('/discovery/personas')}>
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-discovery-100">
                <Users className="h-5 w-5 text-discovery-600" />
              </div>
              <div>
                <CardTitle className="text-lg">User Personas</CardTitle>
                <CardDescription>Target user profiles</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: "Tech-Savvy Professional", confidence: 95 },
                { name: "Casual Mobile User", confidence: 87 },
                { name: "Enterprise Decision Maker", confidence: 92 }
              ].map((persona, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{persona.name}</span>
                    <Badge variant="secondary" className="text-xs">
                      {persona.confidence}% confidence
                    </Badge>
                  </div>
                  <Progress value={persona.confidence} className="h-1" />
                </div>
              ))}
              
              <Button variant="outline" size="sm" className="w-full mt-4">
                View All Personas
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Opportunity Canvas */}
        <Card className="card-hover cursor-pointer" onClick={() => navigate('/discovery/opportunities')}>
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-discovery-100">
                <Target className="h-5 w-5 text-discovery-600" />
              </div>
              <div>
                <CardTitle className="text-lg">Opportunity Canvas</CardTitle>
                <CardDescription>Product opportunities</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <div className="text-lg font-bold text-green-600">8</div>
                  <div className="text-xs text-muted-foreground">High Impact</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-yellow-600">12</div>
                  <div className="text-xs text-muted-foreground">Medium</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-red-600">3</div>
                  <div className="text-xs text-muted-foreground">Low Impact</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">Top Priorities</div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-xs">Mobile app optimization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-xs">Payment flow redesign</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <span className="text-xs">Advanced analytics</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Journey Maps & Market Intelligence */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="card-hover cursor-pointer" onClick={() => navigate('/discovery/journeys')}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-discovery-100">
                  <MapPin className="h-5 w-5 text-discovery-600" />
                </div>
                <div>
                  <CardTitle>Customer Journey Maps</CardTitle>
                  <CardDescription>User experience touchpoints</CardDescription>
                </div>
              </div>
              <Badge variant="outline">5 Active</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { journey: "E-commerce Purchase Flow", stage: "Optimization", pain: 3 },
                { journey: "Mobile App Onboarding", stage: "Analysis", pain: 5 },
                { journey: "Customer Support Experience", stage: "Mapping", pain: 2 }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <div className="font-medium text-sm">{item.journey}</div>
                    <div className="text-xs text-muted-foreground">{item.stage}</div>
                  </div>
                  <Badge variant={item.pain > 3 ? "destructive" : "secondary"} className="text-xs">
                    {item.pain} pain points
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover cursor-pointer" onClick={() => navigate('/discovery/market')}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-discovery-100">
                  <TrendingUp className="h-5 w-5 text-discovery-600" />
                </div>
                <div>
                  <CardTitle>Market Intelligence</CardTitle>
                  <CardDescription>Competitive analysis & trends</CardDescription>
                </div>
              </div>
              <Badge variant="outline">Updated 2h ago</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-lg font-bold">12</div>
                  <div className="text-xs text-muted-foreground">Competitors Tracked</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold">$2.4B</div>
                  <div className="text-xs text-muted-foreground">Market Size</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">Recent Updates</div>
                <div className="space-y-1">
                  <div className="text-xs bg-muted p-2 rounded">
                    Competitor A launched new mobile features
                  </div>
                  <div className="text-xs bg-muted p-2 rounded">
                    Industry trend: AI-powered personalization
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default DiscoveryPage
