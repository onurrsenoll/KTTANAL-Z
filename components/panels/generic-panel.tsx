"use client"

import {
  Phone,
  Users,
  FileText,
  Scale,
  Calendar,
  Building,
  Plus,
  Search,
  Filter,
  ArrowUpRight,
  Clock,
  CheckCircle2,
  AlertCircle,
} from "lucide-react"
import { StatCard } from "@/components/stat-card"

interface GenericPanelProps {
  moduleId: string
  title: string
  description: string
}

const moduleConfigs: Record<string, {
  icon: React.ReactNode
  stats: { title: string; value: string; icon: React.ReactNode; variant: "primary" | "success" | "warning" | "default" }[]
  items: { id: number; title: string; subtitle: string; status: string; date: string }[]
}> = {
  crm: {
    icon: <Phone className="size-5" />,
    stats: [
      { title: "Toplam Kayit", value: "1,248", icon: <Phone className="size-6" />, variant: "primary" },
      { title: "Aktif Gorusmeler", value: "45", icon: <CheckCircle2 className="size-6" />, variant: "success" },
      { title: "Bekleyen", value: "23", icon: <Clock className="size-6" />, variant: "warning" },
      { title: "Bu Hafta", value: "156", icon: <Calendar className="size-6" />, variant: "default" },
    ],
    items: [
      { id: 1, title: "Ahmet Yilmaz", subtitle: "+90 532 XXX XX XX", status: "aktif", date: "14 Mar 2026" },
      { id: 2, title: "Fatma Demir", subtitle: "+90 533 XXX XX XX", status: "beklemede", date: "14 Mar 2026" },
      { id: 3, title: "Mehmet Kaya", subtitle: "+90 535 XXX XX XX", status: "tamamlandi", date: "13 Mar 2026" },
    ],
  },
  paydaslar: {
    icon: <Users className="size-5" />,
    stats: [
      { title: "Is Ortaklari", value: "48", icon: <Building className="size-6" />, variant: "primary" },
      { title: "Is Paydaslari", value: "124", icon: <Users className="size-6" />, variant: "success" },
      { title: "Personel", value: "12", icon: <Users className="size-6" />, variant: "warning" },
      { title: "Aktif Isbirlik", value: "86", icon: <CheckCircle2 className="size-6" />, variant: "default" },
    ],
    items: [
      { id: 1, title: "ABC Sigorta", subtitle: "Is Ortagi", status: "aktif", date: "14 Mar 2026" },
      { id: 2, title: "XYZ Hukuk", subtitle: "Is Paydasi", status: "aktif", date: "13 Mar 2026" },
      { id: 3, title: "DEF Ekspertiz", subtitle: "Is Ortagi", status: "beklemede", date: "12 Mar 2026" },
    ],
  },
  police: {
    icon: <FileText className="size-5" />,
    stats: [
      { title: "Toplam Police", value: "892", icon: <FileText className="size-6" />, variant: "primary" },
      { title: "Aktif Policeler", value: "654", icon: <CheckCircle2 className="size-6" />, variant: "success" },
      { title: "Yenileme Bekleyen", value: "45", icon: <AlertCircle className="size-6" />, variant: "warning" },
      { title: "Aylik Prim", value: "₺125K", icon: <Clock className="size-6" />, variant: "default" },
    ],
    items: [
      { id: 1, title: "POL-2024-1542", subtitle: "Kasko - Ahmet Yilmaz", status: "aktif", date: "14 Mar 2026" },
      { id: 2, title: "POL-2024-1541", subtitle: "Trafik - Fatma Demir", status: "aktif", date: "13 Mar 2026" },
      { id: 3, title: "POL-2024-1540", subtitle: "Saglik - Mehmet Kaya", status: "yenileme", date: "12 Mar 2026" },
    ],
  },
  ictihat: {
    icon: <Scale className="size-5" />,
    stats: [
      { title: "Yargitay Kararlari", value: "2,456", icon: <Scale className="size-6" />, variant: "primary" },
      { title: "Tahkim Ornekleri", value: "892", icon: <FileText className="size-6" />, variant: "success" },
      { title: "Limit Tablolari", value: "48", icon: <CheckCircle2 className="size-6" />, variant: "warning" },
      { title: "Emsal Dosyalar", value: "324", icon: <Clock className="size-6" />, variant: "default" },
    ],
    items: [
      { id: 1, title: "2024/12345 E.", subtitle: "Yargitay 17. HD - Deger Kaybi", status: "emsal", date: "14 Mar 2026" },
      { id: 2, title: "2024/11234 E.", subtitle: "Yargitay 4. HD - Bedeni Hasar", status: "emsal", date: "13 Mar 2026" },
      { id: 3, title: "THK-2024-892", subtitle: "Tahkim Kabul Ornegi", status: "kabul", date: "12 Mar 2026" },
    ],
  },
  ajanda: {
    icon: <Calendar className="size-5" />,
    stats: [
      { title: "Bugunun Etkinlikleri", value: "8", icon: <Calendar className="size-6" />, variant: "primary" },
      { title: "Bu Hafta", value: "24", icon: <Clock className="size-6" />, variant: "success" },
      { title: "Geciken", value: "3", icon: <AlertCircle className="size-6" />, variant: "warning" },
      { title: "Tamamlanan", value: "156", icon: <CheckCircle2 className="size-6" />, variant: "default" },
    ],
    items: [
      { id: 1, title: "Durusma - Ahmet Yilmaz", subtitle: "10:00 - Istanbul Adliyesi", status: "bugun", date: "14 Mar 2026" },
      { id: 2, title: "Musteri Gorusmesi", subtitle: "14:30 - Ofis", status: "bugun", date: "14 Mar 2026" },
      { id: 3, title: "Tahkim Sunumu", subtitle: "09:00 - Online", status: "yarin", date: "15 Mar 2026" },
    ],
  },
}

