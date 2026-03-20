"use client"

import { useState } from "react"
import { MainNav } from "@/components/main-nav"
import { HomePanel } from "@/components/panels/home-panel"
import { DosyaPanel } from "@/components/panels/dosya-panel"
import { HesaplamaPanel } from "@/components/panels/hesaplama-panel"
import { MuhasebePanel } from "@/components/panels/muhasebe-panel"
import { SistemPanel } from "@/components/panels/sistem-panel"
import { GenericPanel } from "@/components/panels/generic-panel"

const moduleInfo: Record<string, { title: string; description: string }> = {
  "crm-liste": { title: "CRM Listesi", description: "Musteri iliskileri yonetimi" },
  "crm-yeni": { title: "Yeni CRM Kaydi", description: "Yeni musteri kaydi olusturun" },
  "crm-arama": { title: "Arama Listesi", description: "Telefon arama kayitlari" },
  "saha-dosyalar": { title: "Saha Dosyalari", description: "Saha calisma dosyalari" },
  "saha-yeni": { title: "Yeni Saha Kaydi", description: "Yeni saha kaydi olusturun" },
  "is-ortaklari": { title: "Is Ortaklari", description: "Is ortaklari yonetimi" },
  "is-paydaslari": { title: "Is Paydaslari", description: "Is paydaslari yonetimi" },
  "personel": { title: "Personel", description: "Personel yonetimi" },
  "police-liste": { title: "Police Listesi", description: "Sigorta policeleri" },
  "police-yeni": { title: "Yeni Police", description: "Yeni police kaydi" },
  "police-yenileme": { title: "Yenileme Takibi", description: "Police yenileme takibi" },
  "police-tahsilat": { title: "Tahsilat / Cari", description: "Tahsilat ve cari islemler" },
  "police-raporlar": { title: "Police Raporlari", description: "Police raporlari" },
  "police-kazanc": { title: "Kazanc", description: "Komisyon ve kazanc takibi" },
  "ictihat-yargitay": { title: "Yargitay Kararlari", description: "Yargitay emsal kararlari" },
  "ictihat-tahkim": { title: "Tahkim Kabul Ornekleri", description: "Tahkim kabul ornekleri" },
  "ictihat-police": { title: "Police Limit Tablolari", description: "Guncel limit tablolari" },
  "ictihat-kusur": { title: "Kusur Emsal Dosyalari", description: "Kusur emsal dosyalari" },
  "ajanda": { title: "Ajanda", description: "Takvim ve etkinlik yonetimi" },
}

export default function HomePage() {
  const [activeModule, setActiveModule] = useState("home")

  const renderContent = () => {
    // Home
    if (activeModule === "home") {
      return <HomePanel />
    }

    // Dosya Islemleri
    if (activeModule === "dosya" || activeModule.startsWith("dosya-")) {
      return <DosyaPanel />
    }

    // Hesaplamalar
    if (activeModule === "hesap-adk") {
      return <HesaplamaPanel type="adk" />
    }
    if (activeModule === "hesap-bh") {
      return <HesaplamaPanel type="bh" />
    }
    if (activeModule === "hesaplamalar") {
      return <HesaplamaPanel type="adk" />
    }

    // Muhasebe
    if (activeModule.startsWith("muhasebe")) {
      return <MuhasebePanel />
    }

    // Sistem
    if (activeModule.startsWith("sistem")) {
      return <SistemPanel />
    }

    // CRM
    if (activeModule === "crm" || activeModule.startsWith("crm-") || activeModule.startsWith("saha-")) {
      const info = moduleInfo[activeModule] || { title: "CRM / Saha", description: "Musteri iliskileri ve saha yonetimi" }
      return <GenericPanel moduleId="crm" title={info.title} description={info.description} />
    }

    // Paydaslar
    if (activeModule === "paydaslar" || activeModule.startsWith("is-") || activeModule === "personel") {
      const info = moduleInfo[activeModule] || { title: "Paydaslar", description: "Is ortaklari ve paydaslar" }
      return <GenericPanel moduleId="paydaslar" title={info.title} description={info.description} />
    }

    // Police
    if (activeModule === "police" || activeModule.startsWith("police-")) {
      const info = moduleInfo[activeModule] || { title: "Police", description: "Sigorta police yonetimi" }
      return <GenericPanel moduleId="police" title={info.title} description={info.description} />
    }

    // Ictihat
    if (activeModule === "ictihat" || activeModule.startsWith("ictihat-")) {
      const info = moduleInfo[activeModule] || { title: "Ictihat", description: "Hukuki ictihat veritabani" }
      return <GenericPanel moduleId="ictihat" title={info.title} description={info.description} />
    }

    // Ajanda
    if (activeModule === "ajanda") {
      return <GenericPanel moduleId="ajanda" title="Ajanda" description="Takvim ve etkinlik yonetimi" />
    }

    // Default
    return <HomePanel />
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Ambient background effects */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-chart-2/5 blur-3xl" />
      </div>

      {/* Navigation */}
      <MainNav activeModule={activeModule} onModuleChange={setActiveModule} />

      {/* Main content */}
      <main className="relative mx-auto max-w-[1920px] p-4 lg:p-6">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="relative mt-8 border-t border-border bg-card/50 backdrop-blur-sm">
        <div className="mx-auto max-w-[1920px] px-4 py-4">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © 2026 MR Hasar Danismanlik. Tum haklari saklidir.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">v2.5.0</span>
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-chart-3 shadow-[0_0_8px] shadow-chart-3/60" />
                <span className="text-sm text-muted-foreground">Sistem Aktif</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
