"use client"

import { cn } from "@/lib/utils"

interface DashboardCardProps {
  title: string
  description?: string
  icon?: React.ReactNode
  children: React.ReactNode
  className?: string
  glowColor?: "primary" | "cyan" | "amber" | "none"
  size?: "sm" | "md" | "lg"
}

export function DashboardCard({
  title,
  description,
  icon,
  children,
  className,
  glowColor = "none",
  size = "md",
}: DashboardCardProps) {
  const glowStyles = {
    primary: "shadow-[0_0_30px_rgba(74,222,128,0.15)] hover:shadow-[0_0_40px_rgba(74,222,128,0.25)]",
    cyan: "shadow-[0_0_30px_rgba(56,189,248,0.15)] hover:shadow-[0_0_40px_rgba(56,189,248,0.25)]",
    amber: "shadow-[0_0_30px_rgba(251,191,36,0.15)] hover:shadow-[0_0_40px_rgba(251,191,36,0.25)]",
    none: "shadow-lg hover:shadow-xl",
  }

  const borderGlow = {
    primary: "before:bg-gradient-to-r before:from-transparent before:via-primary/50 before:to-transparent",
    cyan: "before:bg-gradient-to-r before:from-transparent before:via-chart-2/50 before:to-transparent",
    amber: "before:bg-gradient-to-r before:from-transparent before:via-chart-3/50 before:to-transparent",
    none: "",
  }

  return (
    <div
      className={cn(
        "group relative bg-card rounded-xl border border-border/50 transition-all duration-500",
        glowStyles[glowColor],
        "before:absolute before:inset-x-0 before:top-0 before:h-px before:opacity-0 before:transition-opacity before:duration-500",
        "hover:before:opacity-100",
        borderGlow[glowColor],
        className
      )}
    >
      {/* 3D effect - top highlight */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      {/* Glass morphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-xl pointer-events-none" />
      
      <div className={cn(
        "relative",
        size === "sm" && "p-4",
        size === "md" && "p-5",
        size === "lg" && "p-6"
      )}>
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            {icon && (
              <div className={cn(
                "p-2 rounded-lg transition-all duration-300",
                glowColor === "primary" && "bg-primary/10 text-primary group-hover:bg-primary/20",
                glowColor === "cyan" && "bg-chart-2/10 text-chart-2 group-hover:bg-chart-2/20",
                glowColor === "amber" && "bg-chart-3/10 text-chart-3 group-hover:bg-chart-3/20",
                glowColor === "none" && "bg-secondary text-foreground"
              )}>
                {icon}
              </div>
            )}
            <div>
              <h3 className="font-semibold text-foreground text-balance">{title}</h3>
              {description && (
                <p className="text-sm text-muted-foreground mt-0.5">{description}</p>
              )}
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="relative">{children}</div>
      </div>
    </div>
  )
}

// Stat Card Component
interface StatCardProps {
  label: string
  value: string | number
  change?: string
  changeType?: "positive" | "negative" | "neutral"
  icon?: React.ReactNode
}

export function StatCard({ label, value, change, changeType = "neutral", icon }: StatCardProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        {icon && (
          <div className="p-2 rounded-lg bg-primary/10 text-primary">
            {icon}
          </div>
        )}
        <div>
          <p className="text-sm text-muted-foreground">{label}</p>
          <p className="text-2xl font-bold text-foreground">{value}</p>
        </div>
      </div>
      {change && (
        <span className={cn(
          "text-sm font-medium px-2 py-1 rounded-full",
          changeType === "positive" && "bg-primary/10 text-primary",
          changeType === "negative" && "bg-destructive/10 text-destructive",
          changeType === "neutral" && "bg-secondary text-muted-foreground"
        )}>
          {change}
        </span>
      )}
    </div>
  )
}
