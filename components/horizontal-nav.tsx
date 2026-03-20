"use client"

import { useState } from "react"
import {
  FolderOpen,
  Users,
  Handshake,
  Building2,
  Video,
  UserCircle,
  ShieldCheck,
  Brain,
  Calculator,
  FileBarChart,
  Settings,
  Bell,
  Search,
  ChevronDown,
  Menu,
  X,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  id: string
  label: string
  icon: React.ReactNode
  badge?: number
}

const navItems: NavItem[] = [
  { id: "dosya", label: "Dosya Yönetimi", icon: <FolderOpen className="size-4" /> },
  { id: "personel", label: "Personel", icon: <Users className="size-4" />, badge: 12 },
  { id: "paydas", label: "Paydaş", icon: <Handshake className="size-4" /> },
  { id: "is-ortagi", label: "İş Ortağı", icon: <Building2 className="size-4" /> },
  { id: "crm", label: "CRM + WebRTC", icon: <Video className="size-4" />, badge: 5 },
  { id: "portal", label: "Müşteri Portali", icon: <UserCircle className="size-4" /> },
  { id: "kullanici", label: "Kullanıcı", icon: <Users className="size-4" /> },
  { id: "yetki", label: "Matris Yetki", icon: <ShieldCheck className="size-4" /> },
  { id: "ai-deger", label: "AI Değer Kaybı", icon: <Brain className="size-4" /> },
  { id: "muhasebe", label: "Muhasebe", icon: <Calculator className="size-4" />, badge: 3 },
  { id: "rapor", label: "Raporlar", icon: <FileBarChart className="size-4" /> },
]

interface HorizontalNavProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export function HorizontalNav({ activeTab, onTabChange }: HorizontalNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Glow effect behind header */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      
      {/* Main header */}
      <div className="relative bg-card/80 backdrop-blur-xl border-b border-border/50 shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border/30">
          <div className="flex items-center gap-4">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/30 blur-xl rounded-full" />
                <div className="relative size-10 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-[0_0_20px_rgba(74,222,128,0.3)]">
                  <span className="font-bold text-primary-foreground text-lg">K</span>
                </div>
              </div>
              <div>
                <h1 className="text-lg font-bold text-foreground">Kurumsal Yönetim</h1>
                <p className="text-xs text-muted-foreground">Enterprise Management System</p>
              </div>
            </div>
          </div>

          {/* Search and Actions */}
          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Ara..."
                className="w-64 h-9 pl-10 pr-4 rounded-lg bg-secondary/50 border border-border/50 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
              />
            </div>
            
            <button className="relative p-2 rounded-lg bg-secondary/50 border border-border/50 text-muted-foreground hover:text-foreground hover:bg-secondary transition-all">
              <Bell className="size-5" />
              <span className="absolute -top-1 -right-1 size-5 bg-destructive text-destructive-foreground text-xs rounded-full flex items-center justify-center font-medium">
                8
              </span>
            </button>
            
            <button className="p-2 rounded-lg bg-secondary/50 border border-border/50 text-muted-foreground hover:text-foreground hover:bg-secondary transition-all">
              <Settings className="size-5" />
            </button>

            <div className="flex items-center gap-2 pl-4 border-l border-border/50">
              <div className="size-9 rounded-full bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center shadow-[0_0_15px_rgba(74,222,128,0.3)]">
                <span className="text-sm font-semibold text-primary-foreground">AK</span>
              </div>
              <div className="hidden lg:block">
                <p className="text-sm font-medium text-foreground">Admin Kullanıcı</p>
                <p className="text-xs text-muted-foreground">Sistem Yöneticisi</p>
              </div>
              <ChevronDown className="size-4 text-muted-foreground" />
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-secondary/50 border border-border/50 text-foreground"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {/* Navigation tabs */}
        <nav className="hidden md:block px-4 py-1">
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-thin">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={cn(
                  "group relative flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300",
                  activeTab === item.id
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                )}
              >
                {/* Active background with glow */}
                {activeTab === item.id && (
                  <>
                    <div className="absolute inset-0 bg-primary rounded-lg shadow-[0_0_20px_rgba(74,222,128,0.4),inset_0_1px_0_rgba(255,255,255,0.1)]" />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-lg" />
                  </>
                )}
                
                {/* Hover glow effect */}
                <div className={cn(
                  "absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300",
                  activeTab !== item.id && "group-hover:opacity-100",
                  "bg-gradient-to-b from-primary/10 to-transparent"
                )} />
                
                <span className="relative z-10">{item.icon}</span>
                <span className="relative z-10 whitespace-nowrap">{item.label}</span>
                
                {item.badge && (
                  <span className={cn(
                    "relative z-10 size-5 rounded-full text-xs flex items-center justify-center font-medium",
                    activeTab === item.id
                      ? "bg-white/20 text-primary-foreground"
                      : "bg-primary/20 text-primary"
                  )}>
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border/50 bg-card/95 backdrop-blur-xl">
            <div className="p-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onTabChange(item.id)
                    setMobileMenuOpen(false)
                  }}
                  className={cn(
                    "flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm font-medium transition-all",
                    activeTab === item.id
                      ? "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(74,222,128,0.3)]"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  )}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className={cn(
                      "ml-auto size-6 rounded-full text-xs flex items-center justify-center font-medium",
                      activeTab === item.id
                        ? "bg-white/20 text-primary-foreground"
                        : "bg-primary/20 text-primary"
                    )}>
                      {item.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
