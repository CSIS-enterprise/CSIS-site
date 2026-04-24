import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import { getArticleBySlug } from '../utils/markdownLoader';
import { ArrowLeft } from 'lucide-react';

export function ArticlePage() {
  // Pega todos os parâmetros que estiverem depois de /blog/ (ex: pasta/subpasta/meuartigo)
  const params = useParams();
  const slug = params['*']; 

  if (!slug) {
    return <div className="p-24 text-center">Artigo não especificado.</div>;
  }

  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-brand-ice pt-32 pb-24 px-4 text-center">
        <h1 className="text-4xl font-black text-brand-navy mb-4">Artigo não encontrado</h1>
        <p className="text-brand-slate mb-8">Não conseguimos localizar "<b>{slug}</b>".</p>
        <Link to="/blog" className="text-brand-blue font-bold px-6 py-3 bg-white rounded shadow">
          Voltar para o Hub
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="pt-32 pb-16 bg-brand-navy border-b border-brand-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8 font-semibold">
            <ArrowLeft className="w-5 h-5"/>
            Voltar para o Blog
          </Link>
          <div className="flex gap-4 items-center mb-6">
            <span className="px-3 py-1 bg-brand-gold text-brand-navy text-xs font-bold uppercase rounded">
              {article.meta.category}
            </span>
            <span className="text-white/50 text-sm font-light">
              {article.meta.dateStr}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white leading-[1.2] tracking-tight mb-6">
            {article.meta.title}
          </h1>
          <p className="text-xl text-white/80 font-light">
            {article.meta.description}
          </p>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        {/* Usamos o plugin typography do tailwind (classe prose) para formatar lindo! */}
        <div className="prose prose-lg prose-blue max-w-none text-brand-slate">
          <Markdown>{article.content}</Markdown>
        </div>
        
        <div className="mt-16 pt-8 border-t border-brand-border">
          <p className="text-sm font-bold text-brand-navy uppercase tracking-wider mb-1">Autor</p>
          <p className="text-lg text-brand-slate">{article.meta.author}</p>
        </div>
      </article>
    </div>
  );
}
