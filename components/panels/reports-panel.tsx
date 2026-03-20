"use client"

import { useState } from "react"
import {
  FileBarChart,
  TrendingUp,
  Download,
  Calendar,
  Filter,
  RefreshCcw,
  Eye,
  Share2,
  MoreVertical,
  Clock,
  CheckCircle2,
  AlertCircle,
  FileText,
  PieChart,
  BarChart3,
  LineChart,
  Table,
  Plus,
} from "lucide-react"
import { DashboardCard } from "@/components/dashboard-card"
import { cn } from "@/lib/utils"

interface Report {
  id: string
  name: string
  type: "financial" | "operational" | "hr" | "sales"
  lastRun: string
  status: "completed" | "running" | "scheduled" | "failed"
  schedule: string
  icon: React.ReactNode
}

const mockReports: Report[] = [
  { id: "1", name: "Aylık Finansal Özet", type: "financial", lastRun: "Bugün 09:00", status: "completed", schedule: "Her ayın 1'i", icon: <PieChart className="size-5" /> },
  { id: "2", name: "Satış Performans Raporu", type: "sales", lastRun: "Çalışıyor...", status: "running", schedule: "Her Pazartesi", icon: <TrendingUp className="size-5" /> },
  { id: "3", name: "Personel Devam Raporu", type: "hr", lastRun: "Dün 18:00", status: "completed", schedule: "Her gün", icon: <Table className="size-5" /> },
  { id: "4", name: "Müşteri Analiz Raporu", type: "operational", lastRun: "3 gün önce", status: "completed", schedule: "Haftalık", icon: <BarChart3 className="size-5" /> },
  { id: "5", name: "Nakit Akış Projeksiyonu", type: "financial", lastRun: "Planlandı", status: "scheduled", schedule: "15 Mart", icon: <LineChart className="size-5" /> },
  { id: "6", name: "Stok Durum Raporu", type: "operational", lastRun: "Hata!", status: "failed", schedule: "Her gün", icon: <FileText className="size-5" /> },
]

const statusConfig = {
  completed: { label: "Tamamlandı", color: "text-primary bg-primary/10", icon: <CheckCircle2 className="size-4" /> },
  running: { label: "Çalışıyor", color: "text-chart-2 bg-chart-2/10", icon: <RefreshCcw className="size-4 animate-spin" /> },
  scheduled: { label: "Planlandı", color: "text-chart-3 bg-chart-3/10", icon: <Clock className="size-4" /> },
  failed: { label: "Hata", color: "text-chart-5 bg-chart-5/10", icon: <AlertCircle className="size-4" /> },
}

const typeConfig = {
  financial: { label: "Finansal", color: "bg-primary" },
  operational: { label: "Operasyonel", color: "bg-chart-2" },
  hr: { label: "İK", color: "bg-chart-3" },
  sales: { label: "Satış", color: "bg-chart-4" },
}

