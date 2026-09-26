/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import {
  Camera,
  Upload,
  ArrowRight,
  TrendingUp,
  Eye,
  MousePointerClick,
  Copy,
  Check,
  Code2,
  Sparkles,
  ShoppingBag,
  ExternalLink,
  ChevronRight,
  BarChart3
} from 'lucide-react';

// Imported generated assets
import room1Before from './assets/images/room_1_before_1790405527031.jpg';
import room1After from './assets/images/room_1_after_1790405541916.jpg';
import room2Before from './assets/images/room_2_before_1790405552632.jpg';
import room2After from './assets/images/room_2_after_1790405564012.jpg';

export default function App() {
  // Navigation view: 'b2c' or 'b2b'
  const [view, setView] = useState<'b2c' | 'b2b'>('b2c');
  
  // Interactive upload demonstration state
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [processedResult, setProcessedResult] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Standalone code modal for hackathon copy-paste
  const [showCodeModal, setShowCodeModal] = useState<boolean>(false);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);

  // Toggle view handler
  const handleToggleView = () => {
    setView(prev => (prev === 'b2c' ? 'b2b' : 'b2c'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Mock file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target?.result as string);
        simulateProcessing();
      };
      reader.readAsDataURL(file);
    }
  };

  const simulateProcessing = () => {
    setIsProcessing(true);
    setProcessedResult(false);
    setTimeout(() => {
      setIsProcessing(false);
      setProcessedResult(true);
    }, 1800);
  };

  const handleUseDemo = () => {
    setUploadedImage(room1Before);
    simulateProcessing();
  };

  // Standalone index.html code template using Tailwind CDN and pure JS
  const standaloneHTMLCode = `<!DOCTYPE html>
<html lang="az">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>STRUKTUR — Şəkildən 3D reallığa...</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Plus Jakarta Sans', sans-serif; }
  </style>
</head>
<body class="bg-[#FAFAFA] text-neutral-900 antialiased min-h-screen flex flex-col">

  <!-- 1. Navbar (Sticky at top) -->
  <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200">
    <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <!-- Left side: STRUKTUR logo -->
      <a href="#" class="flex items-center gap-2">
        <span class="text-2xl font-black tracking-widest text-neutral-900">STRUKTUR</span>
      </a>

      <!-- Right side: Prominent gold toggle button -->
      <button 
        id="toggle-btn"
        onclick="toggleView()"
        class="bg-[#D4AF37] hover:bg-[#c29e2e] active:scale-95 text-neutral-950 font-bold px-6 py-2.5 rounded-lg shadow-sm transition-all duration-200 whitespace-nowrap text-sm tracking-wide">
        VIP+ Mağaza kimi qoşul
      </button>
    </div>
  </header>

  <!-- 2. B2C View (Main Page) -->
  <div id="b2c-view" class="flex-1">
    <!-- Hero Section -->
    <section class="max-w-4xl mx-auto px-6 pt-16 pb-10 text-center">
      <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 mb-6">
        Şəkildən 3D reallığa...
      </h1>
      <p class="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
        Boş otağınızın şəklini yükləyin, saniyələr içində 4K dizayn və 'Gördüyünü Al' xüsusiyyəti ilə tanış olun.
      </p>
    </section>

    <!-- Upload Section -->
    <section class="max-w-3xl mx-auto px-6 pb-16">
      <div class="border-2 border-dashed border-neutral-300 hover:border-[#D4AF37] bg-white rounded-2xl p-10 md:p-14 text-center transition-all duration-300 shadow-sm flex flex-col items-center justify-center">
        <div class="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 mb-5">
          <!-- Camera Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <p class="text-sm text-neutral-500 mb-6">JPEG, PNG və ya HEIC formatında boş otaq görüntüsü</p>
        <button class="bg-[#171717] hover:bg-neutral-800 text-white font-medium px-8 py-3.5 rounded-xl transition-all duration-200 shadow-sm flex items-center gap-2">
          <span>Otağının şəklini yüklə</span>
        </button>
      </div>
    </section>

    <!-- Examples Section -->
    <section class="max-w-6xl mx-auto px-6 pb-24">
      <div class="border-t border-neutral-200 pt-14 mb-10 text-center">
        <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900">
          Transformasiya Nümunələri
        </h2>
        <p class="text-sm text-neutral-500 mt-2">Bakıdakı mənzillərin real AI və 3D dizayn transformasiyaları</p>
      </div>

      <!-- CSS Grid: 2 side-by-side cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <!-- Card 1 -->
        <div class="bg-white border border-neutral-200 rounded-2xl p-5 shadow-sm">
          <div class="text-sm font-semibold text-neutral-800 mb-4 pb-3 border-b border-neutral-100 flex items-center justify-between">
            <span>Mənzil Qonaq Otağı (Nərimanov)</span>
            <span class="text-xs text-[#D4AF37] font-bold">4K Render</span>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <!-- Əvvəl Placeholder -->
            <div class="bg-neutral-200 rounded-xl h-48 md:h-56 flex flex-col items-center justify-center text-neutral-500 font-semibold border border-neutral-300 relative overflow-hidden">
              <span class="bg-neutral-900/80 text-white text-xs px-3 py-1 rounded-md">Əvvəl</span>
            </div>
            <!-- Sonra Placeholder -->
            <div class="bg-neutral-200 rounded-xl h-48 md:h-56 flex flex-col items-center justify-center text-neutral-500 font-semibold border border-neutral-300 relative overflow-hidden">
              <span class="bg-[#D4AF37] text-neutral-950 text-xs px-3 py-1 rounded-md font-bold">Sonra</span>
            </div>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="bg-white border border-neutral-200 rounded-2xl p-5 shadow-sm">
          <div class="text-sm font-semibold text-neutral-800 mb-4 pb-3 border-b border-neutral-100 flex items-center justify-between">
            <span>Minimalist Yataq Otağı (Yasamal)</span>
            <span class="text-xs text-[#D4AF37] font-bold">4K Render</span>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <!-- Əvvəl Placeholder -->
            <div class="bg-neutral-200 rounded-xl h-48 md:h-56 flex flex-col items-center justify-center text-neutral-500 font-semibold border border-neutral-300 relative overflow-hidden">
              <span class="bg-neutral-900/80 text-white text-xs px-3 py-1 rounded-md">Əvvəl</span>
            </div>
            <!-- Sonra Placeholder -->
            <div class="bg-neutral-200 rounded-xl h-48 md:h-56 flex flex-col items-center justify-center text-neutral-500 font-semibold border border-neutral-300 relative overflow-hidden">
              <span class="bg-[#D4AF37] text-neutral-950 text-xs px-3 py-1 rounded-md font-bold">Sonra</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>

  <!-- 3. B2B View (Dashboard) - Hidden by default -->
  <div id="b2b-view" class="hidden flex-1 max-w-6xl mx-auto px-6 py-12 w-full">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold tracking-tight text-neutral-900">
        VIP+ Analytics Dashboard
      </h1>
      <p class="text-sm text-neutral-500 mt-1">
        Mebel və interyer istehsalçıları üçün real vaxt statistikası
      </p>
    </div>

    <!-- Stats: Two large side-by-side metric cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <!-- Metric 1 -->
      <div class="bg-white border border-neutral-200 rounded-2xl p-8 shadow-sm">
        <p class="text-xs font-semibold text-neutral-400 tracking-wider mb-2">METRİKA 01</p>
        <div class="text-2xl md:text-3xl font-extrabold text-neutral-900 tracking-tight">
          GÖRÜNMƏ: <span class="text-[#D4AF37]">12,482</span>
        </div>
        <p class="text-xs text-neutral-500 mt-3 flex items-center gap-1.5">
          <span class="text-emerald-600 font-medium">↑ 34.2%</span> ötən həftə ilə müqayisədə
        </p>
      </div>

      <!-- Metric 2 -->
      <div class="bg-white border border-neutral-200 rounded-2xl p-8 shadow-sm">
        <p class="text-xs font-semibold text-neutral-400 tracking-wider mb-2">METRİKA 02</p>
        <div class="text-2xl md:text-3xl font-extrabold text-neutral-900 tracking-tight">
          KLİK SAYI: <span class="text-[#D4AF37]">1,205</span>
        </div>
        <p class="text-xs text-neutral-500 mt-3 flex items-center gap-1.5">
          <span class="text-emerald-600 font-medium">↑ 18.7%</span> "Gördüyünü Al" birbaşa konversiyası
        </p>
      </div>
    </div>

    <!-- Chart Area: Large Trend Proqnozu card below stats -->
    <div class="bg-white border border-neutral-200 rounded-2xl p-8 shadow-sm">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-lg font-bold text-neutral-900">Trend Proqnozu</h3>
        <span class="text-xs bg-[#D4AF37]/15 text-[#9a7812] px-2.5 py-1 rounded-md font-semibold">Bakı Regionu</span>
      </div>
      
      <!-- Placeholder for a chart (gray div) -->
      <div class="bg-neutral-100 rounded-xl h-64 border border-neutral-200 flex flex-col items-center justify-center p-6 text-center text-neutral-400 mb-6">
        <p class="font-medium text-sm text-neutral-500">[ İnteraktiv Qrafik Sahəsi / Chart Placeholder ]</p>
      </div>

      <!-- Required Text -->
      <p class="text-base text-neutral-800 leading-relaxed font-medium bg-neutral-50 border-l-4 border-[#D4AF37] p-4 rounded-r-lg">
        Trend Proqnozu: Bakıda bu ay minimalist qara teksturalar 40% daha çox axtarılıb. Mağazalar istehsalı bu dataya görə idarə edir.
      </p>
    </div>
  </div>

  <!-- Footer -->
  <footer class="border-t border-neutral-200 bg-white py-8 mt-auto">
    <div class="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
      <p>© 2026 STRUKTUR Architecture Technologies. Bütün hüquqlar qorunur.</p>
      <p class="text-neutral-400">Şəkildən 3D reallığa... • Bakı, Azərbaycan</p>
    </div>
  </footer>

  <!-- View Toggling JavaScript -->
  <script>
    function toggleView() {
      const b2cView = document.getElementById('b2c-view');
      const b2bView = document.getElementById('b2b-view');
      const toggleBtn = document.getElementById('toggle-btn');

      if (b2cView.classList.contains('hidden')) {
        // Switch to B2C View
        b2cView.classList.remove('hidden');
        b2bView.classList.add('hidden');
        toggleBtn.textContent = 'VIP+ Mağaza kimi qoşul';
      } else {
        // Switch to B2B View
        b2cView.classList.add('hidden');
        b2bView.classList.remove('hidden');
        toggleBtn.textContent = 'Ana Səhifəyə Qayıt';
      }
    }
  </script>
</body>
</html>`;

  const copyStandaloneCode = () => {
    navigator.clipboard.writeText(standaloneHTMLCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-neutral-900 flex flex-col selection:bg-[#D4AF37]/30 selection:text-neutral-950 font-sans">
      
      {/* 1. Navbar (Sticky at top) */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Left side: "STRUKTUR" logo in bold, large text */}
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setView('b2c')}
              className="flex items-center gap-2.5 text-left group transition-opacity"
            >
              <div className="w-9 h-9 bg-neutral-950 text-[#D4AF37] rounded-lg flex items-center justify-center font-black text-xl shadow-sm tracking-tighter">
                S
              </div>
              <span className="text-2xl font-black tracking-widest text-neutral-950 uppercase">
                STRUKTUR
              </span>
            </button>

            {/* Quick helper badge indicating current mode */}
            <span className="hidden sm:inline-flex items-center text-xs font-medium text-neutral-500 border border-neutral-200 px-2.5 py-1 rounded-md bg-neutral-50">
              {view === 'b2c' ? 'B2C Rejimi: Şəkildən 3D' : 'B2B Rejimi: VIP+ Dashboard'}
            </span>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            {/* Direct Copy Standalone HTML Button for Hackathon */}
            <button
              onClick={() => setShowCodeModal(true)}
              className="hidden lg:flex items-center gap-1.5 text-xs font-semibold text-neutral-700 bg-neutral-100 hover:bg-neutral-200 px-3.5 py-2.5 rounded-lg transition-colors border border-neutral-200"
              title="Tək index.html faylını kopyala"
            >
              <Code2 className="w-4 h-4 text-neutral-600" />
              <span>index.html Kodu</span>
            </button>

            {/* Prominent Gold Button with toggling text */}
            <button
              id="toggle-btn"
              onClick={handleToggleView}
              className="bg-[#D4AF37] hover:bg-[#c49f2b] active:scale-[0.98] text-neutral-950 font-bold px-6 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-200 text-sm tracking-wide flex items-center gap-2 cursor-pointer border border-[#c49f2b]"
            >
              <span>{view === 'b2c' ? 'VIP+ Mağaza kimi qoşul' : 'Ana Səhifəyə Qayıt'}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </header>

      {/* 2. B2C View (Main Page) */}
      <div 
        id="b2c-view" 
        className={view === 'b2c' ? 'flex-1' : 'hidden'}
      >
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20 pb-10 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#8C6D1F] bg-[#D4AF37]/15 px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Memarlıq Süni İntellekti</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-950 mb-6 leading-tight">
            Şəkildən 3D reallığa...
          </h1>

          <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Boş otağınızın şəklini yükləyin, saniyələr içində 4K dizayn və 'Gördüyünü Al' xüsusiyyəti ilə tanış olun.
          </p>
        </section>

        {/* Upload Section */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-16">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
          />

          <div
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-neutral-300 hover:border-[#D4AF37] bg-white rounded-2xl p-10 sm:p-14 text-center transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer flex flex-col items-center justify-center group"
          >
            <div className="w-16 h-16 rounded-full bg-neutral-100 group-hover:bg-[#D4AF37]/15 flex items-center justify-center text-neutral-700 group-hover:text-[#9A7812] transition-colors mb-5 shadow-xs">
              <Camera className="w-8 h-8" />
            </div>

            <h3 className="text-lg font-bold text-neutral-900 mb-1">
              Otağınızın şəklini bura sürükləyin
            </h3>
            
            <p className="text-sm text-neutral-500 mb-6">
              və ya cihazınızdan JPEG, PNG, HEIC faylı seçin
            </p>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                fileInputRef.current?.click();
              }}
              className="bg-neutral-900 hover:bg-neutral-800 text-white font-medium px-8 py-3.5 rounded-xl transition-all duration-200 shadow-sm flex items-center gap-2.5 text-sm tracking-wide cursor-pointer"
            >
              <Upload className="w-4 h-4 text-[#D4AF37]" />
              <span>Otağının şəklini yüklə</span>
            </button>

            {/* Quick Demo Option */}
            <div className="mt-5 pt-4 border-t border-neutral-100 w-full flex items-center justify-center gap-2 text-xs text-neutral-500">
              <span>Şəkiliniz yoxdur?</span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleUseDemo();
                }}
                className="text-[#9A7812] font-semibold hover:underline cursor-pointer"
              >
                Nümunə otaqla dərhal test et →
              </button>
            </div>
          </div>

          {/* Upload Simulation Preview Banner */}
          {(isProcessing || processedResult) && (
            <div className="mt-6 bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm">
              {isProcessing && (
                <div className="flex items-center gap-4 py-4 justify-center">
                  <div className="w-6 h-6 border-3 border-[#D4AF37] border-t-transparent rounded-full animate-spin"></div>
                  <span className="text-sm font-semibold text-neutral-700">
                    Otaq strukturu analiz edilir və 4K 3D dizayn render olunur...
                  </span>
                </div>
              )}

              {processedResult && (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200 flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5" /> 3D Transformasiya Tamamlandı
                    </span>
                    <span className="text-xs text-neutral-500">Render müddəti: 1.8 san</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative rounded-xl overflow-hidden border border-neutral-200 bg-neutral-100">
                      <img 
                        src={uploadedImage || room1Before} 
                        alt="Yüklənən Boş Otaq" 
                        className="w-full h-48 object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute top-3 left-3 bg-neutral-900/90 text-white text-xs px-2.5 py-1 rounded font-semibold backdrop-blur-xs">
                        Əvvəl (Yüklənən)
                      </span>
                    </div>

                    <div className="relative rounded-xl overflow-hidden border border-[#D4AF37]/50 bg-neutral-100">
                      <img 
                        src={room1After} 
                        alt="STRUKTUR 4K Transformasiya" 
                        className="w-full h-48 object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute top-3 left-3 bg-[#D4AF37] text-neutral-950 text-xs px-2.5 py-1 rounded font-bold shadow-xs">
                        Sonra (4K Dizayn)
                      </span>
                      <div className="absolute bottom-3 right-3 bg-neutral-900/90 text-white text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-sm">
                        <ShoppingBag className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>Gördüyünü Al (4 məhsul)</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </section>

        {/* Examples Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-24">
          <div className="border-t border-neutral-200 pt-16 mb-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-950">
              Transformasiya Nümunələri
            </h2>
            <p className="text-base text-neutral-500 mt-2 max-w-xl mx-auto">
              Boş mənzillərin real vaxtda AI tərəfindən 4K fotorealistik dizayna çevrilməsi
            </p>
          </div>

          {/* CSS Grid to display 2 side-by-side cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-neutral-100">
                <div>
                  <h3 className="text-base font-bold text-neutral-900">
                    Müasir Qonaq Otağı (Nərimanov Layihəsi)
                  </h3>
                  <p className="text-xs text-neutral-500 mt-0.5">38 m² • Təbii İşıqlanma • Travertin və Palıd</p>
                </div>
                <span className="text-xs bg-[#D4AF37]/15 text-[#8C6D1F] font-bold px-2.5 py-1 rounded-md border border-[#D4AF37]/30">
                  4K 3D Render
                </span>
              </div>

              {/* Two side-by-side placeholders labeled "Əvvəl" and "Sonra" */}
              <div className="grid grid-cols-2 gap-4">
                {/* Əvvəl (Before) */}
                <div className="bg-neutral-200 rounded-xl h-52 sm:h-60 flex flex-col items-center justify-center text-neutral-500 font-semibold border border-neutral-300 relative overflow-hidden group">
                  <img
                    src={room1Before}
                    alt="Əvvəl - Boş Otaq"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-neutral-900/85 backdrop-blur-xs text-white text-xs font-semibold px-2.5 py-1 rounded-md shadow-xs">
                    Əvvəl
                  </div>
                </div>

                {/* Sonra (After) */}
                <div className="bg-neutral-200 rounded-xl h-52 sm:h-60 flex flex-col items-center justify-center text-neutral-500 font-semibold border border-neutral-300 relative overflow-hidden group">
                  <img
                    src={room1After}
                    alt="Sonra - 4K Dizayn"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#D4AF37] text-neutral-950 text-xs font-bold px-2.5 py-1 rounded-md shadow-xs">
                    Sonra
                  </div>
                  <div className="absolute bottom-2 right-2 bg-neutral-950/80 text-neutral-200 text-[11px] px-2 py-0.5 rounded backdrop-blur-xs">
                    Gördüyünü Al ✓
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-neutral-500">
                <span>Dizayn tərzi: Minimalist Premium</span>
                <span className="font-semibold text-neutral-700">Mebel Təchizatçısı: VIP+ Bakı Partnyoru</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-neutral-100">
                <div>
                  <h3 className="text-base font-bold text-neutral-900">
                    Minimalist Master Yataq Otağı (Yasamal)
                  </h3>
                  <p className="text-xs text-neutral-500 mt-0.5">24 m² • Taxta Panellər • İsti İşıqlandırma</p>
                </div>
                <span className="text-xs bg-[#D4AF37]/15 text-[#8C6D1F] font-bold px-2.5 py-1 rounded-md border border-[#D4AF37]/30">
                  4K 3D Render
                </span>
              </div>

              {/* Two side-by-side placeholders labeled "Əvvəl" and "Sonra" */}
              <div className="grid grid-cols-2 gap-4">
                {/* Əvvəl (Before) */}
                <div className="bg-neutral-200 rounded-xl h-52 sm:h-60 flex flex-col items-center justify-center text-neutral-500 font-semibold border border-neutral-300 relative overflow-hidden group">
                  <img
                    src={room2Before}
                    alt="Əvvəl - Boş Yataq Otağı"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-neutral-900/85 backdrop-blur-xs text-white text-xs font-semibold px-2.5 py-1 rounded-md shadow-xs">
                    Əvvəl
                  </div>
                </div>

                {/* Sonra (After) */}
                <div className="bg-neutral-200 rounded-xl h-52 sm:h-60 flex flex-col items-center justify-center text-neutral-500 font-semibold border border-neutral-300 relative overflow-hidden group">
                  <img
                    src={room2After}
                    alt="Sonra - 4K Yataq Otağı"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#D4AF37] text-neutral-950 text-xs font-bold px-2.5 py-1 rounded-md shadow-xs">
                    Sonra
                  </div>
                  <div className="absolute bottom-2 right-2 bg-neutral-950/80 text-neutral-200 text-[11px] px-2 py-0.5 rounded backdrop-blur-xs">
                    Gördüyünü Al ✓
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-neutral-500">
                <span>Dizayn tərzi: Skandinav & Modern Qara</span>
                <span className="font-semibold text-neutral-700">Mebel Təchizatçısı: STRUKTUR Atelye</span>
              </div>
            </div>

          </div>

          {/* Value proposition pill/kicker row */}
          <div className="mt-12 bg-white border border-neutral-200 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-lg font-bold text-neutral-900 mb-1">
                Siz də mebel və ya dekorasiya mağazası sahibisiniz?
              </h4>
              <p className="text-sm text-neutral-500">
                Məhsullarınızı müştərilərin 3D render edilmiş otaqlarında birbaşa satışa çıxarın.
              </p>
            </div>
            <button
              onClick={() => setView('b2b')}
              className="bg-[#D4AF37] hover:bg-[#c29e2e] text-neutral-950 font-bold px-6 py-3 rounded-xl text-sm transition-all duration-200 whitespace-nowrap shrink-0 shadow-sm cursor-pointer"
            >
              VIP+ Mağaza kimi qoşul
            </button>
          </div>
        </section>
      </div>

      {/* 3. B2B View (Dashboard) - Hidden by default */}
      <div 
        id="b2b-view" 
        className={view === 'b2b' ? 'flex-1 max-w-6xl mx-auto px-4 sm:px-6 py-12 w-full' : 'hidden'}
      >
        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-200 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-[#D4AF37] text-neutral-950 text-xs font-extrabold px-2 py-0.5 rounded">
                VIP+ PARTNER
              </span>
              <span className="text-xs text-neutral-400 font-mono">Baku Retail Hub</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950">
              VIP+ Analytics Dashboard
            </h1>
            <p className="text-sm text-neutral-500 mt-1">
              Mebel və interyer mağazaları üçün real vaxt statistikası və axtarış tələbləri
            </p>
          </div>

          <button
            onClick={() => setView('b2c')}
            className="self-start sm:self-center text-xs font-semibold text-neutral-600 hover:text-neutral-900 bg-white border border-neutral-200 px-4 py-2 rounded-lg transition-colors cursor-pointer"
          >
            ← Ana Səhifəyə Qayıt
          </button>
        </div>

        {/* Stats: Two large side-by-side metric cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          
          {/* Metric 1 */}
          <div className="bg-white border border-neutral-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-bl-full pointer-events-none"></div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-neutral-400 tracking-wider">
                GÖSTƏRİCİ 01
              </span>
              <div className="w-9 h-9 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-700">
                <Eye className="w-5 h-5 text-neutral-800" />
              </div>
            </div>

            <div className="text-3xl sm:text-4xl font-black text-neutral-950 tracking-tight font-mono">
              GÖRÜNMƏ: <span className="text-[#D4AF37]">12,482</span>
            </div>

            <div className="mt-4 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
              <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                +28.4% bu həftə
              </span>
              <span className="text-neutral-400">Son 30 günün baxışı</span>
            </div>
          </div>

          {/* Metric 2 */}
          <div className="bg-white border border-neutral-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-bl-full pointer-events-none"></div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-neutral-400 tracking-wider">
                GÖSTƏRİCİ 02
              </span>
              <div className="w-9 h-9 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-700">
                <MousePointerClick className="w-5 h-5 text-[#D4AF37]" />
              </div>
            </div>

            <div className="text-3xl sm:text-4xl font-black text-neutral-950 tracking-tight font-mono">
              KLİK SAYI: <span className="text-[#D4AF37]">1,205</span>
            </div>

            <div className="mt-4 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
              <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                9.65% Konversiya (CTR)
              </span>
              <span className="text-neutral-400">"Gördüyünü Al" düyməsi</span>
            </div>
          </div>

        </div>

        {/* Chart Area: A large "Trend Proqnozu" card below the stats */}
        <div className="bg-white border border-neutral-200 rounded-2xl p-8 shadow-sm mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#D4AF37]" />
                <h3 className="text-xl font-bold text-neutral-950">Trend Proqnozu</h3>
              </div>
              <p className="text-xs text-neutral-500 mt-1">
                Süni intellekt analitikası: Bakı mənzillərində mebel axtarış və render meylləri
              </p>
            </div>
            
            <span className="inline-flex text-xs bg-neutral-100 text-neutral-700 px-3 py-1.5 rounded-lg font-medium self-start sm:self-auto border border-neutral-200">
              Dövr: Cari Ay (Sentyabr)
            </span>
          </div>

          {/* Placeholder for a chart (gray div) */}
          <div className="bg-neutral-100 rounded-xl p-6 border border-neutral-200 mb-6 flex flex-col justify-between">
            {/* Visual simulation of architectural trend bars */}
            <div className="text-xs font-semibold text-neutral-500 mb-4 flex items-center justify-between">
              <span>Məhsul və Tekstura İstehlakı Tələbatı (Bakı şəhəri)</span>
              <span className="text-xs text-[#9A7812] font-mono">Real-vaxt İndeksi</span>
            </div>

            <div className="space-y-3.5">
              <div>
                <div className="flex justify-between text-xs font-medium mb-1">
                  <span className="text-neutral-800 font-semibold">Minimalist Qara Teksturalar & Metal</span>
                  <span className="font-mono text-neutral-900 font-bold">+40% (Aktiv Tələb)</span>
                </div>
                <div className="w-full bg-neutral-200 rounded-full h-3 overflow-hidden">
                  <div className="bg-neutral-900 h-3 rounded-full transition-all duration-700" style={{ width: '88%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-medium mb-1">
                  <span className="text-neutral-700">Təbii Travertin və İsti Daş</span>
                  <span className="font-mono text-neutral-700">+25%</span>
                </div>
                <div className="w-full bg-neutral-200 rounded-full h-3 overflow-hidden">
                  <div className="bg-[#D4AF37] h-3 rounded-full transition-all duration-700" style={{ width: '72%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-medium mb-1">
                  <span className="text-neutral-700">Buxara Qoz Ağacı / Tünd Palıd</span>
                  <span className="font-mono text-neutral-700">+18%</span>
                </div>
                <div className="w-full bg-neutral-200 rounded-full h-3 overflow-hidden">
                  <div className="bg-neutral-400 h-3 rounded-full transition-all duration-700" style={{ width: '58%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-medium mb-1">
                  <span className="text-neutral-700">Klassik Qızıl Haşiyələr</span>
                  <span className="font-mono text-neutral-700">-12% (Azalma)</span>
                </div>
                <div className="w-full bg-neutral-200 rounded-full h-3 overflow-hidden">
                  <div className="bg-neutral-300 h-3 rounded-full transition-all duration-700" style={{ width: '28%' }}></div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-200 flex items-center justify-between text-[11px] text-neutral-400 font-mono">
              <span>Mənbə: STRUKTUR AI 3D Render Sorğuları</span>
              <span>Yenilənmə: Real-Time</span>
            </div>
          </div>

          {/* Exact required text from prompt */}
          <div className="bg-[#FAFAFA] border-l-4 border-[#D4AF37] p-5 rounded-r-xl shadow-xs">
            <p className="text-base text-neutral-900 leading-relaxed font-semibold">
              Trend Proqnozu: Bakıda bu ay minimalist qara teksturalar 40% daha çox axtarılıb. Mağazalar istehsalı bu dataya görə idarə edir.
            </p>
          </div>
        </div>

        {/* Partner Action Bar */}
        <div className="bg-neutral-950 text-white rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-white mb-1">
              Yeni Məhsul Modellərinizi 3D Kataloqa Əlavə Edin
            </h4>
            <p className="text-xs text-neutral-400">
              Müştərilər növbəti renderdə sizin mebellərinizi görsün və dərhal sifariş versin.
            </p>
          </div>
          <button 
            onClick={() => alert("STRUKTUR VIP+ Partnyor müraciətiniz qeydə alındı. Menecerimiz 15 dəqiqə ərzində əlaqə saxlayacaq.")}
            className="bg-[#D4AF37] hover:bg-[#c29e2e] text-neutral-950 font-bold px-6 py-3 rounded-xl text-sm transition-all whitespace-nowrap cursor-pointer shadow-sm"
          >
            Məhsul Əlavə Et (VIP+)
          </button>
        </div>

      </div>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white py-10 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-neutral-900">STRUKTUR</span>
            <span>·</span>
            <span>Şəkildən 3D reallığa...</span>
          </div>

          <div className="flex items-center gap-4 text-neutral-400">
            <span>Minimalist Architectural AI</span>
            <span>·</span>
            <span>Bakı, Azərbaycan</span>
          </div>
        </div>
      </footer>

      {/* Code Modal for 1-Click Hackathon Single index.html Copy */}
      {showCodeModal && (
        <div className="fixed inset-0 z-50 bg-neutral-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-neutral-200 overflow-hidden">
            <div className="p-5 border-b border-neutral-200 flex items-center justify-between bg-neutral-50">
              <div>
                <h3 className="font-bold text-neutral-900 text-base flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-[#9A7812]" />
                  <span>Tək index.html Faylı (Tailwind CDN + JavaScript)</span>
                </h3>
                <p className="text-xs text-neutral-500 mt-0.5">
                  Hackathon təqdimatı üçün tək fayl rejimində birbaşa kopyalayın
                </p>
              </div>
              <button
                onClick={() => setShowCodeModal(false)}
                className="text-neutral-400 hover:text-neutral-700 text-lg font-bold p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="p-4 bg-neutral-900 flex-1 overflow-auto">
              <pre className="text-xs font-mono text-neutral-200 leading-relaxed">
                {standaloneHTMLCode}
              </pre>
            </div>

            <div className="p-4 border-t border-neutral-200 flex items-center justify-between bg-white">
              <span className="text-xs text-neutral-500">
                Tailwind CSS CDN və təmiz vanilla JS daxildir
              </span>
              <button
                onClick={copyStandaloneCode}
                className="bg-[#D4AF37] hover:bg-[#c29e2e] text-neutral-950 font-bold px-5 py-2 rounded-lg text-xs flex items-center gap-2 transition-all cursor-pointer shadow-sm"
              >
                {copiedCode ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-900" />
                    <span>Kopyalandı!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Kodu Kopyala</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
