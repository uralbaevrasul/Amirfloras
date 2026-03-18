import React from 'react';
import { MessageCircle, Phone, PhoneCall, Send, Truck } from 'lucide-react';

const FlowerOrderSteps = () => {
  return (
    <section id='Zakaz' className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 tracking-tight mb-4">
            Как заказать
          </h2>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          
          {/* Step 1: Bog'lanish */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-20 h-20 bg-pink-50 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm relative">
              <MessageCircle className="text-pink-400" size={32} />
              {/* Raqam */}
              <div className="absolute -bottom-2 w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center text-xs font-bold border-4 border-white shadow-md">
                1
              </div>
            </div>
            
            <h3 className="font-bold text-xl mt-6 mb-3 text-gray-800">Свяжитесь с нами</h3>
            <p className="text-sm text-gray-500 leading-relaxed max-w-[280px]">
              Напишите нам в <b>Telegram</b> или позвоните по номеру телефона для выбора букета.
            </p>
          </div>

          {/* Step 2: Tasdiqlash */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-20 h-20 bg-pink-50 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm relative">
              <PhoneCall className="text-pink-400" size={32} />
              <div className="absolute -bottom-2 w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center text-xs font-bold border-4 border-white shadow-md">
                2
              </div>
            </div>

            <h3 className="font-bold text-xl mt-6 mb-3 text-gray-800">Подтвердите заказ</h3>
            <p className="text-sm text-gray-500 leading-relaxed max-w-[280px]">
              Менеджер уточнит детали, адрес доставки и удобный способ оплаты.
            </p>
          </div>

          {/* Step 3: Yetkazib berish */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-20 h-20 bg-pink-50 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm relative">
              <Truck className="text-pink-400" size={32} />
              <div className="absolute -bottom-2 w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center text-xs font-bold border-4 border-white shadow-md">
                3
              </div>
            </div>

            <h3 className="font-bold text-xl mt-6 mb-3 text-gray-800">Доставка</h3>
            <p className="text-sm text-gray-500 leading-relaxed max-w-[280px]">
              Наш курьер бережно доставит свежий букет в назначенное вами время.
            </p>
          </div>

        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          {/* Telegram Button */}
          <a 
            href="https://t.me/amirfloras" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#229ED9] hover:bg-[#1c80b0] text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-blue-200 hover:-translate-y-1"
          >
            <Send size={20} />
            Написать в Telegram
          </a>

          {/* Phone Button */}
          <a 
            href="tel:+998 95 805 51 51" 
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-pink-200 hover:-translate-y-1"
          >
            <Phone size={20} />
            Позвонить сейчас
          </a>
        </div>
      </div>
    </section>
  );
};

export default FlowerOrderSteps;