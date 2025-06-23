
import { cn } from "@/lib/utils"

interface StatusBadgeProps {
  status: string
  variant?: 'discovery' | 'validation' | 'development' | 'launch' | 'management' | 'default'
  className?: string
}

const variantStyles = {
  discovery: "bg-discovery-100 text-discovery-700 border-discovery-200",
  validation: "bg-validation-100 text-validation-700 border-validation-200",
  development: "bg-development-100 text-development-700 border-development-200",
  launch: "bg-launch-100 text-launch-700 border-launch-200",
  management: "bg-management-100 text-management-700 border-management-200",
  default: "bg-gray-100 text-gray-700 border-gray-200"
}

export function StatusBadge({ status, variant = 'default', className }: StatusBadgeProps) {
  return (
    <span className={cn(
      "status-badge border",
      variantStyles[variant],
      className
    )}>
      {status}
    </span>
  )
}
