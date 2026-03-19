import React from "react";
import { Instagram, Phone, Send } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom"; // Asosiy sahifaga qaytish uchun kerak bo'ladi

const Navbar = () => {
  return (
    // Orqa fon (bg-white) butun ekran bo'ylab turaveradi
    <nav className="w-full bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-[1350px] mx-auto px-4 md:px-12 py-4 flex items-center justify-between">
        
        {/* 1. Logo qismi */}
        <Link to="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 flex items-center justify-center border-2 border-pink-400 rounded-lg group-hover:bg-pink-50 transition-colors">
            <div className="w-4 h-4 bg-pink-400 rounded-sm rotate-45"></div>
          </div>
          <ScrollLink to="Home" smooth={true} 
            duration={500}>
          <span className="text-2xl font-serif font-bold text-pink-400 tracking-tight">
            Amirfloras
          </span>
          </ScrollLink>
        </Link>

        {/* 2. Menyu (Markaziy qism) */}
        <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <ScrollLink 
            to="Catalog" 
            smooth={true} 
            duration={500} 
            className="hover:text-pink-500 cursor-pointer transition-colors"
          >
            Каталог
          </ScrollLink>
          <ScrollLink 
            to="Zakaz" 
            smooth={true} 
            duration={500} 
            className="hover:text-pink-500 cursor-pointer transition-colors"
          >
            Как заказать
          </ScrollLink>
          <ScrollLink 
            to="Comments" 
            smooth={true} 
            duration={500} 
            className="hover:text-pink-500 cursor-pointer transition-colors"
          >
            Отзывы
          </ScrollLink>
          <ScrollLink 
            to="Contact" 
            smooth={true} 
            duration={500} 
            className="hover:text-pink-500 cursor-pointer transition-colors"
          >
            Контакты
          </ScrollLink>
        </div>

        {/* 3. O'ng tomon (Tel va Ikonkalar) */}
        <div className="flex items-center gap-6">
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
          {/* Telefon raqam */}
          <a 
            href="tel:+998 95 805 51 51" 
            className="hidden lg:flex items-center gap-2 text-gray-800 font-bold hover:text-pink-500 transition-colors"
          >
            <Phone size={18} className="text-pink-400" />
            <span>+998 95 805 51 51</span>
          </a>
          
          {/* Mobile menyu uchun joy yoki boshqa elementlar bo'lsa shu yerda qoladi */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;