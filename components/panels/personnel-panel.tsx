"use client"

import { useState } from "react"
import {
  Users,
  UserPlus,
  Mail,
  Phone,
  MapPin,
  Building,
  Search,
  Filter,
  MoreVertical,
  TrendingUp,
  TrendingDown,
  UserCheck,
  UserX,
  Calendar,
} from "lucide-react"
import { DashboardCard } from "@/components/dashboard-card"
import { cn } from "@/lib/utils"

interface Employee {
  id: string
  name: string
  role: string
  department: string
  email: string
  phone: string
  status: "active" | "away" | "offline"
  avatar: string
}

const mockEmployees: Employee[] = [
  { id: "1", name: "Ahmet Yılmaz", role: "Yazılım Müh.", department: "IT", email: "ahmet@sirket.com", phone: "+90 532 111 2233", status: "active", avatar: "AY" },
  { id: "2", name: "Fatma Demir", role: "Proje Yöneticisi", department: "Yönetim", email: "fatma@sirket.com", phone: "+90 533 222 3344", status: "active", avatar: "FD" },
  { id: "3", name: "Mehmet Kaya", role: "Muhasebeci", department: "Finans", email: "mehmet@sirket.com", phone: "+90 534 333 4455", status: "away", avatar: "MK" },
  { id: "4", name: "Ayşe Öztürk", role: "İK Uzmanı", department: "İK", email: "ayse@sirket.com", phone: "+90 535 444 5566", status: "active", avatar: "AÖ" },
  { id: "5", name: "Can Yıldırım", role: "Satış Temsilcisi", department: "Satış", email: "can@sirket.com", phone: "+90 536 555 6677", status: "offline", avatar: "CY" },
  { id: "6", name: "Zeynep Arslan", role: "Grafik Tasarımcı", department: "Pazarlama", email: "zeynep@sirket.com", phone: "+90 537 666 7788", status: "active", avatar: "ZA" },
]

const statusColors = {
  active: "bg-primary shadow-[0_0_8px_rgba(74,222,128,0.6)]",
  away: "bg-chart-3 shadow-[0_0_8px_rgba(251,191,36,0.6)]",
  offline: "bg-muted-foreground",
}

