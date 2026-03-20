"use client"

import { useState } from "react"
import {
  FolderOpen,
  Users,
  Calculator,
  Building2,
  FileText,
  Wallet,
  Scale,
  Calendar,
  Settings,
  Bell,
  Search,
  ChevronDown,
  Menu,
  X,
  Sun,
  Moon,
  Phone,
  MapPin,
  MessageSquare,
  LogOut,
  User,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "@/hooks/use-theme"
import Image from "next/image"

interface SubMenuItem {
  id: string
  label: string
}

interface NavItem {
  id: string
  label: string
  icon: React.ReactNode
  badge?: number
  subItems?: SubMenuItem[]
}

const navItems: NavItem[] = [
  {
    id: "dosya",
    label: "Dosya Islemleri",
    icon: <FolderOpen className="size-4" />,
    badge: 24,
    subItems: [
      { id: "dosya-liste", label: "Dosya Listesi" },
      { id: "dosya-yeni", label: "Yeni Dosya" },
    ],
  },
  {
    id: "crm",
    label: "CRM / Saha",
    icon: <Phone className="size-4" />,
    badge: 12,
    subItems: [
      { id: "crm-liste", label: "CRM Listesi" },
      { id: "crm-yeni", label: "Yeni Kayit" },
      { id: "crm-arama", label: "Arama Listesi" },
      { id: "saha-dosyalar", label: "Saha Dosyalari" },
      { id: "saha-yeni", label: "Yeni Saha Kaydi" },
    ],
  },
  {
    id: "hesaplamalar",
    label: "Hesaplamalar",
    icon: <Calculator className="size-4" />,
    subItems: [
      { id: "hesap-adk", label: "Arac Deger Kaybi (ADK)" },
      { id: "hesap-bh", label: "Bedeni Hasar (BH)" },
    ],
  },
  {
    id: "paydaslar",
    label: "Paydaslar",
    icon: <Users className="size-4" />,
    subItems: [
      { id: "is-ortaklari", label: "Is Ortaklari" },
      { id: "is-paydaslari", label: "Is Paydaslari" },
      { id: "personel", label: "Personel" },
    ],
  },
  {
    id: "police",
    label: "Police",
    icon: <FileText className="size-4" />,
    badge: 8,
    subItems: [
      { id: "police-liste", label: "Police Listesi" },
      { id: "police-yeni", label: "Yeni Police" },
      { id: "police-yenileme", label: "Yenileme Takibi" },
      { id: "police-tahsilat", label: "Tahsilat / Cari" },
      { id: "police-raporlar", label: "Raporlar" },
      { id: "police-kazanc", label: "Kazanc" },
    ],
  },
  {
    id: "muhasebe",
    label: "Muhasebe",
    icon: <Wallet className="size-4" />,
    subItems: [
      { id: "muhasebe-gelir", label: "Gelir Yonetimi" },
      { id: "muhasebe-gider", label: "Gider Yonetimi" },
      { id: "muhasebe-komisyon", label: "Komisyon / Prim" },
      { id: "muhasebe-kasa", label: "Kasa / Banka" },
      { id: "muhasebe-ortak", label: "Ortak Kasa" },
      { id: "muhasebe-maliyet", label: "Maliyet Analizi" },
      { id: "muhasebe-rapor", label: "Finansal Raporlar" },
      { id: "muhasebe-kapanis", label: "Kapanis Raporu" },
      { id: "muhasebe-aysonu", label: "Ay Sonu Raporu" },
    ],
  },
  {
    id: "ictihat",
    label: "Ictihat",
    icon: <Scale className="size-4" />,
    subItems: [
      { id: "ictihat-yargitay", label: "Yargitay Kararlari" },
      { id: "ictihat-tahkim", label: "Tahkim Kabul Ornekleri" },
      { id: "ictihat-police", label: "Police Limit Tablolari" },
      { id: "ictihat-kusur", label: "Kusur Emsal Dosyalari" },
    ],
  },
  {
    id: "ajanda",
    label: "Ajanda",
    icon: <Calendar className="size-4" />,
    badge: 3,
  },
  {
    id: "sistem",
    label: "Sistem",
    icon: <Settings className="size-4" />,
    subItems: [
      { id: "sistem-kullanici", label: "Kullanici Yonetimi" },
      { id: "sistem-yetki", label: "Yetki Yonetimi" },
      { id: "sistem-firma", label: "Firma Ayarlari" },
      { id: "sistem-sms", label: "SMS Bildirim" },
      { id: "sistem-portal", label: "Portal Ayarlari" },
      { id: "sistem-netsantral", label: "Netsantral" },
      { id: "sistem-guvenlik", label: "Cihaz Guvenligi" },
      { id: "sistem-aktarim", label: "Toplu Aktarim" },
      { id: "sistem-veri", label: "Veri Yonetimi" },
      { id: "sistem-log", label: "Log Kayitlari" },
      { id: "sistem-bildirim", label: "Sistem Bildirimleri" },
      { id: "sistem-tanimlamalar", label: "Tanimlamalar" },
      { id: "sistem-konum", label: "Konum Takibi" },
    ],
  },
]

interface MainNavProps {
  activeModule: string
  onModuleChange: (moduleId: string) => void
}

export function MainNav({ activeModule, onModuleChange }: MainNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const { theme, toggleTheme, mounted } = useTheme()

  const handleNavClick = (item: NavItem) => {
    if (item.subItems) {
      setOpenDropdown(openDropdown === item.id ? null : item.id)
    } else {
      onModuleChange(item.id)
      setOpenDropdown(null)
    }
  }

  const handleSubItemClick = (itemId: string, subItemId: string) => {
    onModuleChange(subItemId)
    setOpenDropdown(null)
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex h-10 max-w-[1920px] items-center justify-between px-4">
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1.5 opacity-90">
              <Phone className="size-3.5" />
              +90 212 XXX XX XX
            </span>
            <span className="hidden items-center gap-1.5 opacity-90 sm:flex">
              <MapPin className="size-3.5" />
              Istanbul, Turkiye
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="flex items-center gap-1.5 rounded-md px-2 py-1 text-sm transition-colors hover:bg-white/10"
            >
              {mounted && (theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />)}
              <span className="hidden sm:inline">{mounted && (theme === "dark" ? "Acik Tema" : "Koyu Tema")}</span>
            </button>
            <div className="h-4 w-px bg-white/20" />
            <button className="flex items-center gap-1.5 rounded-md px-2 py-1 text-sm transition-colors hover:bg-white/10">
              <User className="size-4" />
              <span className="hidden sm:inline">Admin</span>
            </button>
            <button className="flex items-center gap-1.5 rounded-md px-2 py-1 text-sm transition-colors hover:bg-white/10">
              <LogOut className="size-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="border-b border-border bg-card/95 shadow-lg shadow-black/5 backdrop-blur-xl dark:shadow-black/20">
        <div className="mx-auto flex h-16 max-w-[1920px] items-center justify-between px-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative flex size-10 items-center justify-center overflow-hidden rounded-lg bg-primary shadow-lg shadow-primary/25">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/indir%20%281%29-vTkwI0QIkcTzOiEWfTEBin5Ilg2cQy.png"
                alt="MR Hasar Logo"
                width={32}
                height={32}
                className="object-contain brightness-0 invert"
              />
            </div>
            <div className="hidden flex-col sm:flex">
              <span className="text-base font-bold tracking-tight text-foreground">MR HASAR</span>
              <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                Dosya Takip Sistemi
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <div key={item.id} className="relative">
                <button
                  onClick={() => handleNavClick(item)}
                  className={cn(
                    "group relative flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200",
                    activeModule === item.id || activeModule.startsWith(item.id)
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                      : "text-foreground/80 hover:bg-secondary hover:text-foreground"
                  )}
                >
                  <span
                    className={cn(
                      "transition-colors",
                      activeModule === item.id || activeModule.startsWith(item.id)
                        ? "text-primary-foreground"
                        : "text-muted-foreground group-hover:text-foreground"
                    )}
                  >
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                  {item.subItems && (
                    <ChevronDown
                      className={cn(
                        "size-3.5 transition-transform duration-200",
                        openDropdown === item.id && "rotate-180"
                      )}
                    />
                  )}
                  {item.badge && (
                    <span className="ml-1 flex size-5 items-center justify-center rounded-full bg-destructive text-[10px] font-bold text-destructive-foreground">
                      {item.badge}
                    </span>
                  )}
                </button>

                {/* Dropdown Menu */}
                {item.subItems && openDropdown === item.id && (
                  <div className="absolute left-0 top-full z-50 mt-1 min-w-[200px] overflow-hidden rounded-xl border border-border bg-card p-1 shadow-xl shadow-black/10 dark:shadow-black/30">
                    {item.subItems.map((subItem) => (
                      <button
                        key={subItem.id}
                        onClick={() => handleSubItemClick(item.id, subItem.id)}
                        className={cn(
                          "flex w-full items-center rounded-lg px-3 py-2 text-left text-sm transition-colors",
                          activeModule === subItem.id
                            ? "bg-primary text-primary-foreground"
                            : "text-foreground hover:bg-secondary"
                        )}
                      >
                        {subItem.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            <button className="relative flex size-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
              <Search className="size-5" />
            </button>
            <button className="relative flex size-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
              <MessageSquare className="size-5" />
              <span className="absolute -right-0.5 -top-0.5 flex size-4 items-center justify-center rounded-full bg-destructive text-[9px] font-bold text-destructive-foreground">
                5
              </span>
            </button>
            <button className="relative flex size-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
              <Bell className="size-5" />
              <span className="absolute -right-0.5 -top-0.5 flex size-4 items-center justify-center rounded-full bg-destructive text-[9px] font-bold text-destructive-foreground">
                8
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex size-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground lg:hidden"
            >
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="border-t border-border bg-card p-4 lg:hidden">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <div key={item.id}>
                  <button
                    onClick={() => handleNavClick(item)}
                    className={cn(
                      "flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                      activeModule === item.id || activeModule.startsWith(item.id)
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-secondary"
                    )}
                  >
                    <span className="flex items-center gap-2">
                      {item.icon}
                      {item.label}
                    </span>
                    {item.subItems && (
                      <ChevronDown
                        className={cn("size-4 transition-transform", openDropdown === item.id && "rotate-180")}
                      />
                    )}
                  </button>
                  {item.subItems && openDropdown === item.id && (
                    <div className="ml-6 mt-1 flex flex-col gap-1">
                      {item.subItems.map((subItem) => (
                        <button
                          key={subItem.id}
                          onClick={() => handleSubItemClick(item.id, subItem.id)}
                          className={cn(
                            "rounded-lg px-3 py-2 text-left text-sm transition-colors",
                            activeModule === subItem.id
                              ? "bg-primary/10 text-primary"
                              : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                          )}
                        >
                          {subItem.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
