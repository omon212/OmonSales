import React from 'react';
import { motion } from 'motion/react';
import { XCircle, CheckCircle2 } from 'lucide-react';

const problems = [
  "Yuk kechikishi",
  "Hujjatlar",
  "Ishonchsiz haydovchilar",
  "Yuqori narx",
  "Sifat kafolati yo'q",
];

const solutions = [
  "Tez yetkazib berish",
  "Professional haydovchilar",
  "Adolatli narx",
  "24/7 aloqa",
  "Kuzatuv tizimi"
];

export function ProblemsSolutions() {
  const scrollToForm = () => {
    document.getElementById('register-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="xizmatlar" className="py-24 bg-main-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-h2 text-primary-text mb-4">
            Mijozlarimiz duch keladigan muammolar
          </h2>
          <p className="text-body text-secondary-text max-w-2xl mx-auto">
            Biz logistika sohasidagi barcha kamchiliklarni o'rganib chiqdik va
            siz uchun eng yaxshi yechimni taklif qilamiz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {/* Problems Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-secondary-bg rounded-2xl p-8 border border-border shadow-sm"
          >
            <h3 className="text-h3 text-error mb-8 flex items-center gap-3">
              <XCircle size={32} />
              Muammolar
            </h3>
            <ul className="space-y-6">
              {problems.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-error/10 flex items-center justify-center flex-shrink-0">
                    <XCircle size={16} className="text-error" />
                  </div>
                  <span className="text-body text-primary-text">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-primary/5 rounded-2xl p-8 border border-primary/20 shadow-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <h3 className="text-h3 text-success mb-8 flex items-center gap-3 relative z-10">
              <CheckCircle2 size={32} />
              Bizning yechim
            </h3>
            <ul className="space-y-6 relative z-10">
              {solutions.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={16} className="text-success" />
                  </div>
                  <span className="text-body text-primary-text font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={scrollToForm}
            className="bg-primary text-white px-8 py-4 rounded-xl text-button hover:bg-primary/90 transition-all shadow-md hover:shadow-lg inline-flex items-center justify-center"
          >
            Xizmatdan foydalanish
          </button>
        </div>
      </div>
    </section>
  );
}
