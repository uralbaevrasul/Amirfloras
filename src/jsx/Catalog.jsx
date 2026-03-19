import { Link } from "react-router-dom";
import { useState } from "react";
import { Eye } from "lucide-react";

const data = [
  // 1. Сборные букеты (bouquet) - 12 ta
  {
    id: 1,
    name: "От всего сердца",
    price: "3 700 ₽",
    category: "bouquet",
    img: "https://i.pinimg.com/1200x/74/70/c5/7470c5aec34399cc4bdd327e4d001ad5.jpg",
  },
  {
    id: 2,
    name: "Дженнифер",
    price: "2 100 ₽",
    category: "bouquet",
    img: "https://i.pinimg.com/736x/2d/dd/07/2ddd0753608c3885a921ffb319c3939f.jpg",
  },
  {
    id: 3,
    name: "Розовый шик",
    price: "2 800 ₽",
    category: "bouquet",
    img: "https://i.pinimg.com/736x/92/2e/97/922e9785f476d6ff989e8e422358c2fd.jpg",
  },
  {
    id: 4,
    name: "Парижский",
    price: "5 100 ₽",
    category: "bouquet",
    img: "https://i.pinimg.com/webp/1200x/6b/61/78/6b61788d08fea4065892c794e57c86e5.webp",
  },
  {
    id: 5,
    name: "Дамский каприз",
    price: "2 640 ₽",
    category: "bouquet",
    img: "https://i.pinimg.com/736x/92/9c/10/929c10ef8aa6679e6fb793d3233fac35.jpg",
  },
  {
    id: 6,
    name: "Женские чары",
    price: "3 820 ₽",
    category: "bouquet",
    img: "https://i.pinimg.com/1200x/5d/03/21/5d0321b5dede3419c97f2ca446b9ccd3.jpg",
  },
  {
    id: 7,
    name: "Мелодия",
    price: "3 200 ₽",
    category: "bouquet",
    img: "https://i.pinimg.com/1200x/3f/8f/f5/3f8ff5cda4e3463c671f531742afaf0e.jpg",
  },
  {
    id: 8,
    name: "Весенний сад",
    price: "4 500 ₽",
    category: "bouquet",
    img: "https://i.pinimg.com/webp/1200x/54/9c/af/549cafecc9a410c35feeba363dc006a4.webp",
  },
  {
    id: 9,
    name: "Нежность",
    price: "2 900 ₽",
    category: "bouquet",
    img: "https://i.pinimg.com/1200x/23/4b/7d/234b7d4309a207b7ea14c5da4bab4821.jpg",
  },
  {
    id: 10,
    name: "Гармония",
    price: "3 950 ₽",
    category: "bouquet",
    img: "https://i.pinimg.com/webp/1200x/5f/d3/1e/5fd31ede61a822f34676600342eb5011.webp",
  },
  {
    id: 11,
    name: "Афродита",
    price: "4 100 ₽",
    category: "bouquet",
    img: "https://i.pinimg.com/1200x/59/5e/26/595e26df6c21b9d5bd535b96c21ed0ed.jpg",
  },
  {
    id: 12,
    name: "Улыбка",
    price: "2 300 ₽",
    category: "bouquet",
    img: "https://i.pinimg.com/736x/4b/55/60/4b556075c143e88f3c363f5431be2f68.jpg",
  },

  // 2. Цветы по штучно (piece) - 12 ta
  {
    id: 13,
    name: "Роза Красная",
    price: "250 ₽",
    category: "piece",
    img: "https://i.pinimg.com/736x/e6/10/4c/e6104c6fe227086a52ea895e25e4721a.jpg",
  },
  {
    id: 14,
    name: "Тюльпан Желтый",
    price: "150 ₽",
    category: "piece",
    img: "https://i.pinimg.com/736x/74/93/1b/74931be201f3322eeb947730701ea0ee.jpg",
  },
  {
    id: 15,
    name: "Пион Розовый",
    price: "450 ₽",
    category: "piece",
    img: "https://i.pinimg.com/1200x/66/a1/8a/66a18a0235cc0ab904bf44cd3e1f7d19.jpg",
  },
  {
    id: 16,
    name: "Лилия Белая",
    price: "380 ₽",
    category: "piece",
    img: "https://i.pinimg.com/736x/37/86/07/3786071cec5500759766b2f1ac08c623.jpg",
  },
  {
    id: 17,
    name: "Хризантема",
    price: "200 ₽",
    category: "piece",
    img: "https://i.pinimg.com/736x/84/9e/d2/849ed25a83f60704bd04689d039aee5d.jpg",
  },
  {
    id: 18,
    name: "Гerbera",
    price: "180 ₽",
    category: "piece",
    img: "https://i.pinimg.com/1200x/a7/b3/07/a7b307d87a21f7bb67e2b82bea4f9729.jpg",
  },
  {
    id: 19,
    name: "Орхидея",
    price: "1 200 ₽",
    category: "piece",
    img: "https://i.pinimg.com/1200x/ff/25/4e/ff254e4d3d4eefc3c964b404b8c5dae0.jpg",
  },
  {
    id: 20,
    name: "Эустома",
    price: "320 ₽",
    category: "piece",
    img: "https://i.pinimg.com/webp/736x/1c/8b/36/1c8b364b9b5940244db33c668ed8573b.webp",
  },
  {
    id: 21,
    name: "Альстромерия",
    price: "220 ₽",
    category: "piece",
    img: "https://i.pinimg.com/736x/b9/1f/ee/b91fee6feee089e7205c32c0b5d48bb8.jpg",
  },
  {
    id: 22,
    name: "Подсолнух",
    price: "400 ₽",
    category: "piece",
    img: "https://i.pinimg.com/1200x/ef/77/c4/ef77c4fe321f728fe572c5c710de4cb4.jpg",
  },
  {
    id: 23,
    name: "Ирис",
    price: "210 ₽",
    category: "piece",
    img: "https://i.pinimg.com/1200x/6f/41/a3/6f41a38589ab241be9aad9f807fe835f.jpg",
  },
  {
    id: 24,
    name: "Гвоздика",
    price: "160 ₽",
    category: "piece",
    img: "https://i.pinimg.com/736x/8e/43/72/8e43728166a452e488eddc18e6716828.jpg",
  },

  // 3. Цветы в коробках (box) - 12 ta
  // {
  //   id: 25,
  //   name: "Композиция 'Твое сердце'",
  //   price: "2 800 ₽",
  //   category: "box",
  //   img: "https://i.pinimg.com/736x/8a/8d/6c/8a8d6c7e5a0e5f2a1a1f1e9e8e8e8e8e.jpg",
  // },
  // {
  //   id: 26,
  //   name: "Цветочная Шкатулка с макаронс",
  //   price: "3 500 ₽",
  //   category: "box",
  //   img: "https://i.pinimg.com/736x/6f/3c/6d/6f3c6d7e5a0e5f2a1a1f1e9e8e8e8e8e.jpg",
  // },
  // {
  //   id: 27,
  //   name: "Бокс-Сюрприз с розами",
  //   price: "4 200 ₽",
  //   category: "box",
  //   img: "https://i.pinimg.com/736x/4d/9b/3c/4d9b3c5a0e5f2a1a1f1e9e8e8e8e8e8e.jpg",
  // },
  // {
  //   id: 28,
  //   name: "Элегантный белый бокс",
  //   price: "5 500 ₽",
  //   category: "box",
  //   img: "https://i.pinimg.com/736x/bc/5a/0d/bc5a0d5a0e5f2a1a1f1e9e8e8e8e8e8e.jpg",
  // },
  // {
  //   id: 29,
  //   name: "Квадрат любви (Красные розы)",
  //   price: "2 900 ₽",
  //   category: "box",
  //   img: "https://images.unsplash.com/photo-1591047139829-d91aec56adea?q=80&w=600",
  // },
  // {
  //   id: 30,
  //   name: "Мини бокс 'Нежность'",
  //   price: "1 800 ₽",
  //   category: "box",
  //   img: "https://i.pinimg.com/736x/7d/5e/2c/7d5e2c5a0e5f2a1a1f1e9e8e8e8e8e8e.jpg",
  // },
  // {
  //   id: 31,
  //   name: "Шляпная коробка 'Classic'",
  //   price: "4 600 ₽",
  //   category: "box",
  //   img: "https://images.unsplash.com/photo-1563245339-446738c6428c?q=80&w=600",
  // },
  // {
  //   id: 32,
  //   name: "Розовый куб (Premium)",
  //   price: "3 700 ₽",
  //   category: "box",
  //   img: "https://i.pinimg.com/736x/1a/2b/3c/1a2b3c5a0e5f2a1a1f1e9e8e8e8e8e8e.jpg",
  // },
  // {
  //   id: 33,
  //   name: "Мечта флориста",
  //   price: "4 900 ₽",
  //   category: "box",
  //   img: "https://images.unsplash.com/photo-1533616688419-b7a585564566?q=80&w=600",
  // },
  // {
  //   id: 34,
  //   name: "Золотой век (Gold Box)",
  //   price: "6 000 ₽",
  //   category: "box",
  //   img: "https://i.pinimg.com/736x/44/55/66/4455665a0e5f2a1a1f1e9e8e8e8e8e8e.jpg",
  // },
  // {
  //   id: 35,
  //   name: "Леди в розовом",
  //   price: "3 300 ₽",
  //   category: "box",
  //   img: "https://images.unsplash.com/photo-1561131668-f63504fc549d?q=80&w=600",
  // },
  // {
  //   id: 36,
  //   name: "Престиж (XL Box)",
  //   price: "7 200 ₽",
  //   category: "box",
  //   img: "https://images.unsplash.com/photo-1548691900-349f25757922?q=80&w=600",
  // },
  // 4. Мягкие игрушки (toy) - 12 ta
  {
    id: 37,
    name: "Радужное",
    price: "4 180 ₽",
    category: "toy",
    img: "https://i.pinimg.com/1200x/38/a9/9e/38a99ef27007cfae409d65c0b935c9d8.jpg",
  },
  {
    id: 38,
    name: "Мишка Тедди",
    price: "2 100 ₽",
    category: "toy",
    img: "https://i.pinimg.com/736x/4b/a1/21/4ba12174e0b03079ac25775c7e58bf7e.jpg",
  },
  {
    id: 39,
    name: "Зайка",
    price: "1 500 ₽",
    category: "toy",
    img: "https://i.pinimg.com/736x/85/1b/3a/851b3a98fbc14185c47cab54b081acf9.jpg",
  },
  {
    id: 40,
    name: "Плюшевый кот",
    price: "1 800 ₽",
    category: "toy",
    img: "https://i.pinimg.com/736x/52/84/50/52845057e0b94a17396f9be7d2e3038a.jpg",
  },
  {
    id: 41,
    name: "Единорог",
    price: "2 500 ₽",
    category: "toy",
    img: "https://i.pinimg.com/736x/93/86/35/938635b09a47a9082d9ee172b30ee9ef.jpg",
  },
  {
    id: 42,
    name: "Большой медведь",
    price: "7 500 ₽",
    category: "toy",
    img: "https://i.pinimg.com/1200x/f4/cf/c2/f4cfc259ccac141071c0496bfca0785b.jpg",
  },
  {
    id: 43,
    name: "Слоник",
    price: "1 200 ₽",
    category: "toy",
    img: "https://i.pinimg.com/1200x/fc/e6/a7/fce6a798c9fff193a6479916681890c0.jpg",
  },
  {
    id: 44,
    name: "Пингвин",
    price: "1 600 ₽",
    category: "toy",
    img: "https://i.pinimg.com/736x/43/af/9b/43af9be85ef905af6fcb0527f05ac4e2.jpg",
  },
  {
    id: 45,
    name: "Сова",
    price: "1 400 ₽",
    category: "toy",
    img: "https://i.pinimg.com/736x/5f/8d/57/5f8d57c1f9cfed3b1ec3d6b9614992c4.jpg",
  },
  {
    id: 46,
    name: "Лисичка",
    price: "1 900 ₽",
    category: "toy",
    img: "https://i.pinimg.com/736x/2c/8a/c3/2c8ac3cb4fc533a03b70c3a4230fb436.jpg",
  },
  {
    id: 47,
    name: "Малыш Грогу",
    price: "3 200 ₽",
    category: "toy",
    img: "https://i.pinimg.com/736x/1a/00/77/1a00778fd4a4d52bf6a14acc74699d4d.jpg",
  },
  {
    id: 48,
    name: "Панда",
    price: "2 800 ₽",
    category: "toy",
    img: "https://i.pinimg.com/1200x/b1/94/04/b194048ef5e1fd0c74beb4895ee05565.jpg",
  },
];

