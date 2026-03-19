import React from "react";
import { Instagram, Phone, Send } from "lucide-react";
import { Link } from "react-router-dom";
// react-scroll o'rniga HashLink import qilamiz
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  return (
    <nav className="w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-[1350px] mx-auto px-4 md:px-12 py-3 md:py-4 flex items-center justify-between">
        
        {/* 1. Logo qismi */}
        <Link to="/" className="flex items-center gap-2 group cursor-pointer shrink-0">
          <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center border-2 border-pink-400 rounded-xl group-hover:bg-pink-500 group-hover:border-pink-500 transition-all duration-300">
            <div className="w-4 h-4 md:w-5 md:h-5 bg-pink-400 group-hover:bg-white rounded-sm rotate-45 transition-colors"></div>
          </div>
          <span className="text-xl md:text-2xl font-serif font-bold text-gray-800 tracking-tight">
            Amir<span className="text-pink-500">floras</span>
          </span>
        </Link>

        {/* 2. Menyu (Markaziy qism) */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10 text-gray-600 font-semibold text-sm uppercase tracking-wider">
          <HashLink 
            smooth 
            to="/#Catalog" 
            className="hover:text-pink-500 transition-colors relative group"
          >
            Каталог
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 transition-all group-hover:w-full"></span>
          </HashLink>
          <HashLink 
            smooth 
            to="/#Zakaz" 
            className="hover:text-pink-500 transition-colors relative group"
          >
            Как заказать
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 transition-all group-hover:w-full"></span>
          </HashLink>
          <HashLink 
            smooth 
            to="/#Comments" 
            className="hover:text-pink-500 transition-colors relative group"
          >
            Отзывы
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 transition-all group-hover:w-full"></span>
          </HashLink>
          <HashLink 
            smooth 
            to="/#Contact" 
            className="hover:text-pink-500 transition-colors relative group"
          >
            Контакты
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 transition-all group-hover:w-full"></span>
          </HashLink>
        </div>

        {/* 3. O'ng tomon (Aloqa) */}
        <div className="flex items-center gap-2 md:gap-6">
  {/* 'hidden sm:flex' olib tashlandi, 'flex' qilindi */}
  <div className="flex items-center gap-1 md:gap-3">
    <a 
      href="https://t.me/amirfloras" 
      target="_blank" 
      rel="noopener noreferrer"
      className="p-2 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-full transition-all"
    >
      <Send size={20} />
    </a>
    <a 
      href="https://instagram.com/amirfloras" 
      target="_blank" 
      rel="noopener noreferrer"
      className="p-2 text-gray-400 hover:text-pink-500 hover:bg-pink-50 rounded-full transition-all"
    >
      <Instagram size={20} />
    </a>
  </div>

  <div className="h-8 w-[1px] bg-gray-100 hidden lg:block"></div>

  <a 
    href="tel:+998958055151" 
    className="flex items-center gap-2 bg-pink-500 text-white px-3 md:px-4 py-2 rounded-full text-sm font-bold hover:bg-pink-600 transition-all shadow-md shadow-pink-100 active:scale-95"
  >
    <Phone size={16} fill="currentColor" />
    {/* 'hidden xs:inline' o'rniga 'hidden min-[400px]:inline' ishlatish tavsiya etiladi yoki shunchaki 'hidden md:inline' */}
    <span className="hidden sm:inline">+998 95 805 51 51</span>
  </a>
</div>
      </div>
    </nav>
  );
};

export default Navbar;