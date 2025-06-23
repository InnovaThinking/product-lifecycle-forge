
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ArrowUpIcon, ArrowDownIcon, MinusIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface StatsCardProps {
  title: string
  value: string
  change: {
    value: string
    trend: "up" | "down" | "neutral"
  }
  icon: React.ReactNode
}

export function StatsCard({ title, value, change, icon }: StatsCardProps) {
  const getTrendIcon = () => {
    switch (change.trend) {
      case "up":
        return <ArrowUpIcon className="h-3 w-3 text-emerald-600" />
      case "down":
        return <ArrowDownIcon className="h-3 w-3 text-red-600" />
      default:
        return <MinusIcon className="h-3 w-3 text-yellow-600" />
    }
  }

  const getTrendColor = () => {
    switch (change.trend) {
      case "up":
        return "text-emerald-600 bg-emerald-50"
      case "down":
        return "text-red-600 bg-red-50"
      default:
        return "text-yellow-600 bg-yellow-50"
    }
  }

  return (
    <Card className="premium-card group">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
        <p className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
          {title}
        </p>
        <div className="p-2 rounded-lg bg-primary/5 text-primary group-hover:bg-primary/10 transition-all duration-300 group-hover:scale-110">
          {icon}
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
          {value}
        </div>
        <div className="flex items-center gap-2">
          <div className={cn(
            "flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium transition-all duration-300",
            getTrendColor()
          )}>
            {getTrendIcon()}
            <span>{change.value}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
