"use client"

import { useState } from "react"
import {
  Brain,
  Calculator,
  Car,
  AlertTriangle,
  TrendingDown,
  FileText,
  Camera,
  Upload,
  Zap,
  CheckCircle2,
  Clock,
  BarChart3,
  Activity,
  RefreshCcw,
  ChevronRight,
  Sparkles,
} from "lucide-react"
import { DashboardCard } from "@/components/dashboard-card"
import { cn } from "@/lib/utils"

interface DamageReport {
  id: string
  vehicle: string
  plate: string
  date: string
  status: "processing" | "completed" | "pending"
  depreciation: string
  bodyDamage: string
  totalCost: string
}

const mockReports: DamageReport[] = [
  { id: "1", vehicle: "BMW 320i", plate: "34 ABC 123", date: "Bugün", status: "completed", depreciation: "₺45,000", bodyDamage: "₺28,500", totalCost: "₺73,500" },
  { id: "2", vehicle: "Mercedes C200", plate: "34 DEF 456", date: "Dün", status: "completed", depreciation: "₺62,000", bodyDamage: "₺41,200", totalCost: "₺103,200" },
  { id: "3", vehicle: "Audi A4", plate: "34 GHI 789", date: "2 gün önce", status: "processing", depreciation: "Hesaplanıyor...", bodyDamage: "Hesaplanıyor...", totalCost: "-" },
  { id: "4", vehicle: "VW Passat", plate: "34 JKL 012", date: "3 gün önce", status: "pending", depreciation: "-", bodyDamage: "-", totalCost: "-" },
]

const statusConfig = {
  processing: { label: "İşleniyor", color: "text-chart-3 bg-chart-3/10", icon: <RefreshCcw className="size-4 animate-spin" /> },
  completed: { label: "Tamamlandı", color: "text-primary bg-primary/10", icon: <CheckCircle2 className="size-4" /> },
  pending: { label: "Beklemede", color: "text-muted-foreground bg-secondary", icon: <Clock className="size-4" /> },
}

