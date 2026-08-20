import React from 'react';
import { ArrowDown, MapPin, Users, History, LayoutGrid, Goal } from 'lucide-react';

const Profil = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans selection:bg-accent selection:text-black">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-40 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight leading-[1.1] max-w-4xl">
          Mengenal Desa <br/>
          <span className="text-accent">Pulau Lancang</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-500 mb-16 max-w-2xl font-medium leading-relaxed">
          Desa mandiri hasil pemekaran dengan letak geografis strategis di Kecamatan Benai, Kabupaten Kuantan Singingi.
        </p>
        
        {/* Visual Placeholder */}
        <div className="w-full max-w-5xl aspect-video bg-white rounded-[2rem] border border-gray-200 shadow-2xl shadow-gray-200/50 flex flex-col items-center justify-center overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 to-gray-100"></div>
          <span className="relative z-10 text-gray-400 font-medium flex items-center gap-2">
            [Visual / Foto Desa Placeholder]
          </span>
        </div>
      </section>

      {/* 2. TENTANG DESA (Editorial Layout) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
          <div className="md:w-1/3 shrink-0 sticky top-32">
            <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">Tentang Desa</h2>
            <div className="w-12 h-1 bg-accent rounded-full"></div>
          </div>
          <div className="md:w-2/3 prose prose-lg prose-gray">
            <p className="text-xl text-gray-800 leading-relaxed font-medium mb-6">
              Secara administratif, Desa Pulau Lancang berada di Kecamatan Benai, Kabupaten Kuantan Singingi, Provinsi Riau. 
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Desa ini memiliki aksesibilitas yang baik dengan jarak tempuh ke ibu kota kecamatan sejauh 0,5 Km (sekitar 5 menit) dan jarak ke ibu kota kabupaten sejauh 15 Km (sekitar 20 menit).
            </p>
            <div className="bg-white p-6 rounded-2xl border border-gray-200 mt-8 flex items-start gap-4">
              <Users className="text-accent shrink-0" size={24} />
              <div>
                <h4 className="text-gray-900 font-bold mb-1">Demografi Penduduk</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Berdasarkan data profil, penduduk desa terdiri dari 206 Kepala Keluarga (KK) dengan rincian 225 jiwa laki-laki dan 258 jiwa perempuan.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SEJARAH DESA (Storytelling Timeline) */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-gray-900 mb-6 tracking-tight">Perjalanan Sejarah</h2>
            <p className="text-lg text-gray-500">Rekam jejak pembentukan dan kepemimpinan Desa Pulau Lancang.</p>
          </div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gray-100">
            
            {/* Timeline Item 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-gray-900 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm relative z-10">
                <History size={16} />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#FAFAFA] p-8 rounded-2xl border border-gray-200 hover:border-gray-900 transition-colors">
                <div className="text-accent font-bold mb-2">1981</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Pemekaran Simandolak</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Desa Pulau Lancang resmi dibentuk sebagai hasil pemekaran dari Kenegerian Simandolak, bersama dengan empat desa lainnya (Tebing Tinggi, Koto Simandolak, Pulau Ingu, dan Tanjung Simandolak).</p>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-gray-200 text-gray-600 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm relative z-10">
                <History size={16} />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#FAFAFA] p-8 rounded-2xl border border-gray-200 hover:border-gray-900 transition-colors">
                <div className="text-gray-500 font-bold mb-2">1981 - 1989</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Kepemimpinan Pertama</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Kepala desa pertama dijabat oleh Raja Lasmi yang dipercaya menakhodai langkah awal Desa Pulau Lancang hingga tahun 1989.</p>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-accent text-gray-900 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm relative z-10">
                <History size={16} />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#FAFAFA] p-8 rounded-2xl border border-gray-200 hover:border-gray-900 transition-colors">
                <div className="text-gray-900 font-bold mb-2">1989 - Sekarang</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Perkembangan Berkelanjutan</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Desa terus berkembang melewati berbagai estafet kepemimpinan, hingga saat ini dikelola di bawah pimpinan Pj. Oktaviar (2022 - Sekarang).</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. KONDISI WILAYAH (Minimalist Stats) */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">Kondisi Wilayah</h2>
          <p className="text-lg text-gray-500">Data geografis dan pembagian teritorial.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-900 p-8 rounded-3xl shadow-xl flex flex-col justify-between">
            <LayoutGrid className="text-accent mb-8" size={32} />
            <div>
              <p className="text-gray-400 text-sm font-medium mb-1">Luas Keseluruhan</p>
              <h3 className="text-3xl font-black text-white">82.55<span className="text-lg text-accent ml-1">Ha</span></h3>
            </div>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-gray-200 flex flex-col justify-between">
            <LayoutGrid className="text-gray-400 mb-8" size={32} />
            <div>
              <p className="text-gray-500 text-sm font-medium mb-1">Luas Pemukiman</p>
              <h3 className="text-3xl font-black text-gray-900">400-510<span className="text-lg text-gray-400 ml-1">Ha</span></h3>
            </div>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-gray-200 flex flex-col justify-between">
            <LayoutGrid className="text-gray-400 mb-8" size={32} />
            <div>
              <p className="text-gray-500 text-sm font-medium mb-1">Luas Persawahan</p>
              <h3 className="text-3xl font-black text-gray-900">28.3<span className="text-lg text-gray-400 ml-1">Ha</span></h3>
            </div>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-gray-200 flex flex-col justify-between">
            <Users className="text-gray-400 mb-8" size={32} />
            <div>
              <p className="text-gray-500 text-sm font-medium mb-1">Pembagian Wilayah</p>
              <h3 className="text-3xl font-black text-gray-900">3<span className="text-lg text-gray-400 ml-1">Dusun</span></h3>
            </div>
          </div>
        </div>

        {/* Batas Wilayah Card */}
        <div className="bg-white p-10 rounded-3xl border border-gray-200">
          <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <MapPin className="text-accent" /> Batas Wilayah
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <p className="text-sm text-gray-500 font-medium mb-1">Sebelah Utara</p>
              <p className="text-gray-900 font-bold">Sei. Kuantan / Tj. Simandolak</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium mb-1">Sebelah Selatan</p>
              <p className="text-gray-900 font-bold">Desa Siberakun</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium mb-1">Sebelah Barat</p>
              <p className="text-gray-900 font-bold">Desa Tebing Tinggi</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium mb-1">Sebelah Timur</p>
              <p className="text-gray-900 font-bold">Desa Pulau Tongah</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. VISI & MISI (Placeholder) */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <Goal size={400} className="text-white" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight">Visi & Misi</h2>
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-[2rem] p-12">
            <p className="text-lg text-gray-400 leading-relaxed italic">
              [Teks Visi dan Misi Desa Pulau Lancang belum tersedia di dalam dokumen referensi. Menunggu pembaruan data lebih lanjut.]
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Profil;