export function PersonnelPanel() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterDept, setFilterDept] = useState("all")

  const departments = ["all", ...new Set(mockEmployees.map((e) => e.department))]

  const filteredEmployees = mockEmployees.filter((emp) => {
    const matchesSearch = emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.role.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesDept = filterDept === "all" || emp.department === filterDept
    return matchesSearch && matchesDept
  })

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Stats */}
      <div className="lg:col-span-1 space-y-6">
        <DashboardCard title="Personel Özeti" icon={<Users className="size-5" />} glowColor="primary">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 rounded-lg bg-secondary/50 text-center">
              <p className="text-2xl font-bold text-foreground">248</p>
              <p className="text-xs text-muted-foreground">Toplam Personel</p>
            </div>
            <div className="p-3 rounded-lg bg-secondary/50 text-center">
              <p className="text-2xl font-bold text-primary">186</p>
              <p className="text-xs text-muted-foreground">Aktif</p>
            </div>
            <div className="p-3 rounded-lg bg-secondary/50 text-center">
              <p className="text-2xl font-bold text-chart-3">42</p>
              <p className="text-xs text-muted-foreground">İzinli</p>
            </div>
            <div className="p-3 rounded-lg bg-secondary/50 text-center">
              <p className="text-2xl font-bold text-chart-5">20</p>
              <p className="text-xs text-muted-foreground">Çevrimdışı</p>
            </div>
          </div>
        </DashboardCard>

        <DashboardCard title="Departman Dağılımı" icon={<Building className="size-5" />} glowColor="cyan">
          <div className="space-y-3">
            {[
              { name: "IT", count: 45, percent: 18, color: "bg-primary" },
              { name: "Satış", count: 62, percent: 25, color: "bg-chart-2" },
              { name: "Finans", count: 38, percent: 15, color: "bg-chart-3" },
              { name: "Pazarlama", count: 51, percent: 21, color: "bg-chart-4" },
              { name: "İK", count: 52, percent: 21, color: "bg-chart-5" },
            ].map((dept, index) => (
              <div key={index} className="space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-foreground">{dept.name}</span>
                  <span className="text-muted-foreground">{dept.count} kişi</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className={cn("h-full rounded-full transition-all duration-500", dept.color)}
                    style={{ width: `${dept.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </DashboardCard>

        <DashboardCard title="Yaklaşan İzinler" icon={<Calendar className="size-5" />} glowColor="amber">
          <div className="space-y-3">
            {[
              { name: "Ahmet Yılmaz", date: "15-20 Mart", type: "Yıllık İzin" },
              { name: "Fatma Demir", date: "18 Mart", type: "Hastalık" },
              { name: "Can Yıldırım", date: "22-25 Mart", type: "Yıllık İzin" },
            ].map((leave, index) => (
              <div key={index} className="flex items-center gap-3 p-2 rounded-lg bg-secondary/30">
                <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-medium text-primary">
                  {leave.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{leave.name}</p>
                  <p className="text-xs text-muted-foreground">{leave.date} • {leave.type}</p>
                </div>
              </div>
            ))}
          </div>
        </DashboardCard>
      </div>

      {/* Main content */}
      <div className="lg:col-span-3">
        <DashboardCard
          title="Personel Listesi"
          description="Tüm çalışanları görüntüleyin ve yönetin"
          icon={<Users className="size-5" />}
          glowColor="primary"
          size="lg"
        >
          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Personel ara..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-9 pl-10 pr-4 rounded-lg bg-secondary/50 border border-border/50 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div className="relative">
                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <select
                  value={filterDept}
                  onChange={(e) => setFilterDept(e.target.value)}
                  className="h-9 pl-10 pr-8 rounded-lg bg-secondary/50 border border-border/50 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 appearance-none cursor-pointer"
                >
                  <option value="all">Tüm Departmanlar</option>
                  {departments.filter(d => d !== "all").map((dept) => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>
            </div>

            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium shadow-[0_0_20px_rgba(74,222,128,0.3)] hover:shadow-[0_0_30px_rgba(74,222,128,0.4)] transition-all">
              <UserPlus className="size-4" />
              Yeni Personel
            </button>
          </div>

          {/* Employee grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {filteredEmployees.map((employee) => (
              <div
                key={employee.id}
                className="p-4 rounded-xl border border-border/50 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(74,222,128,0.15)] transition-all bg-secondary/30 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="size-12 rounded-full bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center text-sm font-semibold text-primary-foreground">
                        {employee.avatar}
                      </div>
                      <div className={cn(
                        "absolute -bottom-0.5 -right-0.5 size-3.5 rounded-full border-2 border-card",
                        statusColors[employee.status]
                      )} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{employee.name}</h4>
                      <p className="text-sm text-muted-foreground">{employee.role}</p>
                    </div>
                  </div>
                  <button className="p-1 rounded opacity-0 group-hover:opacity-100 hover:bg-secondary transition-all">
                    <MoreVertical className="size-4 text-muted-foreground" />
                  </button>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Building className="size-4" />
                    <span>{employee.department}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="size-4" />
                    <span className="truncate">{employee.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="size-4" />
                    <span>{employee.phone}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border/50">
                  <button className="flex-1 py-2 px-3 rounded-lg bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-all">
                    Profil
                  </button>
                  <button className="flex-1 py-2 px-3 rounded-lg bg-secondary text-foreground text-sm font-medium hover:bg-secondary/80 transition-all">
                    Mesaj
                  </button>
                </div>
              </div>
            ))}
          </div>
        </DashboardCard>
      </div>
    </div>
  )
}
