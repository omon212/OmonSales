import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Truck } from 'lucide-react';

const fleet = [
  {
    title: "Tentli yuk mashinasi",
    desc: "Katta hajmdagi yuklarni xavfsiz tashish uchun qulay va ishonchli."
  },
  {
    title: "Refrejerator",
    desc: "Haroratni saqlash talab etiladigan mahsulotlar uchun maxsus."
  },
  {
    title: "Fura",
    desc: "Xalqaro va uzoq masofalarga yirik yuklarni yetkazib berish."
  },
  {
    title: "Isuzu",
    desc: "O'rta hajmdagi yuklarni shahar ichida va viloyatlararo tashish."
  },
  {
    title: "Gazel",
    desc: "Kichik hajmdagi yuklarni tezkor yetkazib berish uchun qulay."
  },
  {
    title: "Spets texnika",
    desc: "Qurilish va maxsus loyihalar uchun og'ir texnikalar."
  },
  {
    title: "Boshqa",
    desc: "Sizning maxsus talablaringizga mos keladigan boshqa transportlar."
  }
];

export function Fleet() {
  const scrollToForm = () => {
    document.getElementById('register-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="transportlar" className="py-24 bg-secondary-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-h2 text-primary-text mb-4">Bizning transportlar</h2>
          <p className="text-body text-secondary-text max-w-2xl mx-auto">
            Har qanday turdagi yuklar uchun mos keladigan zamonaviy va ishonchli transport vositalari.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {fleet.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333333%-1rem)] xl:w-[calc(25%-1.125rem)] bg-main-bg rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow group flex flex-col"
            >
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <Truck size={24} />
              </div>
              <h3 className="text-button text-primary-text mb-2">{item.title}</h3>
              <p className="text-small text-secondary-text mb-6 flex-grow">{item.desc}</p>
              <button 
                onClick={scrollToForm}
                className="w-full py-2.5 rounded-xl border border-primary text-primary font-medium hover:bg-primary hover:text-white transition-colors flex items-center justify-center gap-2 mt-auto"
              >
                Tanlash
                <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={scrollToForm}
            className="bg-primary text-white px-8 py-4 rounded-xl text-button hover:bg-primary/90 transition-all shadow-md hover:shadow-lg inline-flex items-center justify-center"
          >
            Ro'yxatdan o'tish
          </button>
        </div>
      </div>
    </section>
  );
}