const statusColors: Record<string, string> = {
  aktif: "bg-chart-3/10 text-chart-3 border-chart-3/20",
  beklemede: "bg-chart-4/10 text-chart-4 border-chart-4/20",
  tamamlandi: "bg-primary/10 text-primary border-primary/20",
  yenileme: "bg-destructive/10 text-destructive border-destructive/20",
  emsal: "bg-primary/10 text-primary border-primary/20",
  kabul: "bg-chart-3/10 text-chart-3 border-chart-3/20",
  bugun: "bg-destructive/10 text-destructive border-destructive/20",
  yarin: "bg-chart-4/10 text-chart-4 border-chart-4/20",
}

export function GenericPanel({ moduleId, title, description }: GenericPanelProps) {
  const config = moduleConfigs[moduleId] || moduleConfigs.crm

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">{title}</h1>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90">
          <Plus className="size-4" />
          Yeni Ekle
        </button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {config.stats.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Ara..."
            className="h-10 w-full rounded-lg border border-border bg-background pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <button className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary">
          <Filter className="size-4" />
          Filtrele
        </button>
      </div>

      {/* Content */}
      <div className="rounded-xl border border-border bg-card shadow-sm">
        <div className="flex items-center justify-between border-b border-border p-4">
          <h2 className="font-semibold text-foreground">Son Kayitlar</h2>
          <button className="flex items-center gap-1 text-sm text-primary transition-colors hover:text-primary/80">
            Tumunu Gor
            <ArrowUpRight className="size-4" />
          </button>
        </div>
        <div className="divide-y divide-border">
          {config.items.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-4 transition-colors hover:bg-secondary/30">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                  {config.icon}
                </div>
                <div>
                  <p className="font-medium text-foreground">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`rounded-full border px-2 py-0.5 text-xs font-medium ${statusColors[item.status] || statusColors.aktif}`}>
                  {item.status}
                </span>
                <span className="hidden text-sm text-muted-foreground sm:block">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
