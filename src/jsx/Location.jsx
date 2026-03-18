import { Clock, MapPin, Phone } from "lucide-react";
import React from "react";

const Lakatsiya = () => {
  return (
    <section className="w-full py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="relative h-[550px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-pink-50">
          
          {/* MAP BACKGROUND (Stilizatsiya qilingan haqiqiy xarita ko'rinishi) */}
          <div className="absolute inset-0 grayscale contrast-125 brightness-75 transition-all duration-700 group-hover:grayscale-0">
            <img 
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1200&h=600&auto=format&fit=crop" 
              className="w-full h-full object-cover"
              alt="Map background"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent"></div>
          </div>

          {/* CONTENT AREA */}
          <div className="absolute inset-0 flex items-center justify-center md:justify-between px-6 md:px-20">
            
            {/* LEFT CARD (Shisha effekti - Glassmorphism qo'shildi) */}
            <div className="bg-white/90 backdrop-blur-md p-8 md:p-12 rounded-[2rem] shadow-2xl max-w-sm w-full border border-white/50">
              <h2 className="text-3xl font-serif font-bold mb-8 text-gray-800 tracking-tight">Наш салон</h2>

              <div className="space-y-8">
                {/* PHONE */}
                <div className="flex items-center gap-5 group cursor-pointer">
                  <div className="p-3 bg-pink-500 rounded-2xl shadow-lg shadow-pink-200 group-hover:scale-110 transition-transform">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-pink-400 font-bold mb-1">Телефон:</p>
                    <p className="font-bold text-gray-800 text-lg">+998 95 805 51 51</p>
                  </div>
                </div>

                {/* ADDRESS */}
                <div className="flex items-center gap-5 group cursor-pointer">
                  <div className="p-3 bg-pink-500 rounded-2xl shadow-lg shadow-pink-200 group-hover:scale-110 transition-transform">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-pink-400 font-bold mb-1">Адрес:</p>
                    <p className="font-bold text-gray-800 text-lg">Чиланзар, 6-й квартал</p>
                  </div>
                </div>

                {/* TIME */}
                <div className="flex items-center gap-5 group cursor-pointer">
                  <div className="p-3 bg-pink-500 rounded-2xl shadow-lg shadow-pink-200 group-hover:scale-110 transition-transform">
                    <Clock size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-pink-400 font-bold mb-1">Режим работы:</p>
                    <p className="font-bold text-gray-800 text-lg">Круглосуточно 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT MAP PIN (Interaktiv belgi) */}
            <div className="hidden md:flex flex-col items-center gap-4">
              <div className="relative">
                {/* PING ANIMATION (Bir nechta qatlamli pulsatsiya) */}
                <div className="absolute -inset-8 bg-pink-500 rounded-full opacity-20 animate-ping"></div>
                <div className="absolute -inset-4 bg-pink-400 rounded-full opacity-30 animate-pulse"></div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=41.2827,69.2043" // Chilonzor 6-kvartal taxminiy koordinatasi
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 bg-white p-6 rounded-full shadow-2xl hover:bg-pink-500 group transition-all duration-500 cursor-pointer flex items-center justify-center border-4 border-pink-100"
                  title="Открыть в Google Maps"
                >
                  <MapPin size={40} className="text-pink-500 group-hover:text-white transition-colors" />
                </a>
              </div>
              <span className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold text-gray-700 shadow-sm border border-white">
                Нажмите, чтобы проложить маршрут
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lakatsiya;