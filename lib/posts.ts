import path from "path";
import fs from "fs";
import matter from "gray-matter";

export const articleMD = () => {
  const articlePath = path.join(process.cwd(), "posts");

  const article = fs.readdirSync(articlePath);

  const articlesContent = article
    .map((fileName) => {
      const filePath = path.join(articlePath, fileName);
      const readContentFile = fs.readFileSync(filePath, "utf-8");
      const contentArticle = matter(readContentFile);
      return {
        title: contentArticle.data.title,
        slug: fileName.replace(".md", ""),
        content: contentArticle.content,
        image: contentArticle.data.image,
        tags: contentArticle.data.tags,
        date: contentArticle.data.date,
        draft: contentArticle.data.draft,
      };
    })
    .filter((article) => article.draft === false);

  return articlesContent;
};

export function getArticleBySlug(slug: string) {
  const folderPath = path.join(process.cwd(), "posts");
  const filePath = path.join(folderPath, `${slug}.md`);
  const readFile = fs.readFileSync(filePath, "utf-8");
  const contentArticle = matter(readFile);

  return {
    title: contentArticle.data.title,
    content: contentArticle.content,
    date: contentArticle.data.date,
    image: contentArticle.data.image,
    tags: contentArticle.data.tags,
  };
}
