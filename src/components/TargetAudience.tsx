import React from 'react';
import { motion } from 'motion/react';
import { Building2, Briefcase, User, HardHat, Star } from 'lucide-react';

const targets = [
  { icon: <Building2 size={32} />, title: "Yirik korxonalar" },
  { icon: <Briefcase size={32} />, title: "O'rta biznes" },
  { icon: <User size={32} />, title: "Jismoniy shaxslar" },
  { icon: <HardHat size={32} />, title: "Qurilish kompaniyalari" }
];

const testimonials = [
  {
    name: "Aziz Rahimov",
    company: "Artel Group",
    text: "OMON LOGISTICS bilan ishlash juda qulay. Yuklarimiz doim o'z vaqtida va xavfsiz yetib keladi. Tavsiya qilaman!",
    rating: 5
  },
  {
    name: "Malika Usmonova",
    company: "Texnomart",
    text: "Professional haydovchilar va tezkor xizmat. Narxlar ham juda adolatli. Bizning doimiy hamkorimizga aylanishdi.",
    rating: 5
  },
  {
    name: "Sardor Karimov",
    company: "Qurilish Invest",
    text: "Spets texnikalar ijarasi bo'yicha eng yaxshi xizmat. Texnikalar yangi va soz holatda. Rahmat!",
    rating: 5
  }
];

export function TargetAudience() {
  const scrollToForm = () => {
    document.getElementById('register-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="sharhlar" className="py-24 bg-main-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Target Audience */}
        <div className="text-center mb-16">
          <h2 className="text-h2 text-primary-text mb-4">Kimlar uchun xizmat ko'rsatamiz?</h2>
          <p className="text-body text-secondary-text max-w-2xl mx-auto">
            Biz barcha turdagi mijozlar uchun moslashuvchan va ishonchli logistika yechimlarini taklif etamiz.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {targets.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-secondary-bg rounded-2xl p-8 border border-border flex flex-col items-center text-center hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-button text-primary-text">{item.title}</h3>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-16">
          <h2 className="text-h2 text-primary-text mb-4">Mijozlarimiz fikri</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-secondary-bg rounded-2xl p-8 border border-border shadow-sm flex flex-col"
            >
              <div className="flex gap-1 text-warning mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="text-body text-secondary-text italic mb-8 flex-grow">
                "{item.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-lg">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-button text-primary-text">{item.name}</h4>
                  <p className="text-caption text-secondary-text">{item.company}</p>
                </div>
              </div>
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
