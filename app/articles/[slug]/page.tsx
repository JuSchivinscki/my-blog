import { getArticleBySlug } from "@/lib/posts";

interface Props {
  params: {
    slug: string;
  };
}

const RoutesArticles = async ({ params }: Props) => {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  return (
    <div>
      <h1>{article.title}</h1>
      <p> {article.content}</p>
    </div>
  );
};

export default RoutesArticles;