export default function Catalog() {
  const [active, setActive] = useState("bouquet");

  const filteredData = data.filter((item) => item.category === active);

  return (
    <section
      id="Catalog"
      className="max-w-7xl mx-auto px-4 py-20 bg-gray-50/50"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif font-bold text-gray-900 mb-2">
          Наш Каталог
        </h2>
      </div>

      {/* FILTER */}
      <div className="flex justify-center gap-4 text-gray-500 mb-12 overflow-x-auto pb-4 whitespace-nowrap scrollbar-hide px-2 snap-x snap-mandatory">
        {[
          { id: "bouquet", label: "Сборные букеты" },
          { id: "piece", label: "Цветы по штучно" },
          // { id: "box", label: "Цветы в коробках" },
          { id: "toy", label: "Мягкие игрушки" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`px-4 md:px-6 py-2 text-sm md:text-base rounded-full transition-all duration-300 border shrink-0 ${
              active === tab.id
                ? "bg-pink-500 text-white border-pink-500 shadow-md"
                : "bg-white border-gray-200 hover:border-pink-300 hover:text-pink-500"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* GRID */}
<div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
  {filteredData.map((item) => (
    <div
      key={item.id}
      className="group bg-white rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col"
    >
      {/* IMAGE CONTAINER */}
      <div className="relative h-48 md:h-80 overflow-hidden">
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Link
            to={`/Product/${item.id}`}
            className="bg-white/90 p-2 md:p-3 rounded-full text-pink-500 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
          >
            <Eye size={20} className="md:w-6 md:h-6" />
          </Link>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-3 md:p-6 flex flex-col flex-grow">
        <div className="mb-2 md:mb-4">
          <h3 className="text-sm md:text-lg font-bold text-gray-800 line-clamp-2 leading-tight h-10 md:h-12">
            {item.name}
          </h3>
          <p className="text-lg md:text-2xl font-black text-pink-500 mt-1 md:mt-2">
            {item.price}
          </p>
        </div>

        {/* BUTTON */}
        <Link
          to={`/Product/${item.id}`}
          className="mt-auto w-full py-2 md:py-3 bg-pink-500 text-white text-xs md:text-base text-center rounded-lg md:rounded-xl font-semibold hover:bg-pink-700 transition-colors duration-300 flex items-center justify-center gap-2"
        >
          Подробнее
        </Link>
      </div>
    </div>
  ))}
</div>
    </section>
  );
}
