import { Link } from "react-router-dom";
import Button from "./Button";

const ArticleList = ({ articles }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {articles.map((article, index) => (
        <article
          key={article.name}
          className="relative rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4"
        >
          {article.isFeatured ? (
            <span className="absolute right-6 top-6 z-10 rounded-full border-2 border-zinc-900 bg-zinc-900 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
              Featured
            </span>
          ) : null}

          <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200">
            {article.image ? (
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover rounded-[1.25rem]"
              />
            ) : (
              <div className="h-24 w-24 border-2 border-zinc-300 bg-zinc-100" />
            )}
          </div>

          <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
            Article {String(index + 1).padStart(2, "0")}
          </p>

          <h3 className="mt-2 text-lg font-semibold text-zinc-900">
            {article.title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-zinc-600">
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
