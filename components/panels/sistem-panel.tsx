"use client"

import { useState } from "react"
import {
  Settings,
  Users,
  Shield,
  Building,
  MessageSquare,
  Globe,
  Phone,
  Lock,
  Upload,
  Database,
  FileText,
  Bell,
  MapPin,
  Plus,
  Search,
  Edit,
  Trash2,
  Eye,
  Check,
  X,
} from "lucide-react"
import { StatCard } from "@/components/stat-card"

const users = [
  { id: 1, name: "Admin User", email: "admin@mrhasar.com", role: "admin", status: "aktif", lastLogin: "14 Mar 2026 09:30" },
  { id: 2, name: "Avukat Ahmet", email: "ahmet@mrhasar.com", role: "avukat", status: "aktif", lastLogin: "14 Mar 2026 08:45" },
  { id: 3, name: "Uzman Fatma", email: "fatma@mrhasar.com", role: "uzman", status: "aktif", lastLogin: "13 Mar 2026 17:20" },
  { id: 4, name: "Muhasebe Ali", email: "ali@mrhasar.com", role: "muhasebe", status: "aktif", lastLogin: "14 Mar 2026 10:15" },
  { id: 5, name: "Personel Zeynep", email: "zeynep@mrhasar.com", role: "personel", status: "pasif", lastLogin: "10 Mar 2026 14:00" },
]

const roleLabels = {
  admin: { label: "Yonetici", color: "bg-destructive/10 text-destructive border-destructive/20" },
  avukat: { label: "Avukat", color: "bg-primary/10 text-primary border-primary/20" },
  uzman: { label: "Uzman", color: "bg-chart-2/10 text-chart-2 border-chart-2/20" },
  muhasebe: { label: "Muhasebe", color: "bg-chart-3/10 text-chart-3 border-chart-3/20" },
  personel: { label: "Personel", color: "bg-chart-4/10 text-chart-4 border-chart-4/20" },
}

const menuItems = [
  { id: "kullanici", label: "Kullanici Yonetimi", icon: <Users className="size-4" /> },
  { id: "yetki", label: "Yetki Yonetimi", icon: <Shield className="size-4" /> },
  { id: "firma", label: "Firma Ayarlari", icon: <Building className="size-4" /> },
  { id: "sms", label: "SMS Bildirim", icon: <MessageSquare className="size-4" /> },
  { id: "portal", label: "Portal Ayarlari", icon: <Globe className="size-4" /> },
  { id: "netsantral", label: "Netsantral", icon: <Phone className="size-4" /> },
  { id: "guvenlik", label: "Cihaz Guvenligi", icon: <Lock className="size-4" /> },
  { id: "aktarim", label: "Toplu Aktarim", icon: <Upload className="size-4" /> },
  { id: "veri", label: "Veri Yonetimi", icon: <Database className="size-4" /> },
  { id: "log", label: "Log Kayitlari", icon: <FileText className="size-4" /> },
  { id: "bildirim", label: "Sistem Bildirimleri", icon: <Bell className="size-4" /> },
  { id: "tanimlamalar", label: "Tanimlamalar", icon: <Settings className="size-4" /> },
  { id: "konum", label: "Konum Takibi", icon: <MapPin className="size-4" /> },
]

