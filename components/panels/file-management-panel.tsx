"use client"

import { useState } from "react"
import {
  FolderOpen,
  File,
  FileText,
  Image,
  Film,
  Music,
  Archive,
  Upload,
  Download,
  Trash2,
  Search,
  Grid3X3,
  List,
  MoreVertical,
  Star,
  Clock,
  HardDrive,
} from "lucide-react"
import { DashboardCard } from "@/components/dashboard-card"
import { cn } from "@/lib/utils"

interface FileItem {
  id: string
  name: string
  type: "folder" | "document" | "image" | "video" | "audio" | "archive"
  size: string
  modified: string
  starred?: boolean
}

const mockFiles: FileItem[] = [
  { id: "1", name: "Projeler", type: "folder", size: "2.4 GB", modified: "Bugün", starred: true },
  { id: "2", name: "Müşteri Dosyaları", type: "folder", size: "1.8 GB", modified: "Dün" },
  { id: "3", name: "Sözleşmeler", type: "folder", size: "456 MB", modified: "3 gün önce", starred: true },
  { id: "4", name: "2024_Rapor.pdf", type: "document", size: "2.1 MB", modified: "Bugün" },
  { id: "5", name: "Sunum.pptx", type: "document", size: "15.3 MB", modified: "Dün" },
  { id: "6", name: "logo.png", type: "image", size: "1.2 MB", modified: "1 hafta önce" },
  { id: "7", name: "tanitim.mp4", type: "video", size: "125 MB", modified: "2 hafta önce" },
  { id: "8", name: "arsiv_2023.zip", type: "archive", size: "3.5 GB", modified: "1 ay önce" },
]

const getFileIcon = (type: FileItem["type"]) => {
  switch (type) {
    case "folder":
      return <FolderOpen className="size-5 text-chart-3" />
    case "document":
      return <FileText className="size-5 text-chart-2" />
    case "image":
      return <Image className="size-5 text-primary" />
    case "video":
      return <Film className="size-5 text-chart-4" />
    case "audio":
      return <Music className="size-5 text-chart-5" />
    case "archive":
      return <Archive className="size-5 text-muted-foreground" />
    default:
      return <File className="size-5 text-muted-foreground" />
  }
}

export function FileManagementPanel() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("list")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredFiles = mockFiles.filter((file) =>
    file.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Left sidebar - Stats */}
      <div className="lg:col-span-1 space-y-6">
        <DashboardCard title="Depolama Durumu" icon={<HardDrive className="size-5" />} glowColor="primary">
          <div className="space-y-4">
            <div className="text-center">
              <div className="relative size-32 mx-auto">
                <svg className="size-full -rotate-90" viewBox="0 0 100 100">
                  <circle
                    className="text-secondary stroke-current"
                    strokeWidth="8"
                    fill="none"
                    cx="50"
                    cy="50"
                    r="42"
                  />
                  <circle
                    className="text-primary stroke-current transition-all duration-500"
                    strokeWidth="8"
                    strokeLinecap="round"
                    fill="none"
                    cx="50"
                    cy="50"
                    r="42"
                    strokeDasharray={`${65 * 2.64} ${100 * 2.64}`}
                    style={{ filter: "drop-shadow(0 0 6px rgba(74, 222, 128, 0.5))" }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold text-foreground">65%</span>
                  <span className="text-xs text-muted-foreground">Kullanımda</span>
                </div>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-foreground">
                <span>Kullanılan</span>
                <span className="font-medium">65.2 GB</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Toplam</span>
                <span>100 GB</span>
              </div>
            </div>
          </div>
        </DashboardCard>

        <DashboardCard title="Hızlı Erişim" icon={<Star className="size-5" />} glowColor="amber">
          <div className="space-y-2">
            {mockFiles.filter(f => f.starred).map((file) => (
              <div
                key={file.id}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer"
              >
                {getFileIcon(file.type)}
                <span className="text-sm text-foreground truncate">{file.name}</span>
              </div>
            ))}
          </div>
        </DashboardCard>

        <DashboardCard title="Son Aktiviteler" icon={<Clock className="size-5" />} glowColor="cyan">
          <div className="space-y-3">
            {[
              { action: "Yüklendi", file: "rapor.pdf", time: "2 dk önce" },
              { action: "Düzenlendi", file: "sunum.pptx", time: "15 dk önce" },
              { action: "Silindi", file: "eski_dosya.doc", time: "1 saat önce" },
              { action: "Paylaşıldı", file: "proje.zip", time: "3 saat önce" },
            ].map((activity, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="size-2 rounded-full bg-primary mt-2 shadow-[0_0_8px_rgba(74,222,128,0.5)]" />
                <div>
                  <p className="text-sm text-foreground">
                    <span className="font-medium">{activity.file}</span> {activity.action.toLowerCase()}
                  </p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </DashboardCard>
      </div>

      {/* Main content area */}
      <div className="lg:col-span-3">
        <DashboardCard
          title="Dosya Yöneticisi"
          description="Tüm dosya ve klasörlerinizi yönetin"
          icon={<FolderOpen className="size-5" />}
          glowColor="primary"
          size="lg"
        >
          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Dosya ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-9 pl-10 pr-4 rounded-lg bg-secondary/50 border border-border/50 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>

            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium shadow-[0_0_20px_rgba(74,222,128,0.3)] hover:shadow-[0_0_30px_rgba(74,222,128,0.4)] transition-all">
                <Upload className="size-4" />
                Yükle
              </button>
              <button className="p-2 rounded-lg bg-secondary/50 border border-border/50 text-muted-foreground hover:text-foreground transition-all">
                <Download className="size-4" />
              </button>
              <button className="p-2 rounded-lg bg-secondary/50 border border-border/50 text-muted-foreground hover:text-foreground transition-all">
                <Trash2 className="size-4" />
              </button>
              <div className="flex items-center border border-border/50 rounded-lg overflow-hidden ml-2">
                <button
                  onClick={() => setViewMode("grid")}
                  className={cn(
                    "p-2 transition-all",
                    viewMode === "grid" ? "bg-primary text-primary-foreground" : "bg-secondary/50 text-muted-foreground hover:text-foreground"
                  )}
                >
                  <Grid3X3 className="size-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={cn(
                    "p-2 transition-all",
                    viewMode === "list" ? "bg-primary text-primary-foreground" : "bg-secondary/50 text-muted-foreground hover:text-foreground"
                  )}
                >
                  <List className="size-4" />
                </button>
              </div>
            </div>
          </div>

          {/* File list */}
          {viewMode === "list" ? (
            <div className="space-y-1">
              {/* Header */}
              <div className="grid grid-cols-12 gap-4 px-4 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                <div className="col-span-6">İsim</div>
                <div className="col-span-2">Boyut</div>
                <div className="col-span-3">Değiştirilme</div>
                <div className="col-span-1"></div>
              </div>
              
              {/* Files */}
              {filteredFiles.map((file) => (
                <div
                  key={file.id}
                  className="grid grid-cols-12 gap-4 items-center px-4 py-3 rounded-lg hover:bg-secondary/50 transition-all cursor-pointer group"
                >
                  <div className="col-span-6 flex items-center gap-3">
                    {getFileIcon(file.type)}
                    <span className="text-sm font-medium text-foreground truncate">{file.name}</span>
                    {file.starred && <Star className="size-3 text-chart-3 fill-chart-3" />}
                  </div>
                  <div className="col-span-2 text-sm text-muted-foreground">{file.size}</div>
                  <div className="col-span-3 text-sm text-muted-foreground">{file.modified}</div>
                  <div className="col-span-1 flex justify-end">
                    <button className="p-1 rounded opacity-0 group-hover:opacity-100 hover:bg-secondary transition-all">
                      <MoreVertical className="size-4 text-muted-foreground" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {filteredFiles.map((file) => (
                <div
                  key={file.id}
                  className="p-4 rounded-xl border border-border/50 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(74,222,128,0.15)] transition-all cursor-pointer group bg-secondary/30"
                >
                  <div className="flex items-center justify-center size-12 mx-auto mb-3 rounded-lg bg-secondary/50">
                    {getFileIcon(file.type)}
                  </div>
                  <p className="text-sm font-medium text-foreground text-center truncate">{file.name}</p>
                  <p className="text-xs text-muted-foreground text-center mt-1">{file.size}</p>
                </div>
              ))}
            </div>
          )}
        </DashboardCard>
      </div>
    </div>
  )
}
