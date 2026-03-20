"use client"

import { useState } from "react"
import {
  Phone,
  Video,
  PhoneOff,
  Mic,
  MicOff,
  Monitor,
  Users,
  MessageSquare,
  Clock,
  TrendingUp,
  Target,
  DollarSign,
  UserPlus,
  Filter,
  Search,
  Star,
  Mail,
  Calendar,
  BarChart3,
} from "lucide-react"
import { DashboardCard } from "@/components/dashboard-card"
import { cn } from "@/lib/utils"

interface Lead {
  id: string
  name: string
  company: string
  value: string
  status: "new" | "contacted" | "qualified" | "proposal" | "won" | "lost"
  lastContact: string
  avatar: string
}

const mockLeads: Lead[] = [
  { id: "1", name: "Mehmet Kara", company: "ABC Teknoloji", value: "₺125,000", status: "proposal", lastContact: "Bugün", avatar: "MK" },
  { id: "2", name: "Elif Şahin", company: "XYZ Holding", value: "₺280,000", status: "qualified", lastContact: "Dün", avatar: "EŞ" },
  { id: "3", name: "Okan Yıldız", company: "DEF Yazılım", value: "₺75,000", status: "new", lastContact: "3 gün önce", avatar: "OY" },
  { id: "4", name: "Selin Ak", company: "GHI Danışmanlık", value: "₺450,000", status: "won", lastContact: "1 hafta önce", avatar: "SA" },
  { id: "5", name: "Burak Demir", company: "JKL İnşaat", value: "₺180,000", status: "contacted", lastContact: "2 gün önce", avatar: "BD" },
]

const statusConfig = {
  new: { label: "Yeni", color: "bg-chart-2 text-chart-2" },
  contacted: { label: "İletişimde", color: "bg-chart-3 text-chart-3" },
  qualified: { label: "Nitelikli", color: "bg-primary text-primary" },
  proposal: { label: "Teklif", color: "bg-chart-4 text-chart-4" },
  won: { label: "Kazanıldı", color: "bg-primary text-primary" },
  lost: { label: "Kaybedildi", color: "bg-chart-5 text-chart-5" },
}