export function SistemPanel() {
  const [activeMenu, setActiveMenu] = useState("kullanici")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Sistem Yonetimi</h1>
        <p className="text-muted-foreground">Sistem ayarlarini ve kullanicilari yonetin</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="rounded-xl border border-border bg-card p-2 shadow-sm">
            <nav className="space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveMenu(item.id)}
                  className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    activeMenu === item.id
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Stats */}
          <div className="grid gap-4 sm:grid-cols-3">
            <StatCard
              title="Toplam Kullanici"
              value="12"
              icon={<Users className="size-6" />}
              variant="primary"
            />
            <StatCard
              title="Aktif Oturum"
              value="5"
              icon={<Check className="size-6" />}
              variant="success"
            />
            <StatCard
              title="Bekleyen Islem"
              value="3"
              icon={<Bell className="size-6" />}
              variant="warning"
            />
          </div>

          {/* Users Table */}
          <div className="rounded-xl border border-border bg-card shadow-sm">
            <div className="flex flex-col gap-4 border-b border-border p-4 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="font-semibold text-foreground">Kullanicilar</h2>
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Kullanici ara..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="h-9 w-full rounded-lg border border-border bg-background pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 sm:w-64"
                  />
                </div>
                <button className="flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
                  <Plus className="size-4" />
                  Yeni
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-secondary/50">
                    <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Kullanici</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Rol</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Durum</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Son Giris</th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-muted-foreground">Islemler</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {filteredUsers.map((user) => {
                    const role = roleLabels[user.role as keyof typeof roleLabels]
                    return (
                      <tr key={user.id} className="transition-colors hover:bg-secondary/30">
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-3">
                            <div className="flex size-9 items-center justify-center rounded-full bg-primary/10 font-medium text-primary">
                              {user.name.charAt(0)}
                            </div>
                            <div>
                              <p className="font-medium text-foreground">{user.name}</p>
                              <p className="text-sm text-muted-foreground">{user.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <span className={`rounded-full border px-2 py-0.5 text-xs font-medium ${role.color}`}>
                            {role.label}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <span className={`flex items-center gap-1.5 text-sm ${
                            user.status === "aktif" ? "text-chart-3" : "text-muted-foreground"
                          }`}>
                            <span className={`size-2 rounded-full ${
                              user.status === "aktif" ? "bg-chart-3" : "bg-muted-foreground"
                            }`} />
                            {user.status === "aktif" ? "Aktif" : "Pasif"}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">{user.lastLogin}</td>
                        <td className="px-4 py-3">
                          <div className="flex items-center justify-end gap-1">
                            <button className="flex size-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
                              <Eye className="size-4" />
                            </button>
                            <button className="flex size-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
                              <Edit className="size-4" />
                            </button>
                            <button className="flex size-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive">
                              <Trash2 className="size-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Permissions Matrix Preview */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Shield className="size-5 text-primary" />
                <h2 className="font-semibold text-foreground">Yetki Matrisi Onizleme</h2>
              </div>
              <button className="text-sm text-primary hover:underline">Tum Yetkileri Gor</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="px-3 py-2 text-left font-medium text-muted-foreground">Modul</th>
                    <th className="px-3 py-2 text-center font-medium text-muted-foreground">Admin</th>
                    <th className="px-3 py-2 text-center font-medium text-muted-foreground">Avukat</th>
                    <th className="px-3 py-2 text-center font-medium text-muted-foreground">Uzman</th>
                    <th className="px-3 py-2 text-center font-medium text-muted-foreground">Muhasebe</th>
                    <th className="px-3 py-2 text-center font-medium text-muted-foreground">Personel</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { module: "Dosya Islemleri", admin: true, avukat: true, uzman: true, muhasebe: true, personel: true },
                    { module: "CRM / Saha", admin: true, avukat: true, uzman: false, muhasebe: false, personel: false },
                    { module: "Hesaplamalar", admin: true, avukat: true, uzman: true, muhasebe: false, personel: false },
                    { module: "Muhasebe", admin: true, avukat: false, uzman: false, muhasebe: true, personel: false },
                    { module: "Sistem", admin: true, avukat: false, uzman: false, muhasebe: false, personel: false },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-secondary/30">
                      <td className="px-3 py-2 font-medium text-foreground">{row.module}</td>
                      <td className="px-3 py-2 text-center">
                        {row.admin ? <Check className="mx-auto size-4 text-chart-3" /> : <X className="mx-auto size-4 text-muted-foreground" />}
                      </td>
                      <td className="px-3 py-2 text-center">
                        {row.avukat ? <Check className="mx-auto size-4 text-chart-3" /> : <X className="mx-auto size-4 text-muted-foreground" />}
                      </td>
                      <td className="px-3 py-2 text-center">
                        {row.uzman ? <Check className="mx-auto size-4 text-chart-3" /> : <X className="mx-auto size-4 text-muted-foreground" />}
                      </td>
                      <td className="px-3 py-2 text-center">
                        {row.muhasebe ? <Check className="mx-auto size-4 text-chart-3" /> : <X className="mx-auto size-4 text-muted-foreground" />}
                      </td>
                      <td className="px-3 py-2 text-center">
                        {row.personel ? <Check className="mx-auto size-4 text-chart-3" /> : <X className="mx-auto size-4 text-muted-foreground" />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
