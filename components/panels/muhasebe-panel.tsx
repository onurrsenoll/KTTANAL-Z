"use client"

import { useState } from "react"
import {
  Wallet,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
  Plus,
  Filter,
  Download,
  CreditCard,
  Building,
  PiggyBank,
  BarChart3,
} from "lucide-react"
import { StatCard } from "@/components/stat-card"

const transactions = [
  { id: 1, desc: "Tahsilat - Ahmet Yilmaz", type: "gelir", category: "Tahsilat", amount: 45000, date: "14 Mar 2026" },
  { id: 2, desc: "Ofis Kirasi", type: "gider", category: "Sabit Gider", amount: -15000, date: "14 Mar 2026" },
  { id: 3, desc: "Komisyon - Is Ortagi", type: "gider", category: "Komisyon", amount: -4500, date: "13 Mar 2026" },
  { id: 4, desc: "Tahsilat - Fatma Demir", type: "gelir", category: "Tahsilat", amount: 38500, date: "13 Mar 2026" },
  { id: 5, desc: "Personel Maas", type: "gider", category: "Maas", amount: -85000, date: "12 Mar 2026" },
  { id: 6, desc: "Tahsilat - Mehmet Kaya", type: "gelir", category: "Tahsilat", amount: 52000, date: "12 Mar 2026" },
  { id: 7, desc: "Bilirkisi Ucreti", type: "gider", category: "Masraf", amount: -3500, date: "11 Mar 2026" },
  { id: 8, desc: "Poliçe Komisyonu", type: "gelir", category: "Komisyon", amount: 12800, date: "11 Mar 2026" },
]

const accounts = [
  { name: "Ana Kasa", balance: 485200, icon: <Wallet className="size-5" />, color: "primary" },
  { name: "Is Bankasi", balance: 324500, icon: <Building className="size-5" />, color: "chart-2" },
  { name: "Yatirim", balance: 150000, icon: <PiggyBank className="size-5" />, color: "chart-3" },
]

export function MuhasebePanel() {
  const [activeTab, setActiveTab] = useState("ozet")

  const tabs = [
    { id: "ozet", label: "Ozet" },
    { id: "gelir", label: "Gelir" },
    { id: "gider", label: "Gider" },
    { id: "kasa", label: "Kasa/Banka" },
    { id: "raporlar", label: "Raporlar" },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Muhasebe</h1>
          <p className="text-muted-foreground">Finansal islemleri yonetin ve takip edin</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary">
            <Download className="size-4" />
            Rapor Indir
          </button>
          <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90">
            <Plus className="size-4" />
            Yeni Islem
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Toplam Bakiye"
          value="₺959,700"
          icon={<Wallet className="size-6" />}
          trend={{ value: 12, isPositive: true }}
          variant="primary"
        />
        <StatCard
          title="Aylik Gelir"
          value="₺485,200"
          icon={<TrendingUp className="size-6" />}
          trend={{ value: 8, isPositive: true }}
          variant="success"
        />
        <StatCard
          title="Aylik Gider"
          value="₺108,000"
          icon={<TrendingDown className="size-6" />}
          trend={{ value: 3, isPositive: false }}
          variant="danger"
        />
        <StatCard
          title="Net Kar"
          value="₺377,200"
          icon={<BarChart3 className="size-6" />}
          trend={{ value: 15, isPositive: true }}
          variant="default"
        />
      </div>

      {/* Tabs */}
      <div className="flex gap-1 rounded-xl border border-border bg-card p-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Transactions */}
        <div className="lg:col-span-2">
          <div className="rounded-xl border border-border bg-card shadow-sm">
            <div className="flex items-center justify-between border-b border-border p-4">
              <h2 className="font-semibold text-foreground">Son Islemler</h2>
              <button className="flex items-center gap-2 rounded-lg border border-border px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
                <Filter className="size-4" />
                Filtrele
              </button>
            </div>
            <div className="divide-y divide-border">
              {transactions.map((tx) => (
                <div key={tx.id} className="flex items-center justify-between p-4 transition-colors hover:bg-secondary/30">
                  <div className="flex items-center gap-3">
                    <div className={`flex size-10 items-center justify-center rounded-lg ${
                      tx.type === "gelir" ? "bg-chart-3/10" : "bg-destructive/10"
                    }`}>
                      {tx.type === "gelir" ? (
                        <ArrowUpRight className="size-5 text-chart-3" />
                      ) : (
                        <ArrowDownRight className="size-5 text-destructive" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{tx.desc}</p>
                      <p className="text-sm text-muted-foreground">{tx.category}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-semibold ${tx.type === "gelir" ? "text-chart-3" : "text-destructive"}`}>
                      {tx.type === "gelir" ? "+" : ""}{tx.amount.toLocaleString("tr-TR")} ₺
                    </p>
                    <p className="text-sm text-muted-foreground">{tx.date}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-border p-4">
              <button className="w-full rounded-lg border border-border py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary">
                Tum Islemleri Gor
              </button>
            </div>
          </div>
        </div>

        {/* Accounts */}
        <div className="space-y-4">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h2 className="mb-4 font-semibold text-foreground">Hesaplar</h2>
            <div className="space-y-3">
              {accounts.map((account, i) => (
                <div key={i} className="flex items-center justify-between rounded-lg border border-border p-3 transition-colors hover:bg-secondary/50">
                  <div className="flex items-center gap-3">
                    <div className={`flex size-10 items-center justify-center rounded-lg bg-${account.color}/10 text-${account.color}`}>
                      {account.icon}
                    </div>
                    <span className="font-medium text-foreground">{account.name}</span>
                  </div>
                  <span className="font-semibold text-foreground">
                    ₺{account.balance.toLocaleString("tr-TR")}
                  </span>
                </div>
              ))}
            </div>
            <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-dashed border-border py-2 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary">
              <Plus className="size-4" />
              Hesap Ekle
            </button>
          </div>

          {/* Quick Actions */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h2 className="mb-4 font-semibold text-foreground">Hizli Islemler</h2>
            <div className="grid grid-cols-2 gap-2">
              <button className="flex flex-col items-center gap-2 rounded-lg border border-border p-3 transition-colors hover:bg-secondary">
                <ArrowUpRight className="size-5 text-chart-3" />
                <span className="text-xs font-medium text-foreground">Gelir Ekle</span>
              </button>
              <button className="flex flex-col items-center gap-2 rounded-lg border border-border p-3 transition-colors hover:bg-secondary">
                <ArrowDownRight className="size-5 text-destructive" />
                <span className="text-xs font-medium text-foreground">Gider Ekle</span>
              </button>
              <button className="flex flex-col items-center gap-2 rounded-lg border border-border p-3 transition-colors hover:bg-secondary">
                <CreditCard className="size-5 text-primary" />
                <span className="text-xs font-medium text-foreground">Transfer</span>
              </button>
              <button className="flex flex-col items-center gap-2 rounded-lg border border-border p-3 transition-colors hover:bg-secondary">
                <BarChart3 className="size-5 text-chart-4" />
                <span className="text-xs font-medium text-foreground">Rapor</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
