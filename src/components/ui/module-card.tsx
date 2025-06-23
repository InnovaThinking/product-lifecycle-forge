
import { ReactNode } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

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
        "module-card cursor-pointer group",
        className
      )}
      onClick={onClick}
    >
      <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity", gradient)} />
      
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <div className={cn(
            "p-2 rounded-lg",
            gradient.replace('bg-gradient-to-br', 'bg-gradient-to-br')
          )}>
            <div className="text-white">
              {icon}
            </div>
          </div>
          <div>
            <CardTitle className="text-lg">{title}</CardTitle>
            <CardDescription className="text-sm">{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      
      {children && (
        <CardContent>
          {children}
        </CardContent>
      )}
    </Card>
  )
}
