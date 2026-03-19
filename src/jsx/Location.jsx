import { Clock, MapPin, Phone } from "lucide-react";
import React from "react";

const Lakatsiya = () => {
  return (
    <section className="w-full py-10 md:py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Balandlik mobilda auto, desktopda 550px qilib o'zgartirildi */}
        <div className="relative h-auto md:h-[550px] w-full rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border border-pink-50 flex flex-col md:block">
          
          {/* MAP BACKGROUND */}
          <div className="absolute inset-0 grayscale contrast-125 brightness-75 transition-all duration-700">
            <img
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1200&h=600&auto=format&fit=crop"
              className="w-full h-full object-cover"
              alt="Map background"
            />
            <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/60 via-black/20 md:via-transparent to-transparent"></div>
          </div>

          {/* CONTENT AREA */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full px-4 py-12 md:px-20 gap-10 md:gap-0">
            
            {/* LEFT CARD (Glassmorphism) */}
            <div className="bg-white/90 backdrop-blur-md p-6 md:p-12 rounded-[1.5rem] md:rounded-[2rem] shadow-2xl max-w-sm w-full border border-white/50">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 md:mb-8 text-gray-800 tracking-tight text-center md:text-left">
                Наш салон
              </h2>

              <div className="space-y-6 md:space-y-8">
                {/* PHONE */}
                <div className="flex items-center gap-4 md:gap-5 group cursor-pointer">
                  <div className="p-2.5 md:p-3 bg-pink-500 rounded-xl md:rounded-2xl shadow-lg shadow-pink-200 group-hover:scale-110 transition-transform">
                    <Phone size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-pink-500 font-bold">
                      Телефон:
                    </p>
                    <p className="font-bold text-gray-800 text-base md:text-lg">
                      +998 95 805 51 51
                    </p>
                  </div>
                </div>

                {/* ADDRESS */}
                <div className="flex items-center gap-4 md:gap-5 group cursor-pointer">
                  <div className="p-2.5 md:p-3 bg-pink-500 rounded-xl md:rounded-2xl shadow-lg shadow-pink-200 group-hover:scale-110 transition-transform">
                    <MapPin size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-pink-500 font-bold">
                      Адрес:
                    </p>
                    <p className="font-bold text-gray-800 text-base md:text-lg">
                      Чиланзар, 6-й квартал
                    </p>
                  </div>
                </div>

                {/* TIME */}
                <div className="flex items-center gap-4 md:gap-5 group cursor-pointer">
                  <div className="p-2.5 md:p-3 bg-pink-500 rounded-xl md:rounded-2xl shadow-lg shadow-pink-200 group-hover:scale-110 transition-transform">
                    <Clock size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-pink-500 font-bold">
                      Режим работы:
                    </p>
                    <p className="font-bold text-gray-800 text-base md:text-lg">
                      Круглосуточно 24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT MAP PIN (Interaktiv belgi) */}
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                {/* Mobilda animatsiya biroz kichraytirildi */}
                <div className="absolute -inset-4 md:-inset-8 bg-pink-500 rounded-full opacity-20 animate-ping"></div>
                <div className="absolute -inset-2 md:-inset-4 bg-pink-400 rounded-full opacity-30 animate-pulse"></div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Chilonzor+6-kvartal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 bg-white p-4 md:p-6 rounded-full shadow-2xl hover:bg-pink-500 group transition-all duration-500 cursor-pointer flex items-center justify-center border-4 border-pink-100"
                >
                  <MapPin
                    className="w-8 h-8 md:w-10 md:h-10 text-pink-500 group-hover:text-white transition-colors"
                  />
                </a>
              </div>
              <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-[10px] md:text-xs font-bold text-gray-700 shadow-lg border border-white text-center">
                Нажмите, чтобы проложить маршруt
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lakatsiya;