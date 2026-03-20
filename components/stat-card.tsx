"use client"

import { cn } from "@/lib/utils"

interface StatCardProps {
  title: string
  value: string | number
  subtitle?: string
  icon: React.ReactNode
  trend?: {
    value: number
    isPositive: boolean
  }
  variant?: "default" | "primary" | "success" | "warning" | "danger"
}

export function StatCard({ title, value, subtitle, icon, trend, variant = "default" }: StatCardProps) {
  const variantStyles = {
    default: "bg-card border-border",
    primary: "bg-primary/5 border-primary/20",
    success: "bg-chart-3/5 border-chart-3/20",
    warning: "bg-chart-4/5 border-chart-4/20",
    danger: "bg-destructive/5 border-destructive/20",
  }

  const iconStyles = {
    default: "bg-secondary text-muted-foreground",
    primary: "bg-primary/10 text-primary",
    success: "bg-chart-3/10 text-chart-3",
    warning: "bg-chart-4/10 text-chart-4",
    danger: "bg-destructive/10 text-destructive",
  }

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl border p-5 transition-all duration-300",
        "shadow-sm hover:shadow-lg dark:shadow-black/20 dark:hover:shadow-black/30",
        "hover:-translate-y-0.5",
        variantStyles[variant]
      )}
    >
      {/* Glow effect on hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
      </div>

      <div className="relative flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="mt-2 text-2xl font-bold tracking-tight text-foreground">{value}</p>
          {subtitle && <p className="mt-1 text-xs text-muted-foreground">{subtitle}</p>}
          {trend && (
            <div className="mt-2 flex items-center gap-1">
              <span
                className={cn(
                  "text-xs font-medium",
                  trend.isPositive ? "text-chart-3" : "text-destructive"
                )}
              >
                {trend.isPositive ? "+" : ""}{trend.value}%
              </span>
              <span className="text-xs text-muted-foreground">gecen aya gore</span>
            </div>
          )}
        </div>
        <div className={cn("flex size-12 items-center justify-center rounded-xl", iconStyles[variant])}>
          {icon}
        </div>
      </div>
    </div>
  )
}
