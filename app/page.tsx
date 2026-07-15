import ArticleCard from "@/components/articleCard";
import ExploreButton from "../components/exploreButton";
import { articleMD } from "@/lib/posts";
import AboutAuthor from "../components/aboutAuthor";

const Page = () => {
  const articles = articleMD();
  return (
    <section
      id="home"
      className="pt-16 md:pt-24 max-w-4xl mx-auto flex flex-col items-center"
    >
      <h1 className="text-center text-4xl md:text-5xl lg:text-6xl leading-tight">
        Um espaço para acompanhar, de perto, o processo real de virar
        desenvolvedora
      </h1>
      <h3 className="text-center mt-6 text-xl md:text-2xl text-pink-400 font-medium max-w-2xl">
        {" "}
        com os acertos e as dúvidas no caminho.{" "}
      </h3>
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
