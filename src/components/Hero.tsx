import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Truck, ShieldCheck, Clock } from 'lucide-react';

export function Hero() {
  const scrollToForm = () => {
    document.getElementById('register-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-secondary-bg overflow-hidden pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-small mb-6">
              <Truck size={16} />
              <span>O'zbekiston bo'ylab ishonchli xizmat</span>
            </div>
            <h1 className="text-h1 text-primary-text mb-6">
              Ishonchli yuk tashish – sizga kerakli joyga, kerakli vaqtda!
            </h1>
            <p className="text-body text-secondary-text mb-10 max-w-xl">
              OMON LOGISTICS – 20 yillik tajribaga ega xalqaro logistika kompaniyasi. Biz yuklaringizni xavfsiz, tez va samarali yetkazamiz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToForm}
                className="bg-primary text-white px-8 py-4 rounded-xl text-button hover:bg-primary/90 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
              >
                Ro'yxatdan o'tish
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Abstract modern illustration placeholder */}
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-info/20 rounded-[40px] rotate-6 scale-105 blur-xl"></div>
              <div className="absolute inset-0 bg-white rounded-[40px] shadow-xl overflow-hidden border border-border flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=1000&q=80" 
                  alt="Logistics Truck" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Floating badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-lg border border-border flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center text-success">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="text-small font-bold text-primary-text">100% Kafolat</p>
                  <p className="text-caption text-secondary-text">Xavfsiz yetkazish</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -left-8 bg-white p-4 rounded-2xl shadow-lg border border-border flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-small font-bold text-primary-text">Tezkor xizmat</p>
                  <p className="text-caption text-secondary-text">24/7 aloqa</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
