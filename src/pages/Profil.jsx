import React from 'react';
import { ArrowDown, MapPin, Users, History, LayoutGrid, Goal, Shield, User, Award } from 'lucide-react';
import balaiDesaImg from '../assets/bala-desa.webp';

const leaders = [
  { name: 'Raja Lasmi', period: '1981 - 1989', status: '' },
  { name: 'Saharudin', period: '1989 - 1996', status: '' },
  { name: 'Suhardiman', period: '1996 - 2004', status: '' },
  { name: 'Jopandi', period: '2004 - 2008', status: '' },
  { name: 'Jopandi', period: '2008 - 2014', status: '' },
  { name: 'Arhadi Usman', period: '2014 - 2015', status: 'Plt' },
  { name: 'Sugiarto', period: '2015 - 2021', status: '' },
  { name: 'Deppi Noprizal, S.Pd, MM', period: '2021 - 2022', status: 'Pj' },
  { name: 'Oktaviar', period: '2022 - Sekarang', status: 'Pj' },
];

const aparat = [
  { name: 'Oktaviar', role: 'Kepala Desa' },
  { name: 'Jimmi Alpon', role: 'Sekretaris Desa' },
  { name: 'Candra', role: 'Kepala Seksi Pemerintahan' },
  { name: 'Ivo Alidra YS', role: 'Kepala Seksi Kesejateraan' },
  { name: 'Risky Amelia', role: 'Kepala Seksi Pelayanan' },
  { name: 'Riko Saputra', role: 'Kepala Urusan Keuangan' },
  { name: 'Yulmiadi', role: 'Kepala Urusan Umum dan TU' },
  { name: 'Tabrani', role: 'Kepala Urusan Perencanaan' },
  { name: 'Sery', role: 'Kepala Dusun Suka Maju' },
  { name: 'Sardi', role: 'Kepala Dusun Suka Karya' },
  { name: 'Sardiman', role: 'Kepala Dusun Suka Tani' },
  { name: 'Zulheri', role: 'Ketua RW 01' },
  { name: 'Sasli Rais', role: 'Ketua RT 01' },
  { name: 'Risno Ardi', role: 'Ketua RT 02' },
  { name: 'Roki Putra', role: 'Ketua RW 02' },
  { name: 'Jusep Suhendra', role: 'Ketua RT 01' },
  { name: 'Nesulwen', role: 'Ketua RT 02' },
  { name: 'Deki Rianto', role: 'Ketua RW 03' },
  { name: 'Aspendi', role: 'Ketua RT 01' },
  { name: 'Aprisal', role: 'Ketua RT 02' },
];

const bpd = [
  { name: 'Drs Darmadi', role: 'Ketua' },
  { name: 'Rumita', role: 'Wakil Ketua' },
  { name: 'Mohm Muluddin', role: 'Sekretaris' },
  { name: 'Supelmi', role: 'Anggota' },
  { name: 'Lyza Gusdinarti', role: 'Anggota' },
];

const Profil = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans selection:bg-accent selection:text-black">

      {/* 1. HERO SECTION */}
      <section className="relative pt-40 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight leading-[1.1] max-w-4xl">
          Mengenal Desa <br />
          <span className="text-accent">Pulau Lancang</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-500 mb-16 max-w-2xl font-medium leading-relaxed">
          Desa mandiri hasil pemekaran dengan letak geografis strategis di Kecamatan Benai, Kabupaten Kuantan Singingi.
        </p>

        {/* Visual Placeholder */}
        <div className="w-full max-w-5xl aspect-video bg-white rounded-[2rem] border border-gray-200 shadow-2xl shadow-gray-200/50 flex items-center justify-center overflow-hidden relative">
          <img src={balaiDesaImg} alt="Balai Desa Pulau Lancang" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* 2. TENTANG DESA (Editorial Layout) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
          <div className="md:w-1/3 shrink-0">
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
            <div className="bg-white p-6 rounded-2xl border border-gray-200 mt-8">
              <div className="flex items-start gap-4 mb-4">
                <Users className="text-accent shrink-0" size={24} />
                <div>
                  <h4 className="text-gray-900 font-bold mb-1">Demografi Penduduk</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Total penduduk 641 jiwa yang tergabung dalam 223 Kepala Keluarga (KK).</p>
                </div>
              </div>
              <div className="text-gray-600 text-sm leading-relaxed md:ml-10">
                Secara spesifik, dari total penduduk tersebut terdapat 317 jiwa laki-laki dan 324 jiwa perempuan. Berdasarkan rentang usia, mayoritas penduduk berada pada kelompok usia produktif 15 - 56 tahun (378 jiwa), diikuti oleh kelompok usia di bawah 15 tahun (134 jiwa), dan kelompok usia di atas 56 tahun (122 jiwa).
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 & 4 & 5. STRUKTUR PEMERINTAHAN & SEJARAH (Compact Layout) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12">

          {/* Sejarah Kepemimpinan (Col span 5) */}
          <div className="lg:col-span-5">
            <div className="mb-8">
              <h2 className="text-3xl font-black text-gray-900 mb-2 tracking-tight">Sejarah Kepemimpinan</h2>
              <p className="text-gray-500">Rekam jejak Kepala Desa dari masa ke masa.</p>
            </div>
            <div className="bg-[#FAFAFA] border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
              {leaders.map((leader, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 border-b border-gray-200/60 last:border-0 hover:bg-white transition-colors">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${leader.status ? 'bg-accent text-gray-900' : 'bg-gray-900 text-white'}`}>
                      {leader.status ? <Award size={16} /> : <History size={16} />}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm md:text-base flex items-center gap-2">
                        {leader.name}
                        {leader.status && <span className="text-[10px] bg-accent/20 text-gray-900 px-1.5 py-0.5 rounded font-bold uppercase">{leader.status}</span>}
                      </h3>
                    </div>
                  </div>
                  <div className="text-xs md:text-sm font-bold text-gray-500 mt-2 sm:mt-0 ml-14 sm:ml-0">{leader.period}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Aparat & BPD (Col span 7) */}
          <div className="lg:col-span-7 space-y-12">

            {/* Aparat Desa */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-black text-gray-900 mb-2 tracking-tight">Struktur Aparat Desa 2026</h2>
                <p className="text-gray-500">Jajaran perangkat desa yang bertugas saat ini.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6">
                  {aparat.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center text-gray-900 border border-gray-100 shrink-0">
                        <User size={14} />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-gray-900 leading-tight mb-0.5">{item.name}</h3>
                        <p className="text-xs text-gray-500 font-medium leading-tight">{item.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* BPD */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-black text-gray-900 mb-2 tracking-tight">Badan Permusyawaratan Desa 2026</h2>
                <p className="text-gray-500">Anggota BPD aktif Desa Pulau Lancang.</p>
              </div>
              <div className="bg-[#FAFAFA] border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6">
                  {bpd.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-900 border border-gray-200 shrink-0">
                        <Shield size={14} />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-gray-900 leading-tight mb-0.5">{item.name}</h3>
                        <p className="text-xs text-gray-500 font-medium leading-tight">{item.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. KONDISI WILAYAH */}
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

      {/* 7. VISI & MISI (Placeholder) */}
      {/* <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-900 text-center relative overflow-hidden">
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
      </section> */}

    </div>
  );
};

export default Profil;