export function CRMPanel() {
  const [activeCall, setActiveCall] = useState(false)
  const [muted, setMuted] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Left sidebar */}
      <div className="lg:col-span-1 space-y-6">
        {/* WebRTC Call Panel */}
        <DashboardCard title="Görüntülü Görüşme" icon={<Video className="size-5" />} glowColor="cyan">
          <div className="space-y-4">
            {activeCall ? (
              <>
                <div className="relative aspect-video bg-secondary rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="size-20 rounded-full bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center text-2xl font-bold text-primary-foreground">
                      MK
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 size-16 bg-card rounded-lg border border-border/50 flex items-center justify-center">
                    <span className="text-xs text-muted-foreground">Sen</span>
                  </div>
                  <div className="absolute top-2 left-2 px-2 py-1 rounded bg-destructive/80 text-destructive-foreground text-xs flex items-center gap-1">
                    <span className="size-2 rounded-full bg-destructive-foreground animate-pulse" />
                    Canlı
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <button
                    onClick={() => setMuted(!muted)}
                    className={cn(
                      "p-3 rounded-full transition-all",
                      muted ? "bg-destructive text-destructive-foreground" : "bg-secondary text-foreground hover:bg-secondary/80"
                    )}
                  >
                    {muted ? <MicOff className="size-5" /> : <Mic className="size-5" />}
                  </button>
                  <button
                    onClick={() => setActiveCall(false)}
                    className="p-3 rounded-full bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-[0_0_20px_rgba(239,68,68,0.4)]"
                  >
                    <PhoneOff className="size-5" />
                  </button>
                  <button className="p-3 rounded-full bg-secondary text-foreground hover:bg-secondary/80">
                    <Monitor className="size-5" />
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="aspect-video bg-secondary/50 rounded-lg flex items-center justify-center border border-border/50 border-dashed">
                  <div className="text-center">
                    <Video className="size-8 mx-auto text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground">Görüşme başlatın</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveCall(true)}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium shadow-[0_0_20px_rgba(74,222,128,0.3)] hover:shadow-[0_0_30px_rgba(74,222,128,0.4)] transition-all"
                  >
                    <Video className="size-4" />
                    Video Ara
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-chart-2 text-card text-sm font-medium shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-all">
                    <Phone className="size-4" />
                    Sesli Ara
                  </button>
                </div>
              </>
            )}
          </div>
        </DashboardCard>

        {/* CRM Stats */}
        <DashboardCard title="Satış Performansı" icon={<TrendingUp className="size-5" />} glowColor="primary">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Target className="size-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Aylık Hedef</p>
                  <p className="text-lg font-bold text-foreground">₺1.2M</p>
                </div>
              </div>
              <span className="text-sm font-medium text-primary">72%</span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <div className="h-full w-[72%] bg-primary rounded-full shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-secondary/50 text-center">
                <p className="text-xl font-bold text-foreground">48</p>
                <p className="text-xs text-muted-foreground">Aktif Fırsatlar</p>
              </div>
              <div className="p-3 rounded-lg bg-secondary/50 text-center">
                <p className="text-xl font-bold text-primary">12</p>
                <p className="text-xs text-muted-foreground">Bu Ay Kazanılan</p>
              </div>
            </div>
          </div>
        </DashboardCard>

        {/* Recent Activities */}
        <DashboardCard title="Son Aktiviteler" icon={<Clock className="size-5" />} glowColor="amber">
          <div className="space-y-3">
            {[
              { icon: <Phone className="size-4" />, text: "Mehmet Kara ile görüşme", time: "10 dk önce" },
              { icon: <Mail className="size-4" />, text: "Teklif gönderildi", time: "1 saat önce" },
              { icon: <Calendar className="size-4" />, text: "Demo planlandı", time: "3 saat önce" },
              { icon: <MessageSquare className="size-4" />, text: "Yeni mesaj alındı", time: "5 saat önce" },
            ].map((activity, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="p-1.5 rounded bg-secondary text-muted-foreground">
                  {activity.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground truncate">{activity.text}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </DashboardCard>
      </div>

      {/* Main content - Pipeline */}
      <div className="lg:col-span-3">
        <DashboardCard
          title="Satış Pipeline"
          description="Potansiyel müşterilerinizi takip edin"
          icon={<BarChart3 className="size-5" />}
          glowColor="primary"
          size="lg"
        >
          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Lead ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-9 pl-10 pr-4 rounded-lg bg-secondary/50 border border-border/50 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium shadow-[0_0_20px_rgba(74,222,128,0.3)] hover:shadow-[0_0_30px_rgba(74,222,128,0.4)] transition-all">
              <UserPlus className="size-4" />
              Yeni Lead
            </button>
          </div>

          {/* Pipeline stages */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mb-6">
            {Object.entries(statusConfig).map(([key, config]) => {
              const count = mockLeads.filter(l => l.status === key).length
              return (
                <div
                  key={key}
                  className="p-3 rounded-lg bg-secondary/50 border border-border/50 text-center"
                >
                  <div className={cn("inline-block w-2 h-2 rounded-full mb-1", config.color.split(" ")[0])} />
                  <p className="text-xs text-muted-foreground">{config.label}</p>
                  <p className="text-lg font-bold text-foreground">{count}</p>
                </div>
              )
            })}
          </div>

          {/* Leads list */}
          <div className="space-y-3">
            {mockLeads.map((lead) => (
              <div
                key={lead.id}
                className="flex items-center gap-4 p-4 rounded-xl border border-border/50 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(74,222,128,0.15)] transition-all bg-secondary/30 group"
              >
                <div className="size-12 rounded-full bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center text-sm font-semibold text-primary-foreground flex-shrink-0">
                  {lead.avatar}
                </div>
                
                <div className="flex-1 min-w-0 grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4 items-center">
                  <div>
                    <h4 className="font-semibold text-foreground truncate">{lead.name}</h4>
                    <p className="text-sm text-muted-foreground truncate">{lead.company}</p>
                  </div>
                  
                  <div className="hidden sm:block">
                    <p className="text-lg font-bold text-foreground">{lead.value}</p>
                    <p className="text-xs text-muted-foreground">Potansiyel Değer</p>
                  </div>
                  
                  <div className="hidden sm:block">
                    <span className={cn(
                      "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium",
                      `${statusConfig[lead.status].color.split(" ")[0]}/10`,
                      statusConfig[lead.status].color.split(" ")[1]
                    )}>
                      <span className={cn("size-1.5 rounded-full", statusConfig[lead.status].color.split(" ")[0])} />
                      {statusConfig[lead.status].label}
                    </span>
                  </div>
                  
                  <div className="hidden sm:block text-right">
                    <p className="text-sm text-muted-foreground">{lead.lastContact}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-all">
                    <Phone className="size-4" />
                  </button>
                  <button className="p-2 rounded-lg bg-chart-2/10 text-chart-2 hover:bg-chart-2/20 transition-all">
                    <Video className="size-4" />
                  </button>
                  <button className="p-2 rounded-lg bg-secondary text-foreground hover:bg-secondary/80 transition-all">
                    <Mail className="size-4" />
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
