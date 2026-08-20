import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sprout, Bird, Store, Users, Leaf, ArrowRight } from 'lucide-react';
import Button from '../components/Button';

const Potensi = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans selection:bg-accent selection:text-black">
      
      {/* 1. HERO SECTION */}
      <section className="pt-40 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight leading-[1.1] max-w-4xl">
          Potensi Desa <br/>
          <span className="text-accent">Pulau Lancang</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl font-medium leading-relaxed">
          Mengenal potensi alam, ekonomi, dan sumber daya yang dimiliki Desa Pulau Lancang.
        </p>
      </section>

      {/* 2 & 3. DETAIL POTENSI UTAMA (Split Layout) */}
      <section className="pb-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-32">
        
        {/* A. Pertanian & Perkebunan */}
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <div className="aspect-[4/3] bg-gray-100 rounded-[2rem] border border-gray-200 flex flex-col items-center justify-center text-gray-400 relative overflow-hidden shadow-xl shadow-gray-200/50">
              <Leaf size={48} className="mb-4 opacity-30" />
              <p className="font-medium">[ Visual Lahan Pertanian ]</p>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-green-500/10 rounded-full blur-3xl"></div>
            </div>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm mb-6">
              <div className="w-8 h-8 bg-green-50 text-green-600 rounded-full flex items-center justify-center">
                <Sprout size={16} />
              </div>
              <span className="text-sm font-bold text-gray-900 uppercase tracking-wider">Sumberdaya Alam</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6 tracking-tight">Pertanian & Perkebunan</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Tanah yang subur menjadikan sektor pertanian dan perkebunan sebagai tulang punggung ekonomi bagi sebagian besar masyarakat. Dengan populasi petani sebanyak 252 orang, sektor ini dikelola dengan serius.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                <p className="text-2xl font-black text-gray-900">28,3 <span className="text-sm font-medium text-gray-500">Ha</span></p>
                <p className="text-sm text-gray-500 font-medium mt-1">Padi Sawah</p>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                <p className="text-2xl font-black text-gray-900">5 <span className="text-sm font-medium text-gray-500">Ha</span></p>
                <p className="text-sm text-gray-500 font-medium mt-1">Lahan Karet</p>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                <p className="text-2xl font-black text-gray-900">3 <span className="text-sm font-medium text-gray-500">Ha</span></p>
                <p className="text-sm text-gray-500 font-medium mt-1">Perkebunan Sawit</p>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                <p className="text-2xl font-black text-gray-900">3 <span className="text-sm font-medium text-gray-500">Ha</span></p>
                <p className="text-sm text-gray-500 font-medium mt-1">Palawija</p>
              </div>
            </div>
          </div>
        </div>

        {/* B. Peternakan */}
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full md:w-1/2">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm mb-6">
              <div className="w-8 h-8 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center">
                <Bird size={16} />
              </div>
              <span className="text-sm font-bold text-gray-900 uppercase tracking-wider">Sumberdaya Alam</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6 tracking-tight">Sektor Peternakan</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Masyarakat Desa Pulau Lancang secara aktif memanfaatkan pekarangan dan lahan desa untuk membudidayakan berbagai hewan ternak, baik untuk konsumsi maupun diperdagangkan guna menunjang ekonomi keluarga.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100">
                <span className="font-bold text-gray-900">Ayam & Itik</span>
                <span className="text-gray-500 bg-gray-50 px-3 py-1 rounded-full text-sm font-medium">1.060 Ekor</span>
              </li>
              <li className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100">
                <span className="font-bold text-gray-900">Kambing</span>
                <span className="text-gray-500 bg-gray-50 px-3 py-1 rounded-full text-sm font-medium">20 Ekor</span>
              </li>
              <li className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100">
                <span className="font-bold text-gray-900">Kerbau</span>
                <span className="text-gray-500 bg-gray-50 px-3 py-1 rounded-full text-sm font-medium">18 Ekor</span>
              </li>
              <li className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100">
                <span className="font-bold text-gray-900">Sapi</span>
                <span className="text-gray-500 bg-gray-50 px-3 py-1 rounded-full text-sm font-medium">9 Ekor</span>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <div className="aspect-[4/3] bg-gray-100 rounded-[2rem] border border-gray-200 flex flex-col items-center justify-center text-gray-400 relative overflow-hidden shadow-xl shadow-gray-200/50">
              <Bird size={48} className="mb-4 opacity-30" />
              <p className="font-medium">[ Visual Peternakan ]</p>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>

        {/* C. Ekonomi & UMKM */}
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <div className="aspect-[4/3] bg-gray-100 rounded-[2rem] border border-gray-200 flex flex-col items-center justify-center text-gray-400 relative overflow-hidden shadow-xl shadow-gray-200/50">
              <Store size={48} className="mb-4 opacity-30" />
              <p className="font-medium">[ Visual Aktivitas Ekonomi ]</p>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
            </div>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm mb-6">
              <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                <Store size={16} />
              </div>
              <span className="text-sm font-bold text-gray-900 uppercase tracking-wider">Sumberdaya Ekonomi</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6 tracking-tight">Penggerak Ekonomi Desa</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Infrastruktur dan kelembagaan ekonomi desa terus didorong untuk menopang kemandirian warga. Pertumbuhan ini disokong oleh kehadiran lembaga penggerak ekonomi, meskipun banyak ruang untuk pengembangan lebih lanjut.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Pasar Desa', 'BUMDES', 'KUD', 'Koperasi Merah Putih', 'Home Industri'].map((tag, idx) => (
                <span key={idx} className="px-5 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-700 shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* 4. SECTION PENUTUP */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <Users size={400} className="text-white" />
        </div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">Potensi yang Tumbuh dari Masyarakat</h2>
          <p className="text-lg text-gray-300 mb-12 leading-relaxed">
            Kekuatan utama Desa Pulau Lancang bukan sekadar terletak pada alamnya, melainkan pada ikatan sosial yang erat. Kehadiran organisasi seperti <span className="font-bold text-white">Majlis Taklim, Wirid Yassin, PKK, Posyandu</span>, hingga pergerakan kaum muda, menjadi pondasi kokoh bagi pembangunan sumber daya manusia secara berkelanjutan.
          </p>
          <Button variant="accent" onClick={() => navigate('/profil')} className="gap-2 font-bold !px-8 !py-4 shadow-xl shadow-accent/20">
            Jelajahi Profil Desa <ArrowRight size={18} />
          </Button>
        </div>
      </section>

    </div>
  );
};

export default Potensi;
