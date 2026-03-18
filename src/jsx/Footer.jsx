import { Instagram, Send, Phone } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import {Link as ScrollLink } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-white pt-12 pb-6 border-t border-gray-100 text-gray-600">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10">
          
          {/* Logo va Ta'rif */}
          <div className="max-w-xs">
            <h3 className="text-pink-500 font-bold text-2xl tracking-tight mb-2">Amirfloras</h3>
            <p className="text-sm text-gray-400">Доставка цветов в Сургуте. <br /> С любовью в каждом букете.</p>
          </div>

          {/* Oddiy Menu */}
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm font-medium">
          <ScrollLink className="hover:text-pink-500 cursor-pointer transition-colors" to="Catalog" smooth={true} duration={500}>
          Каталог
        </ScrollLink>
        <ScrollLink className="hover:text-pink-500 cursor-pointer transition-colors" to="Contact" smooth={true} duration={500}>
          Контакты
        </ScrollLink>
        <ScrollLink className="hover:text-pink-500 cursor-pointer transition-colors" to="Zakaz" smooth={true} duration={500}>
          Как заказать
        </ScrollLink>
        <ScrollLink className="hover:text-pink-500 cursor-pointer transition-colors" to="Comments" smooth={true} duration={500}>
             Отзывы
        </ScrollLink>

          </div>

          {/* Ijtimoiy tarmoqlar */}
          <div className="flex gap-5 items-center">
            <a 
              href="https://www.instagram.com/amirfloras" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-gray-50 rounded-full hover:text-white hover:bg-pink-500 transition-all duration-300 shadow-sm"
              title="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://t.me/amirfloras" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-gray-50 rounded-full hover:text-white hover:bg-blue-400 transition-all duration-300 shadow-sm"
              title="Telegram"
            >
              <Send size={20} />
            </a>

            {/* TELEFON */}
            <a 
              href="tel:+998 95 805 51 51" 
              className="flex items-center gap-2 font-bold text-gray-800 hover:text-pink-500 transition"
            >
              <Phone size={18} className="text-pink-400" />
              +998 95 805 51 51
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] uppercase tracking-widest text-gray-300">
          <p>© 2026 AMIRFLORaS</p>
       
        </div>
        
      </div>
    </footer>
  )
}

export default Footer