import React from 'react';
import { ArrowRight, Map, Info, Compass, TreePine, MapPin } from 'lucide-react';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans selection:bg-accent selection:text-black overflow-hidden">

      {/* 1. HERO SECTION */}
      <section className="relative pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Background Decorative Blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-yellow-400/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>

        {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
          <span className="text-sm font-semibold text-gray-800 tracking-wide uppercase">Profil Digital Desa</span>
        </div> */}

        <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tighter leading-[1.1] max-w-5xl">
          Eksplorasi Pesona <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">Pulau Lancang</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-3xl font-medium leading-relaxed">
          Mengenal sejarah pemekaran Kenegerian Simandolak, ragam budaya lokal, dan potensi alam yang menggerakkan ekonomi masyarakat.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-24 relative z-10">
          <Button variant="accent" onClick={() => navigate('/profil')} className="text-lg px-10 py-4 w-full sm:w-auto shadow-yellow-400/20">
            Mulai Jelajah
          </Button>
          <Button variant="outline" onClick={() => navigate('/budaya')} className="text-lg px-10 py-4 w-full sm:w-auto flex items-center justify-center gap-2">
            <Map size={20} />
            Peta Budaya
          </Button>
        </div>

        {/* Hero Visual Mockup */}
      </section>

      {/* 2. DARK STATS SECTION (Referencing the black 70% | 3-6x | 50% section) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-32 relative z-20">
        <div className="bg-gray-900 rounded-[2rem] py-16 px-8 shadow-2xl shadow-gray-900/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-800">
            <div className="text-center pt-8 md:pt-0">
              <h3 className="text-4xl font-black text-white mb-2">1981</h3>
              <p className="text-sm text-gray-400 font-medium">Tahun Pemekaran</p>
            </div>
            <div className="text-center pt-8 md:pt-0">
              <h3 className="text-4xl font-black text-white mb-2">82.5<span className="text-accent text-2xl">Ha</span></h3>
              <p className="text-sm text-gray-400 font-medium">Luas Wilayah Total</p>
            </div>
            <div className="text-center pt-8 md:pt-0">
              <h3 className="text-4xl font-black text-white mb-2">3</h3>
              <p className="text-sm text-gray-400 font-medium">Dusun Utama</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TENTANG DESA (Split Section like "Multi-Host Feature") */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            {/* Image Composition mock */}
            <div className="bg-white aspect-[4/5] rounded-[2rem] border border-gray-200 shadow-xl flex items-center justify-center p-8 relative">
              <div className="absolute top-8 -right-8 bg-white p-4 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-4">
                <div className="w-10 h-10 bg-accent rounded-full"></div>
                <div>
                  <p className="text-sm font-bold">Batas Utara</p>
                  <p className="text-xs text-gray-500">Sei. Kuantan</p>
                </div>
              </div>
              <span className="text-gray-400 font-medium">[Gambar Geografis / Peta]</span>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-black text-gray-900 mb-6 tracking-tight leading-[1.1]">
              Geografis & <br />Sejarah Desa
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Desa Pulau Lancang adalah hasil pemekaran dari Kenegerian Simandolak pada tahun 1981. Dibatasi oleh Sungai Kuantan di Utara dan Desa Siberakun di Selatan, desa ini berkembang menjadi pusat komunitas yang mandiri.
            </p>
            <Button variant="primary" onClick={() => navigate('/profil')} className="flex items-center gap-2 group">
              Selengkapnya
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* 4. HIGHLIGHT BUDAYA */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-black text-gray-900 mb-6 tracking-tight">Kekayaan Budaya</h2>
              <p className="text-lg text-gray-600 leading-relaxed">Melestarikan tradisi, kearifan lokal, dan kesenian yang diwariskan secara turun-temurun oleh leluhur masyarakat Kuantan Singingi.</p>
            </div>
            <Button variant="outline" onClick={() => navigate('/budaya')} className="shrink-0">Lihat Semua Budaya</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Tradisi & Adat",
                desc: "Peran lembaga dan pimpinan adat terus dijaga untuk memastikan keharmonisan kemasyarakatan Desa Pulau Lancang."
              },
              {
                title: "Kesenian Lokal",
                desc: "Ragam kesenian khas yang menjadi identitas daerah dan terus diwariskan kepada generasi muda."
              },
              {
                title: "Pacu Jalur",
                desc: "Tradisi ikonik di Sungai Kuantan yang menjadi kebanggaan masyarakat Kuantan Singingi dan sekitarnya."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#FAFAFA] p-10 rounded-[2rem] border border-gray-200 hover:border-gray-900 transition-colors group cursor-pointer">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-8 border border-gray-200 group-hover:bg-accent group-hover:border-accent transition-colors">
                  <Info size={24} className="text-gray-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HIGHLIGHT POTENSI */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-black text-gray-900 mb-6 tracking-tight">Potensi Utama</h2>
          <p className="text-lg text-gray-600 leading-relaxed">Sektor unggulan yang menjadi tulang punggung pergerakan ekonomi dan kesejahteraan masyarakat.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Pertanian & Sawah",
              desc: "Memiliki lahan persawahan seluas 28,3 Ha untuk padi sawah, serta pertanian palawija yang potensial."
            },
            {
              title: "Ekonomi & BUMDES",
              desc: "Didukung aktivitas perkebunan, Pasar Desa, Koperasi Merah Putih, dan home industri."
            },
            {
              title: "Perkebunan & Ternak",
              desc: "Lahan karet, sawit, serta peternakan sapi, kerbau, ayam dan kambing yang cukup besar."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-10 rounded-[2rem] border border-gray-200 hover:shadow-2xl hover:shadow-gray-200/50 transition-all group cursor-pointer">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-8">{item.desc}</p>
              <div className="h-1 w-12 bg-gray-200 group-hover:bg-accent transition-colors rounded-full"></div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-900 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight">Siap Menjelajahi Desa Kami?</h2>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">Temukan data lengkap, sejarah, peta budaya, dan hubungi perangkat desa melalui portal digital ini.</p>
          <Button variant="accent" onClick={() => navigate('/profil')} className="text-lg px-12 py-5 shadow-lg shadow-yellow-400/20">
            Eksplorasi Profil Desa
          </Button>
        </div>
      </section>

    </div>
  );
};

export default Home;
