import React from 'react';
import { motion } from 'framer-motion';
import { Search, ShieldAlert, Activity, ArrowRight } from 'lucide-react';
export function B2BSolutions() {
  const solutions = [
  {
    icon: <Search className="w-10 h-10 text-brand-blue" strokeWidth={1.5} />,
    title: 'Laudos de Perícia Digital',
    description:
    'Extrações, processamento e análises (Forensics) em dispositivos móveis e infraestruturas corporativas, indispensáveis para instrução de litígios.',
    link: '#contato',
    color: 'brand-blue',
    borderColor: 'border-brand-blue'
  },
  {
    icon:
    <ShieldAlert className="w-10 h-10 text-brand-gold" strokeWidth={1.5} />,

    title: 'Testes de Invasão (Pentest)',
    description:
    'Execução tática de simulações (Red Team) para identificação cirúrgica e prevenção de resgates maliciosos (ransomware) e blindagem de redes.',
    link: '#contato',
    color: 'brand-gold',
    borderColor: 'border-brand-gold'
  },
  {
    icon:
    <Activity className="w-10 h-10 text-emerald-500" strokeWidth={1.5} />,

    title: 'Mitigação de Riscos e Blue Team',
    description:
    'Pareceres táticos avançados orientando empresas a blindarem seus processos, com rigorosa auditoria final (Qualidade Ouro) do Perito Sênior.',
    link: '#contato',
    color: 'emerald-500',
    borderColor: 'border-emerald-500'
  }];

  return (
    <>
      <section id="b2b" className="py-24 bg-brand-ice">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
            <div className="flex-1 text-left">
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
                
                Nosso Catálogo Corporativo
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
                className="text-xl text-brand-slate font-light mb-6">
                
                Inteligência técnica digital tangível e homologada. Provemos perícia avançada com custos marginais declinantes graças ao nosso modelo "Flywheel".
              </motion.p>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex-1 w-full relative">
              <img src="/images/csis_b2b_1776490169939.png" alt="CSIS B2B Threat Hunting" className="rounded-xl shadow-2xl object-cover w-full h-[300px]" />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-xl"></div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {solutions.map((solution, index) =>
            <motion.div
              key={index}
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
                delay: index * 0.1
              }}
              className={`bg-brand-navy rounded-xl p-8 shadow-lg border-t-4 ${solution.borderColor} hover:-translate-y-1 transition-transform duration-300 flex flex-col h-full`}>
              
                <div className="mb-8">{solution.icon}</div>
                <h3
                className={`text-2xl font-bold mb-4 text-${solution.color}`}>
                
                  {solution.title}
                </h3>
                <p className="text-white/80 mb-8 leading-relaxed font-light flex-grow">
                  {solution.description}
                </p>
                <a
                href={solution.link}
                className={`inline-flex items-center gap-2 text-sm font-bold text-${solution.color} hover:opacity-80 transition-opacity mt-auto`}>
                
                  Saiba mais
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            )}
          </div>

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
            className="bg-white rounded-xl p-8 border border-brand-border flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            
            <div>
              <h4 className="text-xl font-bold text-brand-navy mb-2">
                Estrutura Lean. Entrega Ágil.
              </h4>
              <p className="text-brand-slate">
                Custo-benefício superior ao de grandes consultorias, mantendo o
                padrão-ouro de qualidade.
              </p>
            </div>
            <a
              href="#contato"
              className="px-6 py-3 bg-brand-navy text-white font-bold rounded hover:bg-brand-dark transition-colors whitespace-nowrap">
              
              Conheça nossa metodologia
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats Band */}
      <section className="bg-brand-blue py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20">
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9
              }}
              whileInView={{
                opacity: 1,
                scale: 1
              }}
              viewport={{
                once: true
              }}>
              
              <div className="text-4xl md:text-5xl font-black text-white mb-2">
                450+
              </div>
              <div className="text-sm md:text-base text-white/90 font-medium uppercase tracking-wider">
                Laudos Periciais
              </div>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9
              }}
              whileInView={{
                opacity: 1,
                scale: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: 0.1
              }}>
              
              <div className="text-4xl md:text-5xl font-black text-white mb-2">
                10+
              </div>
              <div className="text-sm md:text-base text-white/90 font-medium uppercase tracking-wider">
                Anos de Experiência
              </div>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9
              }}
              whileInView={{
                opacity: 1,
                scale: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: 0.2
              }}>
              
              <div className="text-4xl md:text-5xl font-black text-white mb-2">
                100%
              </div>
              <div className="text-sm md:text-base text-white/90 font-medium uppercase tracking-wider">
                Remoto
              </div>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9
              }}
              whileInView={{
                opacity: 1,
                scale: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: 0.3
              }}>
              
              <div className="text-4xl md:text-5xl font-black text-white mb-2">
                4
              </div>
              <div className="text-sm md:text-base text-white/90 font-medium uppercase tracking-wider">
                Certificações Globais
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>);

}