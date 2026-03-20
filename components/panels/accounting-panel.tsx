"use client"

import { useState } from "react"
import {
  Calculator,
  TrendingUp,
  TrendingDown,
  DollarSign,
  CreditCard,
  Receipt,
  PieChart,
  BarChart3,
  ArrowUpRight,
  ArrowDownRight,
  Plus,
  Filter,
  Download,
  Calendar,
  Building2,
  Wallet,
  ArrowRightLeft,
} from "lucide-react"
import { DashboardCard } from "@/components/dashboard-card"
import { cn } from "@/lib/utils"

interface Transaction {
  id: string
  description: string
  category: string
  amount: string
  type: "income" | "expense"
  date: string
  status: "completed" | "pending"
}

const mockTransactions: Transaction[] = [
  { id: "1", description: "ABC Teknoloji - Proje Ödemesi", category: "Gelir", amount: "₺125,000", type: "income", date: "Bugün", status: "completed" },
  { id: "2", description: "Personel Maaşları - Mart", category: "Gider", amount: "₺285,000", type: "expense", date: "Bugün", status: "pending" },
  { id: "3", description: "XYZ Holding - Danışmanlık", category: "Gelir", amount: "₺75,000", type: "income", date: "Dün", status: "completed" },
  { id: "4", description: "Ofis Kirası - Mart", category: "Gider", amount: "₺45,000", type: "expense", date: "Dün", status: "completed" },
  { id: "5", description: "DEF Yazılım - Lisans", category: "Gelir", amount: "₺32,500", type: "income", date: "2 gün önce", status: "completed" },
  { id: "6", description: "Yazılım Abonelikleri", category: "Gider", amount: "₺12,800", type: "expense", date: "3 gün önce", status: "completed" },
]

export function AccountingPanel() {
  const [activeTab, setActiveTab] = useState<"overview" | "income" | "expense">("overview")
  const [period, setPeriod] = useState("month")

  const totalIncome = 847500
  const totalExpense = 523200
  const netProfit = totalIncome - totalExpense

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Stats sidebar */}
      <div className="lg:col-span-1 space-y-6">
        {/* Financial summary */}
        <DashboardCard title="Finansal Özet" icon={<Wallet className="size-5" />} glowColor="primary">
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Net Kar</span>
                <ArrowUpRight className="size-4 text-primary" />
              </div>
              <p className="text-2xl font-bold text-primary">₺{(netProfit / 1000).toFixed(0)}K</p>
              <p className="text-xs text-muted-foreground mt-1">Bu ay</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-secondary/50">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="size-4 text-primary" />
                  <span className="text-xs text-muted-foreground">Gelir</span>
                </div>
                <p className="text-lg font-bold text-foreground">₺847K</p>
              </div>
              <div className="p-3 rounded-lg bg-secondary/50">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingDown className="size-4 text-chart-5" />
                  <span className="text-xs text-muted-foreground">Gider</span>
                </div>
                <p className="text-lg font-bold text-foreground">₺523K</p>
              </div>
            </div>
          </div>
        </DashboardCard>

        {/* Cash flow */}
        <DashboardCard title="Nakit Akışı" icon={<ArrowRightLeft className="size-5" />} glowColor="cyan">
          <div className="space-y-4">
            <div className="relative h-32">
              {/* Simple bar chart visualization */}
              <div className="absolute inset-0 flex items-end justify-around gap-2">
                {[65, 45, 80, 55, 70, 85, 60].map((height, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <div
                      className="w-full bg-primary/20 rounded-t transition-all hover:bg-primary/40"
                      style={{ height: `${height}%` }}
                    >
                      <div
                        className="w-full bg-primary rounded-t shadow-[0_0_10px_rgba(74,222,128,0.3)]"
                        style={{ height: `${height * 0.7}%` }}
                      />
                    </div>
                    <span className="text-[10px] text-muted-foreground">
                      {["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"][i]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Haftalık Değişim</span>
              <span className="text-primary font-medium">+12.5%</span>
            </div>
          </div>
        </DashboardCard>

        {/* Accounts */}
        <DashboardCard title="Hesaplar" icon={<Building2 className="size-5" />} glowColor="amber">
          <div className="space-y-3">
            {[
              { name: "Ana Hesap", bank: "İş Bankası", balance: "₺1,245,000", color: "bg-primary" },
              { name: "Operasyonel", bank: "Garanti", balance: "₺356,800", color: "bg-chart-2" },
              { name: "Yedek Fon", bank: "Akbank", balance: "₺892,500", color: "bg-chart-3" },
            ].map((account, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors cursor-pointer"
              >
                <div className={cn("size-3 rounded-full", account.color)} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{account.name}</p>
                  <p className="text-xs text-muted-foreground">{account.bank}</p>
                </div>
                <span className="text-sm font-semibold text-foreground">{account.balance}</span>
              </div>
            ))}
          </div>
        </DashboardCard>
      </div>

      {/* Main content */}
      <div className="lg:col-span-3 space-y-6">
        {/* KPI Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-card border border-border/50 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(74,222,128,0.15)] transition-all">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <DollarSign className="size-5" />
              </div>
              <span className="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-full">+18%</span>
            </div>
            <p className="text-2xl font-bold text-foreground">₺2.4M</p>
            <p className="text-sm text-muted-foreground">Toplam Gelir</p>
          </div>

          <div className="p-4 rounded-xl bg-card border border-border/50 hover:border-chart-2/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.15)] transition-all">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 rounded-lg bg-chart-2/10 text-chart-2">
                <Receipt className="size-5" />
              </div>
              <span className="text-xs text-chart-5 bg-chart-5/10 px-2 py-0.5 rounded-full">+8%</span>
            </div>
            <p className="text-2xl font-bold text-foreground">₺1.5M</p>
            <p className="text-sm text-muted-foreground">Toplam Gider</p>
          </div>

          <div className="p-4 rounded-xl bg-card border border-border/50 hover:border-chart-3/50 hover:shadow-[0_0_20px_rgba(251,191,36,0.15)] transition-all">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 rounded-lg bg-chart-3/10 text-chart-3">
                <CreditCard className="size-5" />
              </div>
              <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">48</span>
            </div>
            <p className="text-2xl font-bold text-foreground">₺245K</p>
            <p className="text-sm text-muted-foreground">Bekleyen Faturalar</p>
          </div>

          <div className="p-4 rounded-xl bg-card border border-border/50 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(74,222,128,0.15)] transition-all">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <PieChart className="size-5" />
              </div>
              <span className="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-full">+24%</span>
            </div>
            <p className="text-2xl font-bold text-foreground">%37.8</p>
            <p className="text-sm text-muted-foreground">Kar Marjı</p>
          </div>
        </div>

        {/* Transactions */}
        <DashboardCard
          title="İşlem Geçmişi"
          description="Tüm finansal hareketlerinizi takip edin"
          icon={<BarChart3 className="size-5" />}
          glowColor="primary"
          size="lg"
        >
          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              {(["overview", "income", "expense"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                    activeTab === tab
                      ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(74,222,128,0.3)]"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  )}
                >
                  {tab === "overview" && "Tümü"}
                  {tab === "income" && "Gelirler"}
                  {tab === "expense" && "Giderler"}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/50 border border-border/50 text-sm text-muted-foreground hover:text-foreground transition-all">
                <Calendar className="size-4" />
                Bu Ay
              </button>
              <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/50 border border-border/50 text-sm text-muted-foreground hover:text-foreground transition-all">
                <Download className="size-4" />
                Dışa Aktar
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium shadow-[0_0_20px_rgba(74,222,128,0.3)] hover:shadow-[0_0_30px_rgba(74,222,128,0.4)] transition-all">
                <Plus className="size-4" />
                Yeni İşlem
              </button>
            </div>
          </div>

          {/* Transaction list */}
          <div className="space-y-2">
            {mockTransactions
              .filter((t) => {
                if (activeTab === "income") return t.type === "income"
                if (activeTab === "expense") return t.type === "expense"
                return true
              })
              .map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center gap-4 p-4 rounded-xl border border-border/50 hover:border-primary/30 hover:bg-secondary/30 transition-all cursor-pointer group"
                >
                  <div className={cn(
                    "size-10 rounded-xl flex items-center justify-center flex-shrink-0",
                    transaction.type === "income" 
                      ? "bg-primary/10 text-primary" 
                      : "bg-chart-5/10 text-chart-5"
                  )}>
                    {transaction.type === "income" ? (
                      <ArrowDownRight className="size-5" />
                    ) : (
                      <ArrowUpRight className="size-5" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-foreground truncate">{transaction.description}</h4>
                    <p className="text-sm text-muted-foreground">{transaction.category} • {transaction.date}</p>
                  </div>

                  <div className="text-right">
                    <p className={cn(
                      "text-lg font-bold",
                      transaction.type === "income" ? "text-primary" : "text-foreground"
                    )}>
                      {transaction.type === "income" ? "+" : "-"}{transaction.amount}
                    </p>
                    <span className={cn(
                      "text-xs px-2 py-0.5 rounded-full",
                      transaction.status === "completed" 
                        ? "bg-primary/10 text-primary" 
                        : "bg-chart-3/10 text-chart-3"
                    )}>
                      {transaction.status === "completed" ? "Tamamlandı" : "Beklemede"}
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
