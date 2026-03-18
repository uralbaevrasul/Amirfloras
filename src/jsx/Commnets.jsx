import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const commentsData = [
  {
    id: 1,
    name: "Елена Миронова",
    city: "г. Ташкент, Мирзо-Улугбекский р-н",
    text: "Мне срочно нужен был подарок маме на юбилей. Заказала сборный букет 'Нежность'. Цветы привезли через 40 минут, букет свежий и очень красивый. Мама в восторге, спасибо вам за оперативность!",
    avatar: "https://i.pinimg.com/736x/a9/75/93/a975934bb378afc4ca8c133df451f56e.jpg",
    image: "https://i.pinimg.com/736x/4d/06/29/4d06292db3f92ccce0a545863cb25a9c.jpg",
  },
  {
    id: 2,
    name: "Анна Смирнова",
    city: "г. Ташкент, Чиланзар",
    text: "Заказывала доставку цветов в Сургут из Москвы. Переживала за качество, но ребята не подвели. Сбросили фото перед отправкой. Розы просто шикарные, стоят уже шестой день!",
    avatar: "https://i.pinimg.com/736x/95/26/12/95261256b08293c3b2d897a1f5cd9d13.jpg",
    image: "https://i.pinimg.com/1200x/16/1c/94/161c947b6b709e0e76ff399b1e221298.jpg",
  },
  {
    id: 3,
    name: "Ирина Кузнецова",
    city: "г. Ташкент, Мирзо-Улугбекский р-н",
    text: "Попросила составить необычную композицию в коробке. Флористы — настоящие мастера своего дела! Получилось даже лучше, чем на картинке. Теперь за цветами только к вам.",
    avatar: "https://i.pinimg.com/736x/8e/50/64/8e5064322c0e5898c3db92eb571b22b3.jpg",
    image: "https://i.pinimg.com/736x/c3/e3/e2/c3e3e2c841a877711a514f530a9bf1c1.jpg",
  },
];

const Comments = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? commentsData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === commentsData.length - 1 ? 0 : prev + 1));
  };

  const current = commentsData[index];

  return (
    <section id="Comments" className="py-24  overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header qismi */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4 tracking-tight">
              Отзывы наших <span className="text-pink-500 italic">счастливых</span> клиентов
            </h2>
            <p className="text-gray-500 text-lg">Каждый отзыв — это история радости, которую мы доставили вместе с цветами.</p>
          </div>
          
          {/* Navigation Buttons (Desktop) */}
          
        </div>

        {/* Review Card - To'liq kenglikda */}
        <div className="relative group">
          <div className="bg-white rounded-[3rem] overflow-hidden shadow-xl border border-pink-50/50 flex flex-col lg:flex-row min-h-[550px]">
            
            {/* Chap tomon: Rasm (Endi yanada kattaroq) */}
            <div className="lg:w-2/5 relative overflow-hidden group">
              <img
                src={current.image}
                alt="Review"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                 <p className="text-sm font-medium opacity-80 uppercase tracking-widest">Фото от клиента</p>
              </div>
            </div>

            {/* O'ng tomon: Kontent */}
            <div className="lg:w-3/5 p-8 md:p-16 flex flex-col justify-between relative">
              {/* Orqa fondagi katta qo'shtirnoq */}
              <Quote className="absolute top-10 right-10 text-pink-50 w-32 h-32 -z-0 opacity-50" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-5 mb-10">
                  <div className="w-20 h-20 rounded-2xl rotate-3 overflow-hidden shadow-lg border-2 border-white transition-transform group-hover:rotate-0 duration-500">
                    <img src={current.avatar} alt={current.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900">{current.name}</h4>
                    <p className="text-pink-500 font-medium flex items-center gap-2">
                       <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></span>
                       {current.city}
                    </p>
                  </div>
                </div>

                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light italic mb-8">
                  "{current.text}"
                </p>
              </div>
              <div className="hidden md:flex gap-4">
            <button onClick={prevSlide} className="p-4 rounded-full border border-pink-100 bg-white shadow-sm hover:bg-pink-500 hover:text-white transition-all duration-300">
              <ChevronLeft size={28} />
            </button>
            <button onClick={nextSlide} className="p-4 rounded-full border border-pink-100 bg-white shadow-sm hover:bg-pink-500 hover:text-white transition-all duration-300">
              <ChevronRight size={28} />
            </button>
          </div>
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation (Faqat telefonda chiqadi) */}
        <div className="flex md:hidden justify-center gap-6 mt-10">
            <button onClick={prevSlide} className="p-4 rounded-full bg-white shadow-md text-pink-500 active:scale-95">
              <ChevronLeft size={24} />
            </button>
            <button onClick={nextSlide} className="p-4 rounded-full bg-white shadow-md text-pink-500 active:scale-95">
              <ChevronRight size={24} />
            </button>
        </div>

      </div>
    </section>
  );
};

export default Comments;