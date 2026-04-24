import React from 'react';
import { Link } from 'react-router-dom';
import { getAllArticles } from '../utils/markdownLoader';
import { BookOpen } from 'lucide-react';

export function BlogList() {
  const articles = getAllArticles();

  return (
    <div className="min-h-screen bg-brand-ice pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-black text-brand-navy mb-6 tracking-tight">
          Hub de Inteligência e Conteúdo
        </h1>
        <p className="text-xl text-brand-slate font-light max-w-3xl mx-auto">
          Estude nossa base tática de conhecimentos em Cibersegurança, Threat Hunting e Laboratórios Ofensivos Práticos.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {articles.length === 0 ? (
          <div className="text-center text-brand-slate py-12">Nenhum artigo encontrado em /src/content/articles/</div>
        ) : (
          <div className="grid gap-8">
            {articles.map((article) => (
              <Link 
                key={article.meta.slug} 
                to={`/blog/${article.meta.slug}`}
                className="block bg-white p-8 rounded-xl shadow-sm hover:shadow-md border border-brand-border group transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase rounded flex items-center gap-2">
                    <BookOpen className="w-3 h-3" />
                    {article.meta.category}
                  </span>
                  <span className="text-brand-slate/60 text-sm">{article.meta.dateStr}</span>
                </div>
                
                <h2 className="text-2xl font-bold text-brand-navy mb-3 group-hover:text-brand-blue transition-colors">
                  {article.meta.title}
                </h2>
                <p className="text-brand-slate leading-relaxed mb-4">
                  {article.meta.description}
                </p>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-brand-navy">Por {article.meta.author}</span>
                  <span className="text-brand-blue font-bold group-hover:underline">Ler artigo completo &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
