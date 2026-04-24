import React from 'react';
import { motion } from 'framer-motion';
import {
  Youtube,
  BookOpen,
  MessageSquare,
  Mail,
  ArrowRight } from
'lucide-react';
export function ContactSection() {
  return (
    <section id="contato" className="py-24 bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Contact Form */}
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
            
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">
              Pronto para Proteger seu Negócio?
            </h2>
            <p className="text-white/80 mb-10 text-xl font-light">
              Fale com nossos especialistas. Entenderemos sua necessidade para
              propor a melhor solução de inteligência.
            </p>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-white/90 mb-2">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3.5 bg-white text-brand-navy rounded focus:ring-2 focus:ring-brand-gold focus:outline-none transition-shadow"
                    placeholder="Seu nome" />
                  
                </div>
                <div>
                  <label className="block text-sm font-bold text-white/90 mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3.5 bg-white text-brand-navy rounded focus:ring-2 focus:ring-brand-gold focus:outline-none transition-shadow"
                    placeholder="Sua empresa" />
                  
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-white/90 mb-2">
                    E-mail Corporativo
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3.5 bg-white text-brand-navy rounded focus:ring-2 focus:ring-brand-gold focus:outline-none transition-shadow"
                    placeholder="email@empresa.com" />
                  
                </div>
                <div>
                  <label className="block text-sm font-bold text-white/90 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3.5 bg-white text-brand-navy rounded focus:ring-2 focus:ring-brand-gold focus:outline-none transition-shadow"
                    placeholder="(00) 00000-0000" />
                  
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-white/90 mb-2">
                  Área de Interesse
                </label>
                <select className="w-full px-4 py-3.5 bg-white text-brand-navy rounded focus:ring-2 focus:ring-brand-gold focus:outline-none transition-shadow">
                  <option>Perícia Forense Digital</option>
                  <option>Pentest / Defesa Cibernética</option>
                  <option>Threat Intelligence</option>
                  <option>Formação Acadêmica (B2C)</option>
                  <option>Outros</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-white/90 mb-2">
                  Mensagem
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3.5 bg-white text-brand-navy rounded focus:ring-2 focus:ring-brand-gold focus:outline-none transition-shadow resize-none"
                  placeholder="Como podemos ajudar?">
                </textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-brand-gold hover:bg-yellow-500 text-brand-navy font-black text-lg rounded transition-colors shadow-lg flex justify-center items-center gap-2">
                
                Enviar Mensagem
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </motion.div>

          {/* Right: Quick Links */}
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
            className="lg:pl-16 flex flex-col justify-center">
            
            <h3 className="text-2xl font-bold mb-8 text-white">
              Conecte-se com a CyberNorte
            </h3>

            <div className="space-y-4">
              <a
                href="#"
                className="flex items-center gap-5 p-5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group">
                
                <div className="w-14 h-14 bg-red-500/20 text-red-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Youtube className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">
                    Canal no YouTube
                  </h4>
                  <p className="text-white/70 font-light">
                    Análises de casos reais e aulas
                  </p>
                </div>
              </a>

              <a
                href="#hotmart"
                className="flex items-center gap-5 p-5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group">
                
                <div className="w-14 h-14 bg-brand-blue/20 text-brand-blue rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <BookOpen className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Plataforma B2C</h4>
                  <p className="text-white/70 font-light">
                    Acesso à trilha de treinamento Hotmart
                  </p>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center gap-5 p-5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group">
                
                <div className="w-14 h-14 bg-green-500/20 text-green-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">
                    WhatsApp Direto
                  </h4>
                  <p className="text-white/70 font-light">
                    Atendimento ágil para urgências
                  </p>
                </div>
              </a>

              <a
                href="mailto:contato@csis.com.br"
                className="flex items-center gap-5 p-5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group">
                
                <div className="w-14 h-14 bg-brand-gold/20 text-brand-gold rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">E-mail</h4>
                  <p className="text-white/70 font-light">
                    contato@csis.com.br
                  </p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}