"use client"

import {
  Handshake,
  Building2,
  UserCircle,
  Users,
  Mail,
  Phone,
  MapPin,
  Globe,
  Plus,
  Search,
  Filter,
  MoreVertical,
  ExternalLink,
  FileText,
  Calendar,
  Star,
  TrendingUp,
  Briefcase,
  ShieldCheck,
} from "lucide-react"
import { DashboardCard } from "@/components/dashboard-card"
import { cn } from "@/lib/utils"

// Paydaş Panel
export function StakeholderPanel() {
  const stakeholders = [
    { id: "1", name: "ABC Holding A.Ş.", type: "Yatırımcı", contact: "Ahmet Bey", email: "ahmet@abc.com", status: "active" },
    { id: "2", name: "XYZ Vakfı", type: "Sponsor", contact: "Fatma Hanım", email: "fatma@xyz.org", status: "active" },
    { id: "3", name: "DEF Derneği", type: "Ortak", contact: "Mehmet Bey", email: "mehmet@def.org", status: "pending" },
    { id: "4", name: "GHI Kooperatif", type: "Tedarikçi", contact: "Ayşe Hanım", email: "ayse@ghi.com", status: "active" },
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div className="lg:col-span-1 space-y-6">
        <DashboardCard title="Paydaş Özeti" icon={<Handshake className="size-5" />} glowColor="primary">
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-lg bg-secondary/50 text-center">
              <p className="text-2xl font-bold text-foreground">48</p>
              <p className="text-xs text-muted-foreground">Toplam</p>
            </div>
            <div className="p-3 rounded-lg bg-secondary/50 text-center">
              <p className="text-2xl font-bold text-primary">42</p>
              <p className="text-xs text-muted-foreground">Aktif</p>
            </div>
          </div>
        </DashboardCard>

        <DashboardCard title="Paydaş Türleri" icon={<TrendingUp className="size-5" />} glowColor="cyan">
          <div className="space-y-3">
            {[
              { name: "Yatırımcılar", count: 12, color: "bg-primary" },
              { name: "Sponsorlar", count: 8, color: "bg-chart-2" },
              { name: "Ortaklar", count: 15, color: "bg-chart-3" },
              { name: "Tedarikçiler", count: 13, color: "bg-chart-4" },
            ].map((type, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={cn("size-2 rounded-full", type.color)} />
                  <span className="text-sm text-foreground">{type.name}</span>
                </div>
                <span className="text-sm font-medium text-muted-foreground">{type.count}</span>
              </div>
            ))}
          </div>
        </DashboardCard>
      </div>

      <div className="lg:col-span-3">
        <DashboardCard
          title="Paydaş Listesi"
          description="Tüm paydaşlarınızı yönetin"
          icon={<Handshake className="size-5" />}
          glowColor="primary"
          size="lg"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Paydaş ara..."
                className="w-full h-9 pl-10 pr-4 rounded-lg bg-secondary/50 border border-border/50 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium shadow-[0_0_20px_rgba(74,222,128,0.3)]">
              <Plus className="size-4" />
              Yeni Paydaş
            </button>
          </div>

          <div className="space-y-3">
            {stakeholders.map((s) => (
              <div key={s.id} className="flex items-center gap-4 p-4 rounded-xl border border-border/50 hover:border-primary/50 transition-all bg-secondary/30 group">
                <div className="size-12 rounded-full bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center text-sm font-semibold text-primary-foreground">
                  {s.name.split(" ")[0][0]}{s.name.split(" ")[1]?.[0] || ""}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-foreground">{s.name}</h4>
                  <p className="text-sm text-muted-foreground">{s.type} • {s.contact}</p>
                </div>
                <span className={cn(
                  "px-2.5 py-1 rounded-full text-xs font-medium",
                  s.status === "active" ? "bg-primary/10 text-primary" : "bg-chart-3/10 text-chart-3"
                )}>
                  {s.status === "active" ? "Aktif" : "Beklemede"}
                </span>
              </div>
            ))}
          </div>
        </DashboardCard>
      </div>
    </div>
  )
}

// İş Ortağı Panel
export function PartnerPanel() {
  const partners = [
    { id: "1", name: "Tech Solutions Ltd.", sector: "Teknoloji", country: "Türkiye", projects: 12, revenue: "₺2.4M" },
    { id: "2", name: "Global Finance Inc.", sector: "Finans", country: "ABD", projects: 8, revenue: "₺1.8M" },
    { id: "3", name: "EuroConsult GmbH", sector: "Danışmanlık", country: "Almanya", projects: 5, revenue: "₺950K" },
    { id: "4", name: "Asia Trade Co.", sector: "Ticaret", country: "Japonya", projects: 3, revenue: "₺620K" },
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div className="lg:col-span-1 space-y-6">
        <DashboardCard title="Ortaklık Özeti" icon={<Building2 className="size-5" />} glowColor="primary">
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
              <p className="text-sm text-muted-foreground">Toplam Gelir</p>
              <p className="text-2xl font-bold text-foreground">₺5.8M</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-secondary/50 text-center">
                <p className="text-xl font-bold text-foreground">28</p>
                <p className="text-xs text-muted-foreground">Ortak</p>
              </div>
              <div className="p-3 rounded-lg bg-secondary/50 text-center">
                <p className="text-xl font-bold text-primary">45</p>
                <p className="text-xs text-muted-foreground">Proje</p>
              </div>
            </div>
          </div>
        </DashboardCard>

        <DashboardCard title="Coğrafi Dağılım" icon={<Globe className="size-5" />} glowColor="cyan">
          <div className="space-y-3">
            {[
              { name: "Türkiye", count: 15, percent: 54 },
              { name: "Avrupa", count: 8, percent: 29 },
              { name: "Amerika", count: 3, percent: 11 },
              { name: "Asya", count: 2, percent: 6 },
            ].map((region, i) => (
              <div key={i} className="space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-foreground">{region.name}</span>
                  <span className="text-muted-foreground">{region.count}</span>
                </div>
                <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: `${region.percent}%` }} />
                </div>
              </div>
            ))}
          </div>
        </DashboardCard>
      </div>

      <div className="lg:col-span-3">
        <DashboardCard
          title="İş Ortakları"
          description="Stratejik ortaklıklarınızı yönetin"
          icon={<Building2 className="size-5" />}
          glowColor="primary"
          size="lg"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Ortak ara..."
                className="w-full h-9 pl-10 pr-4 rounded-lg bg-secondary/50 border border-border/50 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium shadow-[0_0_20px_rgba(74,222,128,0.3)]">
              <Plus className="size-4" />
              Yeni Ortak
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {partners.map((p) => (
              <div key={p.id} className="p-4 rounded-xl border border-border/50 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(74,222,128,0.15)] transition-all bg-secondary/30">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <Building2 className="size-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{p.name}</h4>
                      <p className="text-sm text-muted-foreground">{p.sector}</p>
                    </div>
                  </div>
                  <span className="text-xs px-2 py-1 rounded bg-secondary text-muted-foreground">{p.country}</span>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-border/50">
                  <div>
                    <p className="text-xs text-muted-foreground">Projeler</p>
                    <p className="font-semibold text-foreground">{p.projects}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Gelir</p>
                    <p className="font-semibold text-primary">{p.revenue}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </DashboardCard>
      </div>
    </div>
  )
}

// Müşteri Portali Panel
export function CustomerPortalPanel() {
  const customers = [
    { id: "1", name: "Mehmet Yılmaz", company: "ABC Ltd.", tickets: 3, lastLogin: "Bugün", status: "online" },
    { id: "2", name: "Ayşe Kaya", company: "XYZ A.Ş.", tickets: 1, lastLogin: "Dün", status: "offline" },
    { id: "3", name: "Ali Demir", company: "DEF Tic.", tickets: 0, lastLogin: "3 gün önce", status: "offline" },
    { id: "4", name: "Fatma Öz", company: "GHI San.", tickets: 5, lastLogin: "Bugün", status: "online" },
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div className="lg:col-span-1 space-y-6">
        <DashboardCard title="Portal Özeti" icon={<UserCircle className="size-5" />} glowColor="primary">
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-lg bg-secondary/50 text-center">
              <p className="text-2xl font-bold text-foreground">1,248</p>
              <p className="text-xs text-muted-foreground">Kayıtlı Müşteri</p>
            </div>
            <div className="p-3 rounded-lg bg-secondary/50 text-center">
              <p className="text-2xl font-bold text-primary">89</p>
              <p className="text-xs text-muted-foreground">Çevrimiçi</p>
            </div>
            <div className="p-3 rounded-lg bg-secondary/50 text-center">
              <p className="text-2xl font-bold text-chart-3">42</p>
              <p className="text-xs text-muted-foreground">Açık Talep</p>
            </div>
            <div className="p-3 rounded-lg bg-secondary/50 text-center">
              <p className="text-2xl font-bold text-chart-2">%94</p>
              <p className="text-xs text-muted-foreground">Memnuniyet</p>
            </div>
          </div>
        </DashboardCard>

        <DashboardCard title="Popüler Sayfalar" icon={<Star className="size-5" />} glowColor="amber">
          <div className="space-y-3">
            {[
              { name: "Fatura Görüntüle", views: 2450 },
              { name: "Destek Talebi", views: 1820 },
              { name: "Sipariş Takip", views: 1540 },
              { name: "Dökümanlar", views: 890 },
            ].map((page, i) => (
              <div key={i} className="flex items-center justify-between p-2 rounded-lg hover:bg-secondary/50 transition-colors">
                <span className="text-sm text-foreground">{page.name}</span>
                <span className="text-xs text-muted-foreground">{page.views}</span>
              </div>
            ))}
          </div>
        </DashboardCard>
      </div>

      <div className="lg:col-span-3">
        <DashboardCard
          title="Müşteri Listesi"
          description="Portal kullanıcılarını yönetin"
          icon={<UserCircle className="size-5" />}
          glowColor="primary"
          size="lg"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Müşteri ara..."
                className="w-full h-9 pl-10 pr-4 rounded-lg bg-secondary/50 border border-border/50 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium shadow-[0_0_20px_rgba(74,222,128,0.3)]">
              <Plus className="size-4" />
              Davet Gönder
            </button>
          </div>

          <div className="space-y-3">
            {customers.map((c) => (
              <div key={c.id} className="flex items-center gap-4 p-4 rounded-xl border border-border/50 hover:border-primary/50 transition-all bg-secondary/30 group">
                <div className="relative">
                  <div className="size-12 rounded-full bg-gradient-to-br from-chart-2 to-chart-4 flex items-center justify-center text-sm font-semibold text-primary-foreground">
                    {c.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div className={cn(
                    "absolute -bottom-0.5 -right-0.5 size-3.5 rounded-full border-2 border-card",
                    c.status === "online" ? "bg-primary shadow-[0_0_8px_rgba(74,222,128,0.6)]" : "bg-muted-foreground"
                  )} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-foreground">{c.name}</h4>
                  <p className="text-sm text-muted-foreground">{c.company}</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-foreground">{c.tickets}</p>
                  <p className="text-xs text-muted-foreground">Talep</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Son Giriş</p>
                  <p className="text-sm font-medium text-foreground">{c.lastLogin}</p>
                </div>
              </div>
            ))}
          </div>
        </DashboardCard>
      </div>
    </div>
  )
}

// Kullanıcı Yönetimi Panel
export function UserManagementPanel() {
  const users = [
    { id: "1", name: "Admin Kullanıcı", email: "admin@sistem.com", role: "Sistem Yöneticisi", status: "active", lastLogin: "Şu an" },
    { id: "2", name: "Ahmet Yönetici", email: "ahmet@sistem.com", role: "Yönetici", status: "active", lastLogin: "1 saat önce" },
    { id: "3", name: "Fatma Personel", email: "fatma@sistem.com", role: "Personel", status: "active", lastLogin: "Bugün" },
    { id: "4", name: "Mehmet İzleyici", email: "mehmet@sistem.com", role: "İzleyici", status: "inactive", lastLogin: "1 hafta önce" },
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div className="lg:col-span-1 space-y-6">
        <DashboardCard title="Kullanıcı Özeti" icon={<Users className="size-5" />} glowColor="primary">
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-lg bg-secondary/50 text-center">
              <p className="text-2xl font-bold text-foreground">248</p>
              <p className="text-xs text-muted-foreground">Toplam</p>
            </div>
            <div className="p-3 rounded-lg bg-secondary/50 text-center">
              <p className="text-2xl font-bold text-primary">186</p>
              <p className="text-xs text-muted-foreground">Aktif</p>
            </div>
          </div>
        </DashboardCard>

        <DashboardCard title="Rol Dağılımı" icon={<ShieldCheck className="size-5" />} glowColor="cyan">
          <div className="space-y-3">
            {[
              { name: "Sistem Yöneticisi", count: 3, color: "bg-chart-5" },
              { name: "Yönetici", count: 12, color: "bg-primary" },
              { name: "Personel", count: 156, color: "bg-chart-2" },
              { name: "İzleyici", count: 77, color: "bg-chart-3" },
            ].map((role, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={cn("size-2 rounded-full", role.color)} />
                  <span className="text-sm text-foreground">{role.name}</span>
                </div>
                <span className="text-sm font-medium text-muted-foreground">{role.count}</span>
              </div>
            ))}
          </div>
        </DashboardCard>
      </div>

      <div className="lg:col-span-3">
        <DashboardCard
          title="Kullanıcı Listesi"
          description="Sistem kullanıcılarını yönetin"
          icon={<Users className="size-5" />}
          glowColor="primary"
          size="lg"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Kullanıcı ara..."
                className="w-full h-9 pl-10 pr-4 rounded-lg bg-secondary/50 border border-border/50 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium shadow-[0_0_20px_rgba(74,222,128,0.3)]">
              <Plus className="size-4" />
              Yeni Kullanıcı
            </button>
          </div>

          <div className="space-y-3">
            {users.map((u) => (
              <div key={u.id} className="flex items-center gap-4 p-4 rounded-xl border border-border/50 hover:border-primary/50 transition-all bg-secondary/30 group">
                <div className="size-12 rounded-full bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center text-sm font-semibold text-primary-foreground">
                  {u.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-foreground">{u.name}</h4>
                  <p className="text-sm text-muted-foreground">{u.email}</p>
                </div>
                <div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-secondary text-foreground">
                    {u.role}
                  </span>
                </div>
                <div className="text-right">
                  <span className={cn(
                    "px-2.5 py-1 rounded-full text-xs font-medium",
                    u.status === "active" ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                  )}>
                    {u.status === "active" ? "Aktif" : "Pasif"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </DashboardCard>
      </div>
    </div>
  )
}
