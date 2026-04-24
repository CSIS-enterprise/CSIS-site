import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
export function HeroSection() {
  return (
    <section className="relative pt-40 pb-24 lg:pt-56 lg:pb-40 overflow-hidden bg-brand-navy">
      <div className="absolute inset-0 z-0 bg-brand-navy">
        <img 
          src="/images/csis_hero_bg_1776490159314.png" 
          alt="CSIS Cyber Security Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-transparent" />
        <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-brand-blue/30 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.7,
              ease: 'easeOut'
            }}>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight">
              Inteligência forense e ação tática para blindar sua empresa.
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-white/80 mb-10 leading-relaxed font-light max-w-2xl">
              Garantimos proteção de padrão-ouro em testes de invasão e perícia digital avançada administrada por Perito Judicial Sênior. E também capacitamos a nova geração de especialistas B2C no Brasil.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#b2b"
                className="inline-flex justify-center items-center gap-3 px-8 py-4 bg-brand-gold text-brand-navy text-lg font-bold rounded hover:bg-yellow-500 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                
                Para Empresas (B2B)
                <div className="bg-brand-navy/10 p-1 rounded-full">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </a>
              <a
                href="#b2c"
                className="inline-flex justify-center items-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white text-lg font-bold rounded hover:bg-white/10 transition-all">
                
                Comunidade e Cursos (B2C)
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}