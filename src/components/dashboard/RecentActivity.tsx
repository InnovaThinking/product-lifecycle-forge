
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { StatusBadge } from "@/components/ui/status-badge"

const activities = [
  {
    id: 1,
    type: "experiment",
    title: "A/B Test: Checkout Flow Optimization",
    description: "Experiment completed with 95% confidence",
    user: { name: "Sarah Chen", avatar: "/placeholder.svg", initials: "SC" },
    timestamp: "2 minutes ago",
    status: "Completed",
    module: "validation"
  },
  {
    id: 2,
    type: "feature",
    title: "Mobile Payment Integration",
    description: "Feature moved to testing phase",
    user: { name: "Mike Johnson", avatar: "/placeholder.svg", initials: "MJ" },
    timestamp: "1 hour ago",
    status: "Testing",
    module: "development"
  },
  {
    id: 3,
    type: "release",
    title: "Version 2.1.0 Release",
    description: "Release candidate ready for deployment",
    user: { name: "Alex Rivera", avatar: "/placeholder.svg", initials: "AR" },
    timestamp: "3 hours ago",
    status: "Ready",
    module: "launch"
  },
  {
    id: 4,
    type: "research",
    title: "User Interview Insights",
    description: "New insights added to research hub",
    user: { name: "Emma Davis", avatar: "/placeholder.svg", initials: "ED" },
    timestamp: "5 hours ago",
    status: "Published",
    module: "discovery"
  }
]

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>
          Latest updates across all product modules
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
              <Avatar className="h-8 w-8">
                <AvatarImage src={activity.user.avatar} />
                <AvatarFallback className="text-xs">{activity.user.initials}</AvatarFallback>
              </Avatar>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-sm font-medium truncate">{activity.title}</h4>
                  <StatusBadge 
                    status={activity.status} 
                    variant={activity.module as any}
                  />
                </div>
                <p className="text-xs text-muted-foreground mb-1">
                  {activity.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{activity.user.name}</span>
                  <span>•</span>
                  <span>{activity.timestamp}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
