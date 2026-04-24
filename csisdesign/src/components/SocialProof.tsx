import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, PlayCircle, Shield, Cloud, Lock, ExternalLink } from 'lucide-react';
export function SocialProof() {
  const badges = [
  {
    name: 'CompTIA Security+',
    icon: <Lock className="w-4 h-4" />
  },
  {
    name: 'Fortinet',
    icon: <Shield className="w-4 h-4" />
  },
  {
    name: 'Microsoft',
    icon: <CheckCircle2 className="w-4 h-4" />
  },
  {
    name: 'AWS',
    icon: <Cloud className="w-4 h-4" />
  }];

  return (
    <section id="sobre" className="py-24 bg-brand-ice">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Founder Profile */}
          <motion.div
            initial={{
              opacity: 0,
              x: -20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}>
            
            <h2 className="text-3xl md:text-5xl font-black text-brand-navy mb-8 tracking-tight">
              O Arquiteto por Trás da CSIS
            </h2>

            <div className="flex items-center gap-6 mb-10">
              <div className="w-24 h-24 rounded-full bg-brand-navy text-white flex items-center justify-center text-3xl font-black shadow-lg">
                CA
              </div>
              <div>
                <h3 className="text-3xl font-bold text-brand-navy">Christian Amarildo</h3>
                <p className="text-brand-blue font-semibold text-lg">
                  Perito Judicial (TJPA) & Arquiteto de Soluções
                </p>
              </div>
            </div>

            <div className="mb-10">
              <h4 className="text-sm font-bold text-brand-slate uppercase tracking-wider mb-4">
                Certificações Globais
              </h4>
              <div className="flex flex-wrap gap-3">
                {badges.map((badge, idx) =>
                <div
                  key={idx}
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-brand-border rounded text-sm font-bold text-brand-navy shadow-sm">
                  
                    <span className="text-brand-blue">{badge.icon}</span>
                    {badge.name}
                  </div>
                )}
              </div>
            </div>

            <div className="p-6 bg-white rounded-xl border border-brand-border shadow-sm flex items-start gap-5 border-l-4 border-l-brand-blue">
              <PlayCircle className="w-10 h-10 text-brand-blue shrink-0" />
              <div>
                <h4 className="font-bold text-brand-navy text-lg mb-2">
                  Excelência e Meritocracia Técnica
                </h4>
                <p className="text-brand-slate leading-relaxed font-light mb-4">
                  A espinha dorsal da CSIS é amparada por Bacharelado em Ciência da Computação (UFPA) e MBAs em Computação Forense (IPOG e Anhanguera). Além disso, somos chancelados por Hackathons de IA (Google Gemini), garantindo a revisão Sênior de excelência em todas as entregas.
                </p>
                <a
                  href="https://linktr.ee/cyberchristian"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-navy text-white text-sm font-bold rounded hover:bg-brand-blue transition-colors shadow-sm mt-2">
                  
                  Saiba mais sobre mim
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Testimonial/Quote */}
          <motion.div
            initial={{
              opacity: 0,
              x: 20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            className="relative">
            
            <div className="bg-white p-12 rounded-2xl shadow-xl border border-brand-border relative z-10 border-t-4 border-t-brand-gold">
              <div className="text-6xl text-brand-gold opacity-30 font-serif leading-none absolute top-8 left-8">
                "
              </div>
              <p className="text-2xl text-brand-navy leading-relaxed mb-10 font-light relative z-10 pt-8">
                A clareza técnica e a validade jurídica dos laudos da CSIS
                mudaram o patamar das nossas defesas cibernéticas. Não é apenas
                tecnologia, é inteligência aplicada ao direito.
              </p>
              <div className="flex items-center gap-5 border-t border-brand-border pt-8">
                <div className="w-14 h-14 rounded-full bg-brand-navy flex items-center justify-center text-white font-bold text-xl">
                  MC
                </div>
                <div>
                  <div className="text-brand-navy font-bold text-lg">
                    Dr. Marcos Costa
                  </div>
                  <div className="text-brand-slate">
                    Sócio, Costa & Advogados Associados
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-brand-navy rounded-2xl -z-10 opacity-5" />
          </motion.div>
        </div>
      </div>
    </section>);

}