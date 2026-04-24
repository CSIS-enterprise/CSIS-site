

export interface ArticleMetadata {
  title: string;
  dateStr: string;
  description: string;
  slug: string;
  category: string;
  author: string;
}

export interface Article {
  meta: ArticleMetadata;
  content: string;
}

// Função simples para extrair frontmatter (no-dependencies, excelente para frontend/Vite)
const parseFrontmatter = (mdContent: string) => {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(mdContent);
  const data: Record<string, string> = {};
  
  if (match) {
    const yamlString = match[1];
    const lines = yamlString.split('\n');
    lines.forEach(line => {
      const [key, ...valueParts] = line.split(':');
      if (key && valueParts.length) {
        data[key.trim()] = valueParts.join(':').trim();
      }
    });
    return { data, content: mdContent.replace(frontmatterRegex, '').trim() };
  }
  return { data: {}, content: mdContent };
};

// Retorna todos os artigos lidos do Vite
export const getAllArticles = (): Article[] => {
  // A tipagem Record<string, string> ajuda a ler o raw gerado pelo rollup
  const files = import.meta.glob('/src/content/articles/**/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
  const articles: Article[] = [];

  for (const path in files) {
    const rawContent = files[path];
    
    // Parseia o Frontmatter e o Content livre de dependências pesadas
    const { data, content } = parseFrontmatter(rawContent);

    // Constrói o Slug baseando no nome do arquivo e diretório pai. Ex: /src/content/articles/labs/meu-post.md => labs/meu-post
    const slug = path.replace('/src/content/articles/', '').replace('.md', '');

    articles.push({
      meta: {
        title: data.title || 'Artigo sem título',
        dateStr: data.date || '01/01/2026',
        description: data.description || 'Nenhuma descrição fornecida.',
        slug,
        category: data.category || 'Geral',
        author: data.author || 'Equipe CSIS',
      },
      content,
    });
  }

  // Ordena do mais recente para o mais antigo, se a data estiver num formato válido parseável (ex: AAAA-MM-DD)
  return articles.sort((a, b) => new Date(b.meta.dateStr).getTime() - new Date(a.meta.dateStr).getTime());
};

export const getArticleBySlug = (slug: string): Article | undefined => {
  const articles = getAllArticles();
  return articles.find((a) => a.meta.slug === slug);
};
