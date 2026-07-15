import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <header>
      <nav>
        <Link href="/">
          {" "}
          <Image src="/logo.png" alt="logo" width={24} height={24} />
        </Link>
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
