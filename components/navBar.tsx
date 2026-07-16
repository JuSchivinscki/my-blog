import Link from "next/link";

const NavBar = () => {
  return (
    <header>
      <nav>
        <Link href="/">Julia M. S.</Link>
        <ul>
          <Link href="/"> Home </Link>
          <Link href="/articles"> Artigos </Link>
          <Link
            href="https://www.linkedin.com/in/juliaschivinscki"
            target="_blank"
          >
            Conecte-se comigo
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
