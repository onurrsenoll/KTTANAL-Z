"use client"

import { useState } from "react"
import {
  ShieldCheck,
  Users,
  Eye,
  Edit,
  Trash2,
  Plus,
  Settings,
  Lock,
  Unlock,
  Check,
  X,
  Search,
  Filter,
  ChevronDown,
  Shield,
  UserCog,
  FileKey,
} from "lucide-react"
import { DashboardCard } from "@/components/dashboard-card"
import { cn } from "@/lib/utils"

interface Role {
  id: string
  name: string
  description: string
  userCount: number
  color: string
}

interface Permission {
  id: string
  module: string
  actions: {
    view: boolean
    create: boolean
    edit: boolean
    delete: boolean
    admin: boolean
  }
}

const roles: Role[] = [
  { id: "admin", name: "Sistem Yöneticisi", description: "Tam erişim yetkisi", userCount: 3, color: "bg-chart-5" },
  { id: "manager", name: "Yönetici", description: "Departman yönetim yetkisi", userCount: 12, color: "bg-primary" },
  { id: "staff", name: "Personel", description: "Standart kullanıcı yetkisi", userCount: 156, color: "bg-chart-2" },
  { id: "viewer", name: "İzleyici", description: "Salt okunur erişim", userCount: 45, color: "bg-chart-3" },
  { id: "guest", name: "Misafir", description: "Sınırlı erişim", userCount: 28, color: "bg-muted-foreground" },
]

const modules = [
  "Dosya Yönetimi",
  "Personel",
  "Paydaşlar",
  "İş Ortakları",
  "CRM",
  "Müşteri Portali",
  "Kullanıcı Yönetimi",
  "Muhasebe",
  "Raporlar",
  "AI Modülleri",
]

const initialPermissions: Record<string, Record<string, Permission["actions"]>> = {
  admin: Object.fromEntries(modules.map(m => [m, { view: true, create: true, edit: true, delete: true, admin: true }])),
  manager: Object.fromEntries(modules.map(m => [m, { view: true, create: true, edit: true, delete: false, admin: false }])),
  staff: Object.fromEntries(modules.map(m => [m, { view: true, create: true, edit: false, delete: false, admin: false }])),
  viewer: Object.fromEntries(modules.map(m => [m, { view: true, create: false, edit: false, delete: false, admin: false }])),
  guest: Object.fromEntries(modules.map(m => [m, { view: false, create: false, edit: false, delete: false, admin: false }])),
}

