import React from 'react';
import { MapPin, Phone, Mail, Map as MapIcon, ExternalLink, Building2 } from 'lucide-react';
import Button from '../components/Button';

const Kontak = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans selection:bg-accent selection:text-black pb-32">
      
      {/* 1. HERO SECTION */}
      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight leading-[1.1] max-w-4xl">
          Hubungi Desa <br/>
          <span className="text-accent">Pulau Lancang</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl font-medium leading-relaxed">
          Temukan informasi lokasi dan kontak resmi Desa Pulau Lancang.
        </p>
      </section>

      {/* 2. KONTAK & LOKASI GRID */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* A. Informasi Desa */}
          <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-gray-200 shadow-xl shadow-gray-200/40">
            <h2 className="text-2xl font-black text-gray-900 mb-8">Informasi Kontak</h2>
            
            <div className="space-y-8">
              
              <div className="flex gap-5">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center shrink-0 border border-gray-100 text-gray-900">
                  <Building2 size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Kantor Desa</h3>
                  <p className="text-gray-600 leading-relaxed mb-2">
                    [ Jalan Utama Desa Pulau Lancang, RT 00/RW 00 ]
                  </p>
                  <p className="text-gray-500 text-sm">
                    Kecamatan Benai <br/>
                    Kabupaten Kuantan Singingi <br/>
                    Provinsi Riau
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center shrink-0 border border-gray-100 text-gray-900">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Telepon</h3>
                  <p className="text-gray-600 leading-relaxed">
                    [ 08xx-xxxx-xxxx ]
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center shrink-0 border border-gray-100 text-gray-900">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Email</h3>
                  <p className="text-gray-600 leading-relaxed">
                    [ admin@pulaulancang.desa.id ]
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* B. Lokasi Map Placeholder */}
          <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-gray-200 shadow-xl shadow-gray-200/40 flex flex-col">
            <h2 className="text-2xl font-black text-gray-900 mb-8">Lokasi Wilayah</h2>
            
            <div className="flex-1 w-full bg-gray-50 rounded-2xl border border-gray-100 flex flex-col items-center justify-center text-gray-400 min-h-[300px] mb-8 relative overflow-hidden group">
              <MapIcon size={48} className="mb-4 opacity-50 group-hover:scale-110 transition-transform duration-500" />
              <p className="font-medium text-center">[ Placeholder Peta Lokasi Desa ]</p>
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl"></div>
            </div>

            <Button 
              variant="primary" 
              className="w-full justify-center gap-2 py-4 shadow-md text-base"
              onClick={() => window.open('#', '_blank')}
            >
              Buka di Google Maps <ExternalLink size={18} />
            </Button>
            <p className="text-center text-xs text-gray-400 mt-4 italic">
              * Tautan peta akan aktif setelah koordinat tersedia.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Kontak;
