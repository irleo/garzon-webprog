import { useEffect, useState } from 'react';
import Button from '../../components/Button.jsx';
import ArticleList from '../../components/ArticleList.jsx';
import staticArticles from '../../data/article-content.js';
import { fetchArticles } from '../../services/ArticleService.js';


const ArticleListPage = () => {
  const [articles, setArticles] = useState(staticArticles);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const { data } = await fetchArticles();

        if (data.articles?.length) {
          setArticles(data.articles.filter((article) => article.isActive !== false));
        }
      } catch {
        setArticles(staticArticles);
      }
    };

    loadArticles();
  }, []);

  return (
    <div className="w-full overflow-hidden px-4 py-10 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
      <section className="grid min-h-[48vh] gap-10 py-12 lg:grid-cols-[0.65fr_0.35fr] lg:items-end">
        <div>
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
            Articles
          </p>
          <h1 className="max-w-5xl text-4xl font-black leading-tight text-foreground sm:text-6xl">
            Notes from the web development orbit.
          </h1>
        </div>

        <div className="max-w-xl lg:ml-auto">
          <p className="text-sm leading-7 text-foreground/70 sm:text-base">
            A growing archive of articles about frontend foundations, React,
            styling, navigation, and the ideas I keep returning to while
            building.
          </p>
          <div className="mt-6">
            <Button to="/">Back Home</Button>
          </div>
        </div>
      </section>

      <section className="pb-12 pt-10">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
              Archive
            </p>
            <h2 className="mt-2 text-2xl font-bold text-foreground">
              Latest articles
            </h2>
          </div>
          <p className="text-sm text-foreground/55">
            {articles.length} {articles.length === 1 ? 'entry' : 'entries'} available
          </p>
        </div>

        <ArticleList articles={articles} />
      </section>
    </div>
  );
};

export default ArticleListPage;