export function AIDamagePanel() {
  const [selectedDamageType, setSelectedDamageType] = useState<"depreciation" | "body">("depreciation")
  const [analyzing, setAnalyzing] = useState(false)

  const handleAnalyze = () => {
    setAnalyzing(true)
    setTimeout(() => setAnalyzing(false), 3000)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Left sidebar - Calculator */}
      <div className="lg:col-span-1 space-y-6">
        <DashboardCard title="AI Hesaplama" icon={<Brain className="size-5" />} glowColor="primary">
          <div className="space-y-4">
            {/* Damage type selector */}
            <div className="flex rounded-lg bg-secondary/50 p-1">
              <button
                onClick={() => setSelectedDamageType("depreciation")}
                className={cn(
                  "flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all",
                  selectedDamageType === "depreciation"
                    ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(74,222,128,0.3)]"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                Değer Kaybı
              </button>
              <button
                onClick={() => setSelectedDamageType("body")}
                className={cn(
                  "flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all",
                  selectedDamageType === "body"
                    ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(74,222,128,0.3)]"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                Bedeni Hasar
              </button>
            </div>

            {/* Input fields */}
            <div className="space-y-3">
              <div>
                <label className="block text-sm text-muted-foreground mb-1.5">Araç Markası</label>
                <select className="w-full h-10 px-3 rounded-lg bg-secondary/50 border border-border/50 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50">
                  <option>BMW</option>
                  <option>Mercedes</option>
                  <option>Audi</option>
                  <option>Volkswagen</option>
                  <option>Toyota</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm text-muted-foreground mb-1.5">Model Yılı</label>
                <input
                  type="number"
                  defaultValue="2022"
                  className="w-full h-10 px-3 rounded-lg bg-secondary/50 border border-border/50 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div>
                <label className="block text-sm text-muted-foreground mb-1.5">Kilometre</label>
                <input
                  type="number"
                  defaultValue="45000"
                  className="w-full h-10 px-3 rounded-lg bg-secondary/50 border border-border/50 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              {selectedDamageType === "body" && (
                <div>
                  <label className="block text-sm text-muted-foreground mb-1.5">Hasar Bölgesi</label>
                  <select className="w-full h-10 px-3 rounded-lg bg-secondary/50 border border-border/50 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50">
                    <option>Ön Tampon</option>
                    <option>Arka Tampon</option>
                    <option>Sol Çamurluk</option>
                    <option>Sağ Çamurluk</option>
                    <option>Kapı</option>
                    <option>Tavan</option>
                  </select>
                </div>
              )}
            </div>

            {/* Upload area */}
            <div className="border-2 border-dashed border-border/50 rounded-lg p-4 text-center hover:border-primary/50 transition-colors cursor-pointer">
              <Camera className="size-8 mx-auto text-muted-foreground mb-2" />
              <p className="text-sm text-muted-foreground">Hasar fotoğrafı yükleyin</p>
              <p className="text-xs text-muted-foreground mt-1">veya sürükleyip bırakın</p>
            </div>

            {/* Calculate button */}
            <button
              onClick={handleAnalyze}
              disabled={analyzing}
              className={cn(
                "w-full flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-medium transition-all",
                analyzing
                  ? "bg-primary/50 text-primary-foreground cursor-wait"
                  : "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(74,222,128,0.3)] hover:shadow-[0_0_30px_rgba(74,222,128,0.4)]"
              )}
            >
              {analyzing ? (
                <>
                  <RefreshCcw className="size-4 animate-spin" />
                  AI Analiz Ediyor...
                </>
              ) : (
                <>
                  <Sparkles className="size-4" />
                  AI ile Hesapla
                </>
              )}
            </button>
          </div>
        </DashboardCard>

        {/* Stats */}
        <DashboardCard title="Bu Ay İstatistikler" icon={<BarChart3 className="size-5" />} glowColor="cyan">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Calculator className="size-5" />
                </div>
                <span className="text-sm text-muted-foreground">Hesaplama</span>
              </div>
              <span className="text-lg font-bold text-foreground">847</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-chart-2/10 text-chart-2">
                  <TrendingDown className="size-5" />
                </div>
                <span className="text-sm text-muted-foreground">Ort. Değer Kaybı</span>
              </div>
              <span className="text-lg font-bold text-foreground">₺52K</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-chart-3/10 text-chart-3">
                  <Activity className="size-5" />
                </div>
                <span className="text-sm text-muted-foreground">AI Doğruluğu</span>
              </div>
              <span className="text-lg font-bold text-primary">%94.7</span>
            </div>
          </div>
        </DashboardCard>
      </div>

      {/* Main content - Reports */}
      <div className="lg:col-span-3 space-y-6">
        {/* Result card (if analyzing completed) */}
        {analyzing && (
          <DashboardCard title="AI Analiz Sonucu" icon={<Sparkles className="size-5" />} glowColor="primary">
            <div className="flex items-center justify-center py-12">
              <div className="text-center">
                <div className="relative size-20 mx-auto mb-4">
                  <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
                  <div className="relative size-20 bg-primary/10 rounded-full flex items-center justify-center">
                    <Brain className="size-10 text-primary" />
                  </div>
                </div>
                <p className="text-lg font-medium text-foreground">AI Modeli Analiz Ediyor...</p>
                <p className="text-sm text-muted-foreground mt-1">Hasar tespiti ve değer kaybı hesaplanıyor</p>
              </div>
            </div>
          </DashboardCard>
        )}

        <DashboardCard
          title="Hasar Raporları"
          description="AI destekli değer kaybı ve bedeni hasar hesaplamaları"
          icon={<FileText className="size-5" />}
          glowColor="primary"
          size="lg"
        >
          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <Calculator className="size-5 text-primary" />
                <span className="text-sm text-muted-foreground">Toplam Hesaplama</span>
              </div>
              <p className="text-2xl font-bold text-foreground">2,847</p>
            </div>
            <div className="p-4 rounded-xl bg-gradient-to-br from-chart-2/10 to-chart-2/5 border border-chart-2/20">
              <div className="flex items-center gap-2 mb-2">
                <TrendingDown className="size-5 text-chart-2" />
                <span className="text-sm text-muted-foreground">Değer Kaybı</span>
              </div>
              <p className="text-2xl font-bold text-foreground">₺4.2M</p>
            </div>
            <div className="p-4 rounded-xl bg-gradient-to-br from-chart-3/10 to-chart-3/5 border border-chart-3/20">
              <div className="flex items-center gap-2 mb-2">
                <Car className="size-5 text-chart-3" />
                <span className="text-sm text-muted-foreground">Bedeni Hasar</span>
              </div>
              <p className="text-2xl font-bold text-foreground">₺2.8M</p>
            </div>
            <div className="p-4 rounded-xl bg-gradient-to-br from-chart-5/10 to-chart-5/5 border border-chart-5/20">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="size-5 text-chart-5" />
                <span className="text-sm text-muted-foreground">Bekleyen</span>
              </div>
              <p className="text-2xl font-bold text-foreground">23</p>
            </div>
          </div>

          {/* Reports list */}
          <div className="space-y-3">
            {mockReports.map((report) => (
              <div
                key={report.id}
                className="flex items-center gap-4 p-4 rounded-xl border border-border/50 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(74,222,128,0.15)] transition-all bg-secondary/30 group cursor-pointer"
              >
                <div className="size-12 rounded-xl bg-gradient-to-br from-secondary to-secondary/50 flex items-center justify-center flex-shrink-0">
                  <Car className="size-6 text-foreground" />
                </div>

                <div className="flex-1 min-w-0 grid grid-cols-1 sm:grid-cols-5 gap-2 sm:gap-4 items-center">
                  <div className="sm:col-span-2">
                    <h4 className="font-semibold text-foreground">{report.vehicle}</h4>
                    <p className="text-sm text-muted-foreground">{report.plate}</p>
                  </div>

                  <div className="hidden sm:block">
                    <p className="text-sm font-medium text-foreground">{report.depreciation}</p>
                    <p className="text-xs text-muted-foreground">Değer Kaybı</p>
                  </div>

                  <div className="hidden sm:block">
                    <p className="text-sm font-medium text-foreground">{report.bodyDamage}</p>
                    <p className="text-xs text-muted-foreground">Bedeni Hasar</p>
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

                <ChevronRight className="size-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </DashboardCard>
      </div>
    </div>
  )
}