export function ReportsPanel() {
  const [filterType, setFilterType] = useState<string>("all")
  const [selectedReport, setSelectedReport] = useState<string | null>(null)

  const filteredReports = mockReports.filter((r) => 
    filterType === "all" || r.type === filterType
  )

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Sidebar */}
      <div className="lg:col-span-1 space-y-6">
        {/* Quick stats */}
        <DashboardCard title="Rapor Özeti" icon={<FileBarChart className="size-5" />} glowColor="primary">
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-lg bg-secondary/50 text-center">
              <p className="text-2xl font-bold text-foreground">24</p>
              <p className="text-xs text-muted-foreground">Aktif Rapor</p>
            </div>
            <div className="p-3 rounded-lg bg-secondary/50 text-center">
              <p className="text-2xl font-bold text-primary">18</p>
              <p className="text-xs text-muted-foreground">Tamamlandı</p>
            </div>
            <div className="p-3 rounded-lg bg-secondary/50 text-center">
              <p className="text-2xl font-bold text-chart-3">4</p>
              <p className="text-xs text-muted-foreground">Planlanmış</p>
            </div>
            <div className="p-3 rounded-lg bg-secondary/50 text-center">
              <p className="text-2xl font-bold text-chart-5">2</p>
              <p className="text-xs text-muted-foreground">Hatalı</p>
            </div>
          </div>
        </DashboardCard>

        {/* Report types filter */}
        <DashboardCard title="Rapor Türleri" icon={<Filter className="size-5" />} glowColor="cyan">
          <div className="space-y-2">
            <button
              onClick={() => setFilterType("all")}
              className={cn(
                "w-full flex items-center justify-between p-3 rounded-lg transition-all",
                filterType === "all"
                  ? "bg-primary/10 border border-primary/50 text-primary"
                  : "hover:bg-secondary/50 text-foreground"
              )}
            >
              <span className="text-sm font-medium">Tümü</span>
              <span className="text-xs text-muted-foreground">{mockReports.length}</span>
            </button>
            {Object.entries(typeConfig).map(([key, config]) => {
              const count = mockReports.filter((r) => r.type === key).length
              return (
                <button
                  key={key}
                  onClick={() => setFilterType(key)}
                  className={cn(
                    "w-full flex items-center justify-between p-3 rounded-lg transition-all",
                    filterType === key
                      ? "bg-primary/10 border border-primary/50 text-primary"
                      : "hover:bg-secondary/50 text-foreground"
                  )}
                >
                  <div className="flex items-center gap-2">
                    <div className={cn("size-2 rounded-full", config.color)} />
                    <span className="text-sm font-medium">{config.label}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{count}</span>
                </button>
              )
            })}
          </div>
        </DashboardCard>

        {/* Schedule */}
        <DashboardCard title="Yaklaşan Raporlar" icon={<Calendar className="size-5" />} glowColor="amber">
          <div className="space-y-3">
            {mockReports.filter(r => r.status === "scheduled").map((report) => (
              <div key={report.id} className="flex items-center gap-3 p-2 rounded-lg bg-secondary/30">
                <div className="p-2 rounded-lg bg-chart-3/10 text-chart-3">
                  {report.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{report.name}</p>
                  <p className="text-xs text-muted-foreground">{report.schedule}</p>
                </div>
              </div>
            ))}
            {mockReports.filter(r => r.status === "scheduled").length === 0 && (
              <p className="text-sm text-muted-foreground text-center py-4">Planlanmış rapor yok</p>
            )}
          </div>
        </DashboardCard>
      </div>

      {/* Main content */}
      <div className="lg:col-span-3">
        <DashboardCard
          title="Rapor Listesi"
          description="Tüm raporlarınızı yönetin ve takip edin"
          icon={<FileBarChart className="size-5" />}
          glowColor="primary"
          size="lg"
        >
          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/50 border border-border/50 text-sm text-muted-foreground hover:text-foreground transition-all">
                <RefreshCcw className="size-4" />
                Yenile
              </button>
              <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/50 border border-border/50 text-sm text-muted-foreground hover:text-foreground transition-all">
                <Download className="size-4" />
                Toplu İndir
              </button>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium shadow-[0_0_20px_rgba(74,222,128,0.3)] hover:shadow-[0_0_30px_rgba(74,222,128,0.4)] transition-all">
              <Plus className="size-4" />
              Yeni Rapor
            </button>
          </div>

          {/* Reports list */}
          <div className="space-y-3">
            {filteredReports.map((report) => (
              <div
                key={report.id}
                onClick={() => setSelectedReport(selectedReport === report.id ? null : report.id)}
                className={cn(
                  "p-4 rounded-xl border transition-all cursor-pointer",
                  selectedReport === report.id
                    ? "border-primary/50 bg-primary/5 shadow-[0_0_20px_rgba(74,222,128,0.15)]"
                    : "border-border/50 hover:border-primary/30 hover:bg-secondary/30"
                )}
              >
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "size-12 rounded-xl flex items-center justify-center flex-shrink-0",
                    `${typeConfig[report.type].color}/10`
                  )}>
                    <div className={cn("text-foreground", `text-${typeConfig[report.type].color.replace("bg-", "")}`)}> 
                      {report.icon}
                    </div>
                  </div>

                  <div className="flex-1 min-w-0 grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4 items-center">
                    <div className="sm:col-span-2">
                      <h4 className="font-semibold text-foreground">{report.name}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={cn("size-2 rounded-full", typeConfig[report.type].color)} />
                        <span className="text-sm text-muted-foreground">{typeConfig[report.type].label}</span>
                      </div>
                    </div>

                    <div className="hidden sm:block">
                      <p className="text-sm text-muted-foreground">Son Çalışma</p>
                      <p className="text-sm font-medium text-foreground">{report.lastRun}</p>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-2">
                      <span className={cn(
                        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium",
                        statusConfig[report.status].color
                      )}>
                        {statusConfig[report.status].icon}
                        {statusConfig[report.status].label}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <button className="p-2 rounded-lg hover:bg-secondary transition-all text-muted-foreground hover:text-foreground">
                      <Eye className="size-4" />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-secondary transition-all text-muted-foreground hover:text-foreground">
                      <Download className="size-4" />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-secondary transition-all text-muted-foreground hover:text-foreground">
                      <Share2 className="size-4" />
                    </button>
                  </div>
                </div>

                {/* Expanded details */}
                {selectedReport === report.id && (
                  <div className="mt-4 pt-4 border-t border-border/50 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-xs text-muted-foreground">Planlama</p>
                      <p className="text-sm font-medium text-foreground">{report.schedule}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Oluşturan</p>
                      <p className="text-sm font-medium text-foreground">Admin</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Format</p>
                      <p className="text-sm font-medium text-foreground">PDF, Excel</p>
                    </div>
                    <div className="flex items-end gap-2">
                      <button className="flex-1 py-2 px-3 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all">
                        Şimdi Çalıştır
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </DashboardCard>
      </div>
    </div>
  )
}
