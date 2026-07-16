import ArticleSignature from "@/components/articleSignature";
import { getArticleBySlug } from "@/lib/posts";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
      <h1 className="mb-8 mt-24">{article.title}</h1>
      <div className="prose prose-invert max-w-2xl">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {article.content}
        </ReactMarkdown>
      </div>
      <ArticleSignature />
    </div>
  );
};

export default RoutesArticles;
