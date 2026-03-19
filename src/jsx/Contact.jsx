import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!name || !phone) {
      alert("Iltimos, barcha maydonlarni to‘ldiring");
      return;
    }

    setLoading(true);

    const token = "8532113600:AAHRpWB9mP8af8R45zTTELi8-2aG_LbCLBY";
    const chat_id = "6307407339";

    const text = `
📦 Yangi buyurtma!
👤 Ism: ${name}
📞 Telefon: ${phone}
`;

    try {
      await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          chat_id,
          text
        })
      });

      alert("Yuborildi ✅");
      setName("");
      setPhone("");
    } catch (error) {
      console.error(error);
      alert("Xatolik ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="Contact" className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
      
      {/* IMAGE */}
      <div className="relative group">
        <div className="absolute -inset-4 bg-pink-100/50 rounded-[2.5rem] blur-2xl group-hover:bg-pink-200/50 transition duration-500"></div>
        <img
          src="./images/florist.png"
          alt="Наш флорист"
          className="relative rounded-[2rem] w-full h-[500px] object-cover shadow-2xl transition-transform duration-500"
        />
      </div>

      {/* FORM */}
      <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-pink-50 relative overflow-hidden">
        
        <div className="absolute top-0 right-0 w-32 h-32 bg-pink-50 rounded-full -mr-16 -mt-16 opacity-50"></div>
        
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-gray-800 leading-tight">
            Не нашли <span className="text-pink-500 italic">свой</span> идеальный букет?
          </h2>

          <p className="text-gray-500 mb-8 text-lg leading-relaxed">
            Оставьте свои данные, и наш флорист свяжется с вами, чтобы обсудить детали и 
            <span className="font-semibold text-gray-700"> создать уникальный букет специально для вас</span>.
          </p>

          <div className="flex flex-col gap-5">

            {/* NAME */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-400 ml-2 uppercase tracking-wider">
                Ваше имя
              </label>
              <input
                type="text"
                placeholder="Например, Алишер"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border-2 border-gray-50 bg-gray-50/50 p-4 rounded-2xl outline-none focus:border-pink-400 focus:bg-white transition-all"
              />
            </div>

            {/* PHONE */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-400 ml-2 uppercase tracking-wider">
                Номер телефона
              </label>
              <input
                type="text"
                placeholder="+998 (__) ___-__-__"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border-2 border-gray-50 bg-gray-50/50 p-4 rounded-2xl outline-none focus:border-pink-400 focus:bg-white transition-all"
              />
            </div>

            {/* BUTTON */}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="bg-pink-500 text-white font-bold py-4 rounded-2xl shadow-lg shadow-pink-200 hover:bg-pink-600 hover:-translate-y-1 transition-all duration-300 mt-2 disabled:opacity-60"
            >
              {loading ? "Yuborilmoqda..." : "Заказать уникальный букет"}
            </button>

          </div>

          <p className="text-[10px] text-gray-400 mt-6 text-center leading-tight">
            Нажимая кнопку, вы соглашаетесь на создание <br /> вашего персонального цветочного шедевра.
          </p>
        </div>
      </div>
    </section>
  );
}