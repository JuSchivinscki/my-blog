import Link from "next/link";

const NavBar = () => {
  return (
    <header>
      <nav>
        <Link href="/">Julia M. S.</Link>
        <ul>
          <Link href="/"> Home </Link>
          <Link href="/"> Artigos </Link>
          <Link href="/"> Conecte-se comigo </Link>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
