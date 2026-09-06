import React from 'react';
import { Map, BookOpen, Music, Waves, ImageIcon } from 'lucide-react';
import Button from '../components/Button';
import pacuImg from '../assets/budaya/pacu.webp';

const Budaya = () => {

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans selection:bg-accent selection:text-black">

      {/* 1. HERO SECTION */}
      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight leading-[1.1] max-w-4xl">
          Budaya Desa <br />
          <span className="text-accent">Pulau Lancang</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl font-medium leading-relaxed">
          Jelajahi peta, tradisi, kesenian, dan warisan budaya desa.
        </p>
      </section>

      {/* 2. PETA BUDAYA (ArcGIS Placeholder) */}
      <section className="pb-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto" id="peta">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">Peta Budaya</h2>
          <p className="text-gray-500">Visualisasi tata letak geografis dan titik budaya.</p>
        </div>

        <div className="bg-white p-4 md:p-8 rounded-[2rem] border border-gray-200 shadow-xl shadow-gray-200/40">
          <div className="relative rounded-2xl overflow-hidden border border-gray-100 bg-gray-50 h-[400px] md:h-[600px] flex items-center justify-center">
            <iframe
              src="/budaya/peta.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
              className="w-full h-full border-none"
              title="Peta Budaya"
            />
          </div>
        </div>
      </section>

      {/* 3. TRADISI & ADAT (Editorial) */}
      {/* <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-200" id="tradisi">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center shrink-0">
              <BookOpen className="text-gray-900" size={24} />
            </div>
            <div>
              <h2 className="text-3xl font-black text-gray-900 tracking-tight">Tradisi & Adat Istiadat</h2>
              <p className="text-sm text-gray-500 font-medium">Kearifan Lokal Desa</p>
            </div>
          </div>

          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-gray-600 leading-relaxed">
              Berdasarkan dokumen Profil Desa Pulau Lancang (2025), arus informasi dan globalisasi yang tidak terbendung menjadi salah satu tantangan besar bagi kehidupan sosial budaya di desa. Hal ini berisiko menyebabkan tergerusnya kearifan lokal yang selama ini menjadi pegangan hidup masyarakat.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Lembaga adat dan pimpinan adat memegang peranan krusial dalam mempertahankan identitas desa. Saat ini, salah satu fokus perhatian pemerintah desa adalah mengoptimalkan kembali peran pimpinan adat serta pengembangan budaya lokal agar dapat bertahan di tengah modernisasi.
            </p>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 my-8 text-center not-prose">
              <p className="text-gray-500 italic text-sm">
                [ Rincian detail mengenai jenis-jenis tradisi belum tersedia di dalam dokumen referensi. Data akan ditambahkan saat inventarisasi selesai. ]
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* 4. KESENIAN LOKAL (Light Grid) */}
      {/* <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto" id="kesenian">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6 text-white shadow-xl shadow-gray-900/20">
            <Music size={28} />
          </div>
          <h2 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">Kesenian Lokal</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Kekayaan seni tradisional yang menjadi identitas masyarakat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-[2rem] border border-gray-200 p-8 hover:shadow-xl hover:-translate-y-1 transition-all text-center group cursor-default">
              <div className="w-12 h-12 bg-gray-50 rounded-full border border-gray-100 flex items-center justify-center mx-auto mb-6 text-gray-400 group-hover:bg-accent group-hover:text-gray-900 group-hover:border-accent transition-colors">
                <Music size={18} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Kesenian {item}</h3>
              <p className="text-sm text-gray-500 leading-relaxed italic">
                [ Placeholder kesenian desa ]
              </p>
            </div>
          ))}
        </div>
      </section> */}

      {/* 5. PACU JALUR (Storytelling) */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-900 text-center relative overflow-hidden" id="pacu-jalur">
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <Waves size={500} className="text-white" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight">Pacu Jalur</h2>
          <p className="text-xl text-gray-300 font-medium mb-12">
            Tradisi Ikonik Kebanggaan Kuantan Singingi
          </p>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-[2rem] p-4 sm:p-8 md:p-12 text-left shadow-2xl shadow-black/50">
            
            <div className="mb-8 rounded-2xl overflow-hidden border border-gray-700 aspect-video md:aspect-[21/9]">
              <img src={pacuImg} alt="Pacu Jalur Tuah Rajo Bintang Nagori" className="w-full h-full object-cover" />
            </div>

            <p className="text-gray-300 leading-relaxed mb-6">
              Dalam kebudayaan Kuantan Singingi, Pacu Jalur memegang peranan penting sebagai perekat tali silaturahmi antar warga desa. Setiap prosesnya melibatkan seluruh lapisan masyarakat tanpa memandang status sosial.
            </p>
            <p className="text-gray-300 leading-relaxed mb-0">
              Desa Pulau Lancang, yang dilewati oleh aliran Sungai Kuantan di sebelah utara (berbatasan dengan Tanjung Simandolak), secara geografis memiliki keterikatan batin dan sejarah yang kuat dengan tradisi perairan ini. Desa ini memiliki jalur kebanggaan yang bernama <strong className="text-accent">TUAH RAJO BINTANG NAGORI</strong>.
            </p>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Budaya;
