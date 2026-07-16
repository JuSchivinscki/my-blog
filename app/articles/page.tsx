import ArticleCard from "@/components/articleCard";
import { articleMD } from "@/lib/posts";

const ArticlesPage = () => {
  const articles = articleMD();

  return (
    <section>
      <h3 className="mb-8 mt-24"> Todos os artigos </h3>
      <ul className="articles list-none">
        {articles.map((article) => (
          <li key={article.slug}>
            <ArticleCard {...article} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ArticlesPage;
