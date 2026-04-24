import React from 'react';
import { Shield, Youtube, Linkedin, Github, ArrowRight } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-brand-dark text-white/70">
      {/* Pre-footer CTA Band */}
      <div className="bg-brand-blue py-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
              Precisa de ajuda urgente?
            </h3>
            <p className="text-white/90 text-lg font-light">
              Fale com um especialista agora para resposta a incidentes.
            </p>
          </div>
          <a
            href="#contato"
            className="px-8 py-4 bg-brand-gold text-brand-navy font-bold rounded hover:bg-yellow-500 transition-colors shadow-lg flex items-center gap-2 whitespace-nowrap">
            
            Reportar Incidente
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-8 h-8 text-brand-blue" />
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-white leading-none tracking-tight">
                    CSIS
                  </span>
                  <span className="text-[9px] uppercase tracking-wider text-white/50 font-bold mt-0.5">
                    CyberNorte Secure Intelligence Services
                  </span>
                </div>
              </div>
              <p className="text-base font-light leading-relaxed mb-8 max-w-sm">
                Centro de Inteligência especializado em perícia forense digital,
                testes de invasão e formação da elite técnica em cibersegurança.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white transition-colors">
                  
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white transition-colors">
                  
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white transition-colors">
                  
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">
                Soluções B2B
              </h4>
              <ul className="space-y-3 text-sm font-light">
                <li>
                  <a
                    href="#b2b"
                    className="hover:text-brand-gold transition-colors">
                    
                    Perícia Forense Digital
                  </a>
                </li>
                <li>
                  <a
                    href="#b2b"
                    className="hover:text-brand-gold transition-colors">
                    
                    Pentest & Testes de Invasão
                  </a>
                </li>
                <li>
                  <a
                    href="#b2b"
                    className="hover:text-brand-gold transition-colors">
                    
                    Threat Intelligence
                  </a>
                </li>
                <li>
                  <a
                    href="#b2b"
                    className="hover:text-brand-gold transition-colors">
                    
                    Consultoria Estratégica
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">
                Institucional
              </h4>
              <ul className="space-y-3 text-sm font-light">
                <li>
                  <a
                    href="#sobre"
                    className="hover:text-brand-gold transition-colors">
                    
                    Sobre a CyberNorte
                  </a>
                </li>
                <li>
                  <a
                    href="#b2c"
                    className="hover:text-brand-gold transition-colors">
                    
                    Fábrica de Talentos
                  </a>
                </li>
                <li>
                  <a
                    href="#esg"
                    className="hover:text-brand-gold transition-colors">
                    
                    Compromisso ESG
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-brand-gold transition-colors">
                    
                    Carreiras
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">
                Contato
              </h4>
              <ul className="space-y-3 text-sm font-light">
                <li>
                  <a
                    href="#contato"
                    className="hover:text-brand-gold transition-colors">
                    
                    Fale Conosco
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-brand-gold transition-colors">
                    
                    Blog & Conteúdos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-brand-gold transition-colors">
                    
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-red-400 hover:text-red-300 font-semibold transition-colors">
                    
                    Sofreu um incidente?
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-xs text-center flex flex-col md:flex-row justify-between items-center gap-4 font-light">
            <p>
              &copy; {new Date().getFullYear()} CyberNorte Secure Intelligence
              Services (CSIS). Todos os direitos reservados.
            </p>
            <p>Inteligência, Proteção e Conformidade.</p>
          </div>
        </div>
      </div>
    </footer>);

}