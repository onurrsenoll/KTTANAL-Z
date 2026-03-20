"use client"

import { useState } from "react"
import {
  Calculator,
  Car,
  User,
  FileText,
  TrendingUp,
  Calendar,
  DollarSign,
  AlertTriangle,
  CheckCircle,
  Info,
  Download,
  RefreshCw,
} from "lucide-react"

interface HesaplamaPanelProps {
  type: "adk" | "bh"
}

export function HesaplamaPanel({ type }: HesaplamaPanelProps) {
  const isADK = type === "adk"
  const [isCalculating, setIsCalculating] = useState(false)
  const [result, setResult] = useState<number | null>(null)

  const handleCalculate = () => {
    setIsCalculating(true)
    setTimeout(() => {
      setResult(isADK ? 45750 : 125000)
      setIsCalculating(false)
    }, 1500)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">
            {isADK ? "Arac Deger Kaybi (ADK)" : "Bedeni Hasar (BH)"} Hesaplama
          </h1>
          <p className="text-muted-foreground">
            {isADK ? "AI destekli arac deger kaybi hesaplama" : "AI destekli bedeni hasar tazminat hesaplama"}
          </p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary">
            <FileText className="size-4" />
            Gecmis Hesaplamalar
          </button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Info Card */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              {isADK ? <Car className="size-5 text-primary" /> : <User className="size-5 text-primary" />}
              <h2 className="font-semibold text-foreground">
                {isADK ? "Arac Bilgileri" : "Magdur Bilgileri"}
              </h2>
            </div>

            {isADK ? (
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Arac Markasi</label>
                  <select className="h-10 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20">
                    <option>Marka Secin</option>
                    <option>Mercedes-Benz</option>
                    <option>BMW</option>
                    <option>Audi</option>
                    <option>Volkswagen</option>
                    <option>Toyota</option>
                    <option>Honda</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Arac Modeli</label>
                  <select className="h-10 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20">
                    <option>Model Secin</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Model Yili</label>
                  <input
                    type="number"
                    placeholder="2024"
                    className="h-10 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Kilometre</label>
                  <input
                    type="number"
                    placeholder="45000"
                    className="h-10 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Kaza Tarihi</label>
                  <input
                    type="date"
                    className="h-10 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Hasar Tutari (TL)</label>
                  <input
                    type="number"
                    placeholder="25000"
                    className="h-10 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Magdur Adi Soyadi</label>
                  <input
                    type="text"
                    placeholder="Ad Soyad"
                    className="h-10 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Dogum Tarihi</label>
                  <input
                    type="date"
                    className="h-10 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Cinsiyet</label>
                  <select className="h-10 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20">
                    <option>Secin</option>
                    <option>Erkek</option>
                    <option>Kadin</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Meslek</label>
                  <input
                    type="text"
                    placeholder="Meslek"
                    className="h-10 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Aylik Gelir (TL)</label>
                  <input
                    type="number"
                    placeholder="25000"
                    className="h-10 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Maluliyet Orani (%)</label>
                  <input
                    type="number"
                    placeholder="15"
                    className="h-10 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Damage Details */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <AlertTriangle className="size-5 text-chart-4" />
              <h2 className="font-semibold text-foreground">
                {isADK ? "Hasar Detaylari" : "Saglik Bilgileri"}
              </h2>
            </div>

            {isADK ? (
              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">Hasarli Parcalar</label>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {["On Tampon", "Arka Tampon", "Kaput", "Bagaj", "Sol Camurluk", "Sag Camurluk", "Sol Kapi", "Sag Kapi", "Tavan"].map((part) => (
                      <label key={part} className="flex items-center gap-2 rounded-lg border border-border p-2 transition-colors hover:bg-secondary/50">
                        <input type="checkbox" className="rounded border-border text-primary focus:ring-primary" />
                        <span className="text-sm text-foreground">{part}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Ek Aciklama</label>
                  <textarea
                    rows={3}
                    placeholder="Hasar ile ilgili ek detaylar..."
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Hayat Tablosu</label>
                  <select className="h-10 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20">
                    <option>TRH 2010</option>
                    <option>CSO 1980</option>
                    <option>PMF 1931</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Tedavi Suresi (Gun)</label>
                  <input
                    type="number"
                    placeholder="30"
                    className="h-10 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Saglik Raporu Ozeti</label>
                  <textarea
                    rows={3}
                    placeholder="Saglik raporu detaylari..."
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Action Button */}
          <button
            onClick={handleCalculate}
            disabled={isCalculating}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 disabled:opacity-50"
          >
            {isCalculating ? (
              <>
                <RefreshCw className="size-5 animate-spin" />
                AI Hesapliyor...
              </>
            ) : (
              <>
                <Calculator className="size-5" />
                {isADK ? "Deger Kaybini Hesapla" : "Tazminati Hesapla"}
              </>
            )}
          </button>
        </div>

        {/* Result Card */}
        <div className="space-y-4">
          {result && (
            <div className="rounded-xl border border-chart-3/20 bg-chart-3/5 p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <CheckCircle className="size-5 text-chart-3" />
                <h2 className="font-semibold text-foreground">Hesaplama Sonucu</h2>
              </div>
              <div className="mb-4 text-center">
                <p className="text-sm text-muted-foreground">Tahmini {isADK ? "Deger Kaybi" : "Tazminat"}</p>
                <p className="mt-1 text-4xl font-bold text-chart-3">
                  ₺{result.toLocaleString("tr-TR")}
                </p>
              </div>
              <div className="space-y-2 border-t border-border pt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Hesaplama Tarihi</span>
                  <span className="text-foreground">14 Mar 2026</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">AI Guven Skoru</span>
                  <span className="text-chart-3">%94</span>
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <button className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-border bg-card py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary">
                  <Download className="size-4" />
                  Rapor
                </button>
                <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
                  <FileText className="size-4" />
                  Dosyaya Ekle
                </button>
              </div>
            </div>
          )}

          {/* Info Card */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <Info className="size-5 text-primary" />
              <h2 className="font-semibold text-foreground">Bilgi</h2>
            </div>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                {isADK
                  ? "AI tabanli hesaplama, aracin marka, model, yil ve hasar durumuna gore piyasa degerini analiz eder."
                  : "Hesaplama, TRH 2010 hayat tablosu ve guncel asgari ucret verilerine gore yapilmaktadir."}
              </p>
              <p>
                Sonuclar tahmini olup, resmi bilirkisi raporu yerine gecmez.
              </p>
            </div>
          </div>

          {/* Recent Calculations */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <TrendingUp className="size-5 text-primary" />
              <h2 className="font-semibold text-foreground">Son Hesaplamalar</h2>
            </div>
            <div className="space-y-3">
              {[
                { name: "Ahmet Y.", amount: "₺42,500", date: "13 Mar" },
                { name: "Fatma D.", amount: "₺38,200", date: "12 Mar" },
                { name: "Mehmet K.", amount: "₺51,000", date: "11 Mar" },
              ].map((calc, i) => (
                <div key={i} className="flex items-center justify-between rounded-lg border border-border p-3 transition-colors hover:bg-secondary/50">
                  <div>
                    <p className="font-medium text-foreground">{calc.name}</p>
                    <p className="text-xs text-muted-foreground">{calc.date}</p>
                  </div>
                  <span className="font-semibold text-chart-3">{calc.amount}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
