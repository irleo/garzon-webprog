import { Link } from "react-router-dom";
import Button from "./Button";

const ArticleList = ({ articles }) => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {articles.map((article, index) => (
        <article
          key={article.name}
          className="group relative overflow-hidden rounded-2xl border border-border/75 bg-card/50 p-4 shadow-[0_20px_70px_rgb(0_0_0_/_0.22)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-primary/60"
        >
          {article.isFeatured ? (
            <span className="absolute right-5 top-5 z-10 rounded-full border border-primary/70 bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-primary-foreground shadow-[0_0_18px_rgba(139,92,246,0.35)]">
              Featured
            </span>
          ) : null}

          <div className="flex aspect-4/3 items-center justify-center overflow-hidden rounded-xl bg-background/50">
            {article.image ? (
              <img
                src={article.image}
                alt={article.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="h-24 w-24 rounded-xl border border-border bg-card/80" />
            )}
          </div>

          <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">
            Article {String(index + 1).padStart(2, "0")}
          </p>

          <h3 className="mt-3 text-lg font-bold text-foreground">
            {article.title}
          </h3>

          <p className="mt-4 text-sm leading-7 text-foreground/65">
            {(article.content?.[0] || "").substring(0, 150)}...
          </p>

          <Link to={`/articles/${article.name}`}>
            <Button className="mt-4 cursor-pointer">Read More</Button>
          </Link>
        </article>
      ))}
    </div>
  );
};

export default ArticleList;
