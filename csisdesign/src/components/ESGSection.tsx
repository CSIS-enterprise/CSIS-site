import React from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake, Leaf } from 'lucide-react';
export function ESGSection() {
  return (
    <section id="esg" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            className="text-3xl md:text-5xl font-black text-brand-navy mb-6 tracking-tight">
            
            Pilares e Valores CSIS
          </motion.h2>
          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.1
            }}
            className="text-xl text-brand-slate font-light">
            
            Princípios fundamentais e inegociáveis que regem nossa comunidade e prestação de serviço.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            className="p-10 rounded-xl bg-brand-ice border border-brand-border border-t-4 border-t-brand-blue">
            
            <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm mb-8">
              <HeartHandshake className="w-8 h-8 text-brand-blue" />
            </div>
            <h3 className="text-3xl font-bold text-brand-navy mb-4">
              Crescimento Colaborativo
            </h3>
            <p className="text-brand-slate text-lg font-light leading-relaxed">
              O ecossistema se sustenta em acolher o iniciante, ensinar ativamente e incentivar o desenvolvimento mútuo, democratizando o acesso à excelência técnica.
            </p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.2
            }}
            className="p-10 rounded-xl bg-brand-ice border border-brand-border border-t-4 border-t-emerald-500">
            
            <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm mb-8">
              <Leaf className="w-8 h-8 text-emerald-500" />
            </div>
            <h3 className="text-3xl font-bold text-brand-navy mb-4">
              Meritocracia e Eficiência
            </h3>
            <p className="text-brand-slate text-lg font-light leading-relaxed">
              Superação da teoria pela execução prática. O reconhecimento baseia-se unicamente na capacidade de entrega da arquitetura "Bootstrapped-Lean".
            </p>
          </motion.div>
        </div>
      </div>
    </section>);

}