import { Instagram, Send, Phone, MapPin, Clock } from 'lucide-react'
import React from 'react'
// react-scroll o'rniga HashLink import qilamiz
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100 text-gray-600">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          
          {/* 1. Brend va Ta'rif */}
          <div className="flex flex-col gap-4">
            <h3 className="text-pink-500 font-bold text-3xl tracking-tight">Amirfloras</h3>
            <p className="text-sm leading-relaxed text-gray-500">
              Ваш надежный партнер в мире флористики. Мы создаем не просто букеты, а эмоции, которые остаются в памяти навсегда. Доставка свежих цветов в Сургуте 24/7.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="https://t.me/amirfloras" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-gray-50 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-sm border border-gray-100">
                <Send size={18} />
              </a>
              <a href="https://instagram.com/amirfloras" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-gray-50 rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300 shadow-sm border border-gray-100">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* 2. Navigatsiya - HashLink va Navbar dizayni */}
          <div>
            <h4 className="text-gray-900 font-bold mb-6 uppercase text-xs tracking-widest">Информация</h4>
            <ul className="flex flex-col gap-4 text-sm font-semibold uppercase tracking-wider">
              <li>
                <HashLink 
                  smooth 
                  to="/#Catalog" 
                  className="hover:text-pink-500 cursor-pointer transition-colors flex items-center gap-2 group relative w-fit"
                >
                  <span className="w-1.5 h-1.5 bg-pink-400 rounded-full shrink-0"></span>
                  Наш каталог
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 transition-all group-hover:w-full"></span>
                </HashLink>
              </li>
              <li>
                <HashLink 
                  smooth 
                  to="/#Zakaz" 
                  className="hover:text-pink-500 cursor-pointer transition-colors flex items-center gap-2 group relative w-fit"
                >
                  <span className="w-1.5 h-1.5 bg-pink-400 rounded-full shrink-0"></span>
                  Как заказать
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 transition-all group-hover:w-full"></span>
                </HashLink>
              </li>
              <li>
                <HashLink 
                  smooth 
                  to="/#Comments" 
                  className="hover:text-pink-500 cursor-pointer transition-colors flex items-center gap-2 group relative w-fit"
                >
                  <span className="w-1.5 h-1.5 bg-pink-400 rounded-full shrink-0"></span>
                  Отзывы
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 transition-all group-hover:w-full"></span>
                </HashLink>
              </li>
              <li>
                <HashLink 
                  smooth 
                  to="/#Contact" 
                  className="hover:text-pink-500 cursor-pointer transition-colors flex items-center gap-2 group relative w-fit"
                >
                  <span className="w-1.5 h-1.5 bg-pink-400 rounded-full shrink-0"></span>
                  Контакты
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 transition-all group-hover:w-full"></span>
                </HashLink>
              </li>
            </ul>
          </div>

          {/* 3. Kontaktlar */}
          <div>
            <h4 className="text-gray-900 font-bold mb-6 uppercase text-xs tracking-widest">Контакты</h4>
            <ul className="flex flex-col gap-4 text-sm font-medium">
              <li className="flex items-start gap-3 text-gray-700">
                <Phone size={18} className="text-pink-500 shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+998958055151" className="font-bold hover:text-pink-500 transition-colors tracking-tight">+998 95 805 51 51</a>
                  <span className="text-[11px] text-gray-400 font-normal">Принимаем заказы круглосуточно</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-pink-500 shrink-0" />
                <span className="text-gray-600">г. Сургут, ул. Примерная, дом 12</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-pink-500 shrink-0" />
                <span className="text-gray-600">
                  <span className="font-bold">08:00 – 21:00</span> <br /> 
                  <span className="text-[11px] text-pink-400 uppercase font-bold tracking-tighter">Доставка работает 24/7</span>
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] uppercase tracking-[0.2em] text-gray-400">
          <p>© 2026 AMIRFLORAS — Салон цветов и подарков</p>
        </div>
        
      </div>
    </footer>
  )
}

export default Footer