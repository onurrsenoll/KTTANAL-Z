"use client"

import { StatCard } from "@/components/stat-card"
import {
  FolderOpen,
  Users,
  TrendingUp,
  Wallet,
  Clock,
  CheckCircle2,
  AlertCircle,
  FileText,
  ArrowUpRight,
  Calendar,
  Phone,
} from "lucide-react"

const recentFiles = [
  { id: 1, name: "2024/ADK-1542", client: "Ahmet Yilmaz", status: "aktif", type: "ADK", date: "14 Mar 2026" },
  { id: 2, name: "2024/BH-0892", client: "Fatma Demir", status: "beklemede", type: "BH", date: "14 Mar 2026" },
  { id: 3, name: "2024/ADK-1541", client: "Mehmet Kaya", status: "tamamlandi", type: "ADK", date: "13 Mar 2026" },
  { id: 4, name: "2024/BH-0891", client: "Ayse Ozturk", status: "aktif", type: "BH", date: "13 Mar 2026" },
  { id: 5, name: "2024/ADK-1540", client: "Ali Celik", status: "aktif", type: "ADK", date: "12 Mar 2026" },
]

const upcomingEvents = [
  { id: 1, title: "Durusma - Ahmet Yilmaz", date: "15 Mar", time: "10:00", type: "durusma" },
  { id: 2, title: "Musteri Gorusmesi", date: "15 Mar", time: "14:30", type: "gorusme" },
  { id: 3, title: "Tahkim Sunumu", date: "16 Mar", time: "09:00", type: "tahkim" },
  { id: 4, title: "Police Yenileme", date: "17 Mar", time: "11:00", type: "police" },
]

const statusColors = {
  aktif: "bg-chart-3/10 text-chart-3 border-chart-3/20",
  beklemede: "bg-chart-4/10 text-chart-4 border-chart-4/20",
  tamamlandi: "bg-primary/10 text-primary border-primary/20",
}

const eventTypeColors = {
  durusma: "bg-destructive/10 text-destructive",
  gorusme: "bg-chart-3/10 text-chart-3",
  tahkim: "bg-primary/10 text-primary",
  police: "bg-chart-4/10 text-chart-4",
}

export function HomePanel() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Hos Geldiniz, Admin</h1>
            <p className="mt-1 text-muted-foreground">MR Hasar Danismanlik Dosya Takip Sistemi</p>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90">
              <FolderOpen className="size-4" />
              Yeni Dosya
            </button>
            <button className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-all hover:bg-secondary">
              <Phone className="size-4" />
              Yeni CRM
            </button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Toplam Dosya"
          value="1,542"
          subtitle="248 aktif dosya"
          icon={<FolderOpen className="size-6" />}
          trend={{ value: 12, isPositive: true }}
          variant="primary"
        />
        <StatCard
          title="Bekleyen Islemler"
          value="38"
          subtitle="12 acil islem"
          icon={<Clock className="size-6" />}
          trend={{ value: 5, isPositive: false }}
          variant="warning"
        />
        <StatCard
          title="Aylik Tahsilat"
          value="₺485,200"
          subtitle="Hedef: ₺500,000"
          icon={<Wallet className="size-6" />}
          trend={{ value: 8, isPositive: true }}
          variant="success"
        />
        <StatCard
          title="Aktif Musteriler"
          value="892"
          subtitle="32 yeni musteri"
          icon={<Users className="size-6" />}
          trend={{ value: 15, isPositive: true }}
          variant="default"
        />
      </div>

      {/* Two Column Layout */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent Files */}
        <div className="lg:col-span-2">
          <div className="rounded-xl border border-border bg-card shadow-sm">
            <div className="flex items-center justify-between border-b border-border p-4">
              <div className="flex items-center gap-2">
                <FileText className="size-5 text-primary" />
                <h2 className="font-semibold text-foreground">Son Dosyalar</h2>
              </div>
              <button className="flex items-center gap-1 text-sm text-primary transition-colors hover:text-primary/80">
                Tumunu Gor
                <ArrowUpRight className="size-4" />
              </button>
            </div>
            <div className="divide-y divide-border">
              {recentFiles.map((file) => (
                <div key={file.id} className="flex items-center justify-between p-4 transition-colors hover:bg-secondary/50">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                      <FolderOpen className="size-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{file.name}</p>
                      <p className="text-sm text-muted-foreground">{file.client}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground">
                      {file.type}
                    </span>
                    <span className={`rounded-full border px-2 py-0.5 text-xs font-medium ${statusColors[file.status as keyof typeof statusColors]}`}>
                      {file.status}
                    </span>
                    <span className="hidden text-sm text-muted-foreground sm:block">{file.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div>
          <div className="rounded-xl border border-border bg-card shadow-sm">
            <div className="flex items-center justify-between border-b border-border p-4">
              <div className="flex items-center gap-2">
                <Calendar className="size-5 text-primary" />
                <h2 className="font-semibold text-foreground">Yaklasan Etkinlikler</h2>
              </div>
            </div>
            <div className="divide-y divide-border">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="p-4 transition-colors hover:bg-secondary/50">
                  <div className="flex items-start gap-3">
                    <div className={`flex size-10 items-center justify-center rounded-lg ${eventTypeColors[event.type as keyof typeof eventTypeColors]}`}>
                      <Calendar className="size-5" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{event.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {event.date} - {event.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-border p-4">
              <button className="w-full rounded-lg border border-border py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary">
                Tum Etkinlikler
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <QuickActionCard
          icon={<TrendingUp className="size-5" />}
          title="ADK Hesapla"
          description="Arac deger kaybi hesaplama"
          color="primary"
        />
        <QuickActionCard
          icon={<Users className="size-5" />}
          title="BH Hesapla"
          description="Bedeni hasar hesaplama"
          color="success"
        />
        <QuickActionCard
          icon={<CheckCircle2 className="size-5" />}
          title="Tahsilat Giris"
          description="Yeni tahsilat kaydi"
          color="warning"
        />
        <QuickActionCard
          icon={<AlertCircle className="size-5" />}
          title="Bekleyen Isler"
          description="38 bekleyen islem"
          color="danger"
        />
      </div>
    </div>
  )
}

interface QuickActionCardProps {
  icon: React.ReactNode
  title: string
  description: string
  color: "primary" | "success" | "warning" | "danger"
}

function QuickActionCard({ icon, title, description, color }: QuickActionCardProps) {
  const colorStyles = {
    primary: "border-primary/20 hover:border-primary/40 hover:bg-primary/5",
    success: "border-chart-3/20 hover:border-chart-3/40 hover:bg-chart-3/5",
    warning: "border-chart-4/20 hover:border-chart-4/40 hover:bg-chart-4/5",
    danger: "border-destructive/20 hover:border-destructive/40 hover:bg-destructive/5",
  }

  const iconStyles = {
    primary: "bg-primary/10 text-primary",
    success: "bg-chart-3/10 text-chart-3",
    warning: "bg-chart-4/10 text-chart-4",
    danger: "bg-destructive/10 text-destructive",
  }

  return (
    <button className={`group flex items-center gap-3 rounded-xl border bg-card p-4 text-left transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg dark:hover:shadow-black/20 ${colorStyles[color]}`}>
      <div className={`flex size-10 items-center justify-center rounded-lg ${iconStyles[color]}`}>
        {icon}
      </div>
      <div>
        <p className="font-medium text-foreground">{title}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </button>
  )
}
