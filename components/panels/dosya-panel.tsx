"use client"

import { useState } from "react"
import {
  FolderOpen,
  Search,
  Filter,
  Plus,
  MoreHorizontal,
  Eye,
  Edit,
  Trash2,
  Download,
  ChevronLeft,
  ChevronRight,
  ArrowUpDown,
  CheckCircle2,
  Clock,
  AlertCircle,
  FileText,
} from "lucide-react"
import { StatCard } from "@/components/stat-card"

const files = [
  { id: 1, no: "2024/ADK-1542", client: "Ahmet Yilmaz", tc: "123***789", type: "ADK", stage: "Tahkim Asamasi", status: "aktif", amount: "₺45,000", date: "14 Mar 2026" },
  { id: 2, no: "2024/BH-0892", client: "Fatma Demir", tc: "456***123", type: "BH", stage: "Basvuru", status: "beklemede", amount: "₺120,000", date: "14 Mar 2026" },
  { id: 3, no: "2024/ADK-1541", client: "Mehmet Kaya", tc: "789***456", type: "ADK", stage: "Tamamlandi", status: "tamamlandi", amount: "₺38,500", date: "13 Mar 2026" },
  { id: 4, no: "2024/BH-0891", client: "Ayse Ozturk", tc: "321***654", type: "BH", stage: "Bilirkisi", status: "aktif", amount: "₺85,000", date: "13 Mar 2026" },
  { id: 5, no: "2024/ADK-1540", client: "Ali Celik", tc: "654***987", type: "ADK", stage: "Ekspertiz", status: "aktif", amount: "₺52,000", date: "12 Mar 2026" },
  { id: 6, no: "2024/BH-0890", client: "Zeynep Yildiz", tc: "987***321", type: "BH", stage: "Tahkim Asamasi", status: "aktif", amount: "₺95,000", date: "12 Mar 2026" },
  { id: 7, no: "2024/ADK-1539", client: "Can Aksoy", tc: "147***258", type: "ADK", stage: "Tamamlandi", status: "tamamlandi", amount: "₺41,200", date: "11 Mar 2026" },
  { id: 8, no: "2024/BH-0889", client: "Elif Sahin", tc: "258***369", type: "BH", stage: "Basvuru", status: "beklemede", amount: "₺75,000", date: "11 Mar 2026" },
]

const statusStyles = {
  aktif: { bg: "bg-chart-3/10", text: "text-chart-3", border: "border-chart-3/20", label: "Aktif" },
  beklemede: { bg: "bg-chart-4/10", text: "text-chart-4", border: "border-chart-4/20", label: "Beklemede" },
  tamamlandi: { bg: "bg-primary/10", text: "text-primary", border: "border-primary/20", label: "Tamamlandi" },
}

export function DosyaPanel() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedType, setSelectedType] = useState<string>("all")

  const filteredFiles = files.filter((file) => {
    const matchesSearch = file.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      file.no.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = selectedType === "all" || file.type === selectedType
    return matchesSearch && matchesType
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Dosya Islemleri</h1>
          <p className="text-muted-foreground">Tum dosyalari goruntuleyin ve yonetin</p>
        </div>
        <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90">
          <Plus className="size-4" />
          Yeni Dosya
        </button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Toplam Dosya"
          value="1,542"
          icon={<FolderOpen className="size-6" />}
          variant="primary"
        />
        <StatCard
          title="Aktif Dosyalar"
          value="248"
          icon={<CheckCircle2 className="size-6" />}
          variant="success"
        />
        <StatCard
          title="Bekleyen"
          value="86"
          icon={<Clock className="size-6" />}
          variant="warning"
        />
        <StatCard
          title="Tamamlanan"
          value="1,208"
          icon={<FileText className="size-6" />}
          variant="default"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-1 items-center gap-3">
          <div className="relative flex-1 sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Dosya ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-10 w-full rounded-lg border border-border bg-background pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="h-10 rounded-lg border border-border bg-background px-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <option value="all">Tum Tipler</option>
            <option value="ADK">ADK</option>
            <option value="BH">BH</option>
          </select>
        </div>
        <button className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary">
          <Filter className="size-4" />
          Filtrele
        </button>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-secondary/50">
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">
                  <button className="flex items-center gap-1 hover:text-foreground">
                    Dosya No <ArrowUpDown className="size-3" />
                  </button>
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Musteri</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">TC</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Tip</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Asama</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Durum</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Tutar</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Tarih</th>
                <th className="px-4 py-3 text-right text-sm font-medium text-muted-foreground">Islemler</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredFiles.map((file) => {
                const status = statusStyles[file.status as keyof typeof statusStyles]
                return (
                  <tr key={file.id} className="transition-colors hover:bg-secondary/30">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10">
                          <FolderOpen className="size-4 text-primary" />
                        </div>
                        <span className="font-medium text-foreground">{file.no}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-foreground">{file.client}</td>
                    <td className="px-4 py-3 font-mono text-sm text-muted-foreground">{file.tc}</td>
                    <td className="px-4 py-3">
                      <span className="rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground">
                        {file.type}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{file.stage}</td>
                    <td className="px-4 py-3">
                      <span className={`rounded-full border px-2 py-0.5 text-xs font-medium ${status.bg} ${status.text} ${status.border}`}>
                        {status.label}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-medium text-foreground">{file.amount}</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{file.date}</td>
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

        {/* Pagination */}
        <div className="flex items-center justify-between border-t border-border px-4 py-3">
          <p className="text-sm text-muted-foreground">
            Toplam <span className="font-medium text-foreground">1,542</span> dosyadan{" "}
            <span className="font-medium text-foreground">1-8</span> arasi gosteriliyor
          </p>
          <div className="flex items-center gap-1">
            <button className="flex size-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
              <ChevronLeft className="size-4" />
            </button>
            <button className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              1
            </button>
            <button className="flex size-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
              2
            </button>
            <button className="flex size-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
              3
            </button>
            <span className="px-2 text-muted-foreground">...</span>
            <button className="flex size-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
              193
            </button>
            <button className="flex size-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