export function PermissionMatrixPanel() {
  const [selectedRole, setSelectedRole] = useState("admin")
  const [permissions, setPermissions] = useState(initialPermissions)
  const [searchQuery, setSearchQuery] = useState("")

  const togglePermission = (module: string, action: keyof Permission["actions"]) => {
    setPermissions(prev => ({
      ...prev,
      [selectedRole]: {
        ...prev[selectedRole],
        [module]: {
          ...prev[selectedRole][module],
          [action]: !prev[selectedRole][module][action]
        }
      }
    }))
  }

  const filteredModules = modules.filter(m => 
    m.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Roles sidebar */}
      <div className="lg:col-span-1 space-y-6">
        <DashboardCard title="Roller" icon={<Shield className="size-5" />} glowColor="primary">
          <div className="space-y-2">
            {roles.map((role) => (
              <button
                key={role.id}
                onClick={() => setSelectedRole(role.id)}
                className={cn(
                  "w-full flex items-center gap-3 p-3 rounded-lg transition-all text-left",
                  selectedRole === role.id
                    ? "bg-primary/10 border border-primary/50 shadow-[0_0_15px_rgba(74,222,128,0.2)]"
                    : "hover:bg-secondary/50 border border-transparent"
                )}
              >
                <div className={cn("size-3 rounded-full", role.color)} />
                <div className="flex-1 min-w-0">
                  <p className={cn(
                    "font-medium truncate",
                    selectedRole === role.id ? "text-primary" : "text-foreground"
                  )}>
                    {role.name}
                  </p>
                  <p className="text-xs text-muted-foreground truncate">{role.description}</p>
                </div>
                <span className="text-xs text-muted-foreground">{role.userCount}</span>
              </button>
            ))}
          </div>
          
          <button className="w-full mt-4 flex items-center justify-center gap-2 py-2.5 rounded-lg border border-dashed border-border text-sm text-muted-foreground hover:border-primary hover:text-primary transition-all">
            <Plus className="size-4" />
            Yeni Rol Ekle
          </button>
        </DashboardCard>

        <DashboardCard title="Rol İstatistikleri" icon={<UserCog className="size-5" />} glowColor="cyan">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Toplam Rol</span>
              <span className="text-lg font-bold text-foreground">{roles.length}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Toplam Kullanıcı</span>
              <span className="text-lg font-bold text-foreground">{roles.reduce((sum, r) => sum + r.userCount, 0)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Modül Sayısı</span>
              <span className="text-lg font-bold text-foreground">{modules.length}</span>
            </div>
          </div>
        </DashboardCard>

        <DashboardCard title="Hızlı Eylemler" icon={<FileKey className="size-5" />} glowColor="amber">
          <div className="space-y-2">
            <button className="w-full flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-all">
              <Lock className="size-4 text-muted-foreground" />
              <span className="text-sm text-foreground">Tüm Yetkileri Kilitle</span>
            </button>
            <button className="w-full flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-all">
              <Unlock className="size-4 text-muted-foreground" />
              <span className="text-sm text-foreground">Varsayılana Sıfırla</span>
            </button>
            <button className="w-full flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-all">
              <Settings className="size-4 text-muted-foreground" />
              <span className="text-sm text-foreground">Gelişmiş Ayarlar</span>
            </button>
          </div>
        </DashboardCard>
      </div>

      {/* Permission Matrix */}
      <div className="lg:col-span-3">
        <DashboardCard
          title={`Yetki Matrisi - ${roles.find(r => r.id === selectedRole)?.name}`}
          description="Modül bazlı yetkilendirme kontrolü"
          icon={<ShieldCheck className="size-5" />}
          glowColor="primary"
          size="lg"
        >
          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Modül ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-9 pl-10 pr-4 rounded-lg bg-secondary/50 border border-border/50 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/50 border border-border/50 text-sm text-muted-foreground hover:text-foreground transition-all">
                <Filter className="size-4" />
                Filtrele
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium shadow-[0_0_20px_rgba(74,222,128,0.3)] hover:shadow-[0_0_30px_rgba(74,222,128,0.4)] transition-all">
                Değişiklikleri Kaydet
              </button>
            </div>
          </div>

          {/* Matrix table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Modül</th>
                  <th className="text-center py-3 px-2 text-sm font-medium text-muted-foreground">
                    <div className="flex flex-col items-center gap-1">
                      <Eye className="size-4" />
                      <span>Görüntüle</span>
                    </div>
                  </th>
                  <th className="text-center py-3 px-2 text-sm font-medium text-muted-foreground">
                    <div className="flex flex-col items-center gap-1">
                      <Plus className="size-4" />
                      <span>Oluştur</span>
                    </div>
                  </th>
                  <th className="text-center py-3 px-2 text-sm font-medium text-muted-foreground">
                    <div className="flex flex-col items-center gap-1">
                      <Edit className="size-4" />
                      <span>Düzenle</span>
                    </div>
                  </th>
                  <th className="text-center py-3 px-2 text-sm font-medium text-muted-foreground">
                    <div className="flex flex-col items-center gap-1">
                      <Trash2 className="size-4" />
                      <span>Sil</span>
                    </div>
                  </th>
                  <th className="text-center py-3 px-2 text-sm font-medium text-muted-foreground">
                    <div className="flex flex-col items-center gap-1">
                      <Settings className="size-4" />
                      <span>Yönet</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredModules.map((module, index) => (
                  <tr
                    key={module}
                    className={cn(
                      "border-b border-border/30 hover:bg-secondary/30 transition-colors",
                      index % 2 === 0 && "bg-secondary/10"
                    )}
                  >
                    <td className="py-3 px-4">
                      <span className="text-sm font-medium text-foreground">{module}</span>
                    </td>
                    {(["view", "create", "edit", "delete", "admin"] as const).map((action) => (
                      <td key={action} className="text-center py-3 px-2">
                        <button
                          onClick={() => togglePermission(module, action)}
                          className={cn(
                            "size-8 rounded-lg flex items-center justify-center transition-all",
                            permissions[selectedRole][module][action]
                              ? "bg-primary/20 text-primary shadow-[0_0_10px_rgba(74,222,128,0.3)] hover:bg-primary/30"
                              : "bg-secondary/50 text-muted-foreground hover:bg-secondary"
                          )}
                        >
                          {permissions[selectedRole][module][action] ? (
                            <Check className="size-4" />
                          ) : (
                            <X className="size-4" />
                          )}
                        </button>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Legend */}
          <div className="flex items-center gap-6 mt-6 pt-4 border-t border-border/50">
            <div className="flex items-center gap-2">
              <div className="size-6 rounded bg-primary/20 flex items-center justify-center">
                <Check className="size-3 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Yetkili</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-6 rounded bg-secondary/50 flex items-center justify-center">
                <X className="size-3 text-muted-foreground" />
              </div>
              <span className="text-sm text-muted-foreground">Yetkisiz</span>
            </div>
          </div>
        </DashboardCard>
      </div>
    </div>
  )
}
