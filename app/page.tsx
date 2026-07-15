import ArticleCard from "@/components/articleCard";
import ExploreButton from "../components/exploreButton";
import { articleMD } from "@/lib/posts";
import AboutAuthor from "../components/aboutAuthor";

const Page = () => {
  const articles = articleMD();
  return (
    <section>
      <h1 className="text-center">
        Um espaço para acompanhar, de perto, o processo real de virar
        desenvolvedora
        <p className="text-center mt-5">
          {" "}
          com os acertos e as dúvidas no caminho.{" "}
        </p>
      </h1>
      <ExploreButton />
      <div className="mt-20 space-y-7">
        <h3> Artigos recentes</h3>
        <ul className="articles list-none">
          {articles.map((article) => (
            <li key={article.title}>
              <ArticleCard {...article} />
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-20 space-y-7">
        <h3> Sobre a autora </h3>
        <AboutAuthor />
      </div>
    </section>
  );
};

export default Page;
