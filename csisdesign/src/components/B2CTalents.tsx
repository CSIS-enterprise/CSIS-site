import React, { Children } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Target, Award, Github, ArrowRight } from 'lucide-react';
export function B2CTalents() {
  const phases = [
  {
    icon: <BookOpen className="w-6 h-6 text-brand-slate" />,
    title: 'Childrens & Basic',
    description: 'Acesso contínuo e direcionado. Transmissão de conhecimento modular, focada no nível básico até o entendimento prático.',
    borderColor: 'border-l-brand-slate'
  },
  {
    icon: <Target className="w-6 h-6 text-brand-blue" />,
    title: 'Report Writing Especializado',
    description: 'Etapa fundamental da CSIS: capacitação em escrita rigorosa e visual de provas forenses compreensíveis para tribunais.',
    borderColor: 'border-l-brand-blue'
  },
  {
    icon: <Award className="w-6 h-6 text-brand-gold" />,
    title: 'Advanced & Bounties',
    description: 'Execução de missões remuneradas solucionando lacunas reais do B2B e rentabilizando o talento durante os estudos.',
    borderColor: 'border-l-brand-gold'
  }];

  return (
    <section id="b2c" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
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
            
            <h2 className="text-3xl md:text-5xl font-black text-brand-navy mb-6 tracking-tight">
              O Ecossistema Tático de Educação
            </h2>
            <p className="text-xl text-brand-slate font-light mb-8 leading-relaxed">
              O talento não adquire apenas teoria engessada. Formamos a força de trabalho através de uma <span className="font-bold">Roda Virtuosa (Talent Flywheel)</span>: desafios práticos chancelados e recompensados financeiramente.
            </p>

            <img 
              src="/images/csis_b2c_1776490187573.png" 
              alt="Hacker Student CSIS" 
              className="w-full h-auto aspect-video object-cover rounded-xl shadow-lg mb-8"
            />

            <div className="bg-brand-ice border border-brand-border rounded-xl p-6 mb-8 flex items-start gap-4">
              <div className="p-3 bg-white rounded-lg shadow-sm shrink-0">
                <Github className="w-6 h-6 text-brand-navy" />
              </div>
              <div>
                <h4 className="font-bold text-brand-navy text-lg mb-1">
                  O Círculo de Monetização (Bounties)
                </h4>
                <p className="text-brand-slate">
                  Alunos diplomados em laboratórios práticos ganham o direito de trabalhar em Issues no GitHub, construindo portfólio forense e sendo pagos por Pull Requests aprovados.
                </p>
              </div>
            </div>

            <Link
              to="/blog"
              className="inline-flex items-center gap-3 px-8 py-4 bg-brand-gold text-brand-navy font-bold rounded hover:bg-yellow-500 transition-colors shadow-md">
              
              Acessar Artigos e Hub de Inteligência
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Right Stacked Cards */}
          <div className="space-y-6">
            {phases.map((phase, index) =>
            <motion.div
              key={index}
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
              transition={{
                delay: index * 0.1
              }}
              className={`bg-white p-8 rounded-r-xl border border-brand-border shadow-sm border-l-4 ${phase.borderColor} flex items-center gap-6 hover:shadow-md transition-shadow`}>
              
                <div className="w-14 h-14 rounded-full bg-brand-ice flex items-center justify-center shrink-0">
                  {phase.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-navy mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-brand-slate text-lg font-light">
                    {phase.description}
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>);

}