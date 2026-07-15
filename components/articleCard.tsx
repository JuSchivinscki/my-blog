import Image from "next/image";
import Link from "next/link";
import { CalendarDays } from "lucide-react";

interface Props {
  title: string;
  image: string;
  slug: string;
  date: string;
}

const ArticleCard = ({ title, image, slug, date }: Props) => {
  return (
    <Link href={`/articles/${slug}`} id="article-card">
      <Image
        src={image}
        alt={title}
        width={410}
        height={300}
        className="poster"
      />

      <p className="title"> {title} </p>
      <div className="datetime">
        <CalendarDays />
        <p> {date} </p>
      </div>
    </Link>
  );
};

export default ArticleCard;
