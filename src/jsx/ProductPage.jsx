import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from "react";

// Catalog.jsx ichidagi 'data' massivini aynan o'zini shu yerga qo'ying
const data = [
  { id: 1, name: "От всего сердца", price: "3 700 ₽", category: "bouquet", img: "https://i.pinimg.com/1200x/74/70/c5/7470c5aec34399cc4bdd327e4d001ad5.jpg" },
  { id: 2, name: "Дженнифер", price: "2 100 ₽", category: "bouquet", img: "https://i.pinimg.com/736x/2d/dd/07/2ddd0753608c3885a921ffb319c3939f.jpg" },
  { id: 3, name: "Розовый шик", price: "2 800 ₽", category: "bouquet", img: "https://i.pinimg.com/736x/92/2e/97/922e9785f476d6ff989e8e422358c2fd.jpg" },
  { id: 4, name: "Парижский", price: "5 100 ₽", category: "bouquet", img: "https://i.pinimg.com/webp/1200x/6b/61/78/6b61788d08fea4065892c794e57c86e5.webp" },
  { id: 5, name: "Дамский каприз", price: "2 640 ₽", category: "bouquet", img: "https://i.pinimg.com/736x/92/9c/10/929c10ef8aa6679e6fb793d3233fac35.jpg" },
  { id: 6, name: "Женские чары", price: "3 820 ₽", category: "bouquet", img: "https://i.pinimg.com/1200x/5d/03/21/5d0321b5dede3419c97f2ca446b9ccd3.jpg" },
  { id: 7, name: "Мелодия", price: "3 200 ₽", category: "bouquet", img: "https://i.pinimg.com/1200x/3f/8f/f5/3f8ff5cda4e3463c671f531742afaf0e.jpg" },
  { id: 8, name: "Весенний сад", price: "4 500 ₽", category: "bouquet", img: "https://i.pinimg.com/webp/1200x/54/9c/af/549cafecc9a410c35feeba363dc006a4.webp" },
  { id: 9, name: "Нежность", price: "2 900 ₽", category: "bouquet", img: "https://i.pinimg.com/1200x/23/4b/7d/234b7d4309a207b7ea14c5da4bab4821.jpg" },
  { id: 10, name: "Гармония", price: "3 950 ₽", category: "bouquet", img: "https://i.pinimg.com/webp/1200x/5f/d3/1e/5fd31ede61a822f34676600342eb5011.webp" },
  { id: 11, name: "Афродита", price: "4 100 ₽", category: "bouquet", img: "https://i.pinimg.com/1200x/59/5e/26/595e26df6c21b9d5bd535b96c21ed0ed.jpg" },
  { id: 12, name: "Улыбка", price: "2 300 ₽", category: "bouquet", img: "https://i.pinimg.com/736x/4b/55/60/4b556075c143e88f3c363f5431be2f68.jpg" },

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
];

function ProductPage() {
  // URL dan ID ni olamiz (masalan: /Product/1 dagi "1" sonini)
  const { id } = useParams();
  
  // Data ichidan shu ID ga mos mahsulotni qidiramiz
  const product = data.find((item) => item.id === parseInt(id));

  // Sahifa yuklanganda tepaga skroll qilish uchun
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Agar mahsulot topilmasa xatolik ko'rsatmaslik uchun
  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl font-bold">Mahsulot topilmadi</h2>
        <Link to="/" className="text-pink-500 underline mt-4">Katalogga qaytish</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 font-sans">
      {/* ORQAGA QAYTISH */}
      <Link to="/" className="inline-block mb-8 text-pink-500 hover:text-pink-600 font-medium">
        ← Назад в каталог
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* CHAP TOMON: RASM */}
        <div className="rounded-3xl overflow-hidden shadow-lg h-[400px] md:h-[600px]">
          <img 
            src={product.img} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* O'NG TOMON: MA'LUMOTLAR */}
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <span className="text-sm text-gray-400 uppercase tracking-widest">
              Категория: {product.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
              {product.name}
            </h1>
          </div>

          <div className="text-3xl font-bold text-pink-600">
            {product.price}
          </div>

          <div className="border-t border-b py-6 border-gray-100">
            <h3 className="font-bold text-gray-800 mb-2">Описание товара</h3>
            <p className="text-gray-600 leading-relaxed">
              Этот прекрасный товар "{product.name}" станет отличным дополнением к вашему празднику. 
              Мы гарантируем свежесть и высокое качество каждой детали. 
              Доставка осуществляется в кратчайшие сроки.
            </p>
          </div>

          {/* DOIMIY MA'LUMOTLAR */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-700">
              <span className="bg-green-100 p-2 rounded-full text-green-600">✓</span>
              <span>В наличии и готов к отправке</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <span className="bg-blue-100 p-2 rounded-full text-blue-600">🚚</span>
              <span>Доставка по городу</span>
            </div>
          </div>
          
          <button className="w-full md:w-max px-12 py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-gray-800 transition-colors">
          <a 
              href="https://t.me/amirfloras" 
              target="_blank" 
              rel="noopener noreferrer"
              title="Telegram"
            >
            Заказать сейчас
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;