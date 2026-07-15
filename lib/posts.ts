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
