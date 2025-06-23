
import { ReactNode } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

interface ModuleCardProps {
  title: string
  description: string
  icon: ReactNode
  gradient: string
  children?: ReactNode
  className?: string
  onClick?: () => void
}

export function ModuleCard({
  title,
  description,
  icon,
  gradient,
  children,
  className,
  onClick
}: ModuleCardProps) {
  return (
    <Card 
      className={cn(
        "premium-card cursor-pointer group relative overflow-hidden transition-all duration-500 hover:scale-[1.02]",
        className
      )}
      onClick={onClick}
    >
      {/* Gradient overlay on hover */}
      <div className={cn(
        "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500",
        gradient.replace('bg-gradient-to-br', 'bg-gradient-to-br')
      )} />
      
      <CardHeader className="pb-4 relative z-10">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className={cn(
              "p-3 rounded-xl transition-all duration-300 group-hover:scale-110",
              gradient
            )}>
              <div className="text-white">
                {icon}
              </div>
            </div>
            <div className="space-y-1">
              <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                {title}
              </CardTitle>
              <CardDescription className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors">
                {description}
              </CardDescription>
            </div>
          </div>
          <ArrowRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
        </div>
      </CardHeader>
      
      {children && (
        <CardContent className="relative z-10">
          {children}
        </CardContent>
      )}
      
      {/* Subtle shine effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 group-hover:animate-pulse" />
      </div>
    </Card>
  )
}
