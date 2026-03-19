import { Link as ScrollLink } from "react-scroll";

export default function Hero() {
    return (
      <section id="Home" className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT */}
        <div>
          <span className="text-pink-400 border border-pink-300 px-3 py-1 rounded-full text-sm">
            Свежесть гарантирована 24/7
          </span>
  
          <h1 className="text-5xl font-bold mt-6 leading-tight">
            Круглосуточная <br />
            <span className="text-pink-500">доставка цветов</span> <br />
            в Сумке
          </h1>
  
          <p className="text-gray-500 mt-4 max-w-md">
            Оставим приятные эмоции за 60 минут прямо в руки получателю. 
            С любовью от Amirfloris.
          </p>
  
          <button className="mt-6 bg-pink-400 text-white px-6 py-3 rounded-full hover:bg-pink-500 transition">
          <ScrollLink to="Catalog" smooth={true} duration={500}>
         Каталог
        </ScrollLink>
          </button>
        </div>
  
        {/* RIGHT */}
        <div className="">
          <img
            src="https://i.pinimg.com/webp/1200x/af/01/c3/af01c37c8da6dfd3d0330a1fbdbd761e.webp"
            alt="flowers"
            className="rounded-3xl w-full object-cover"
          />
        </div>
      </section>
    );
  }

  
  


