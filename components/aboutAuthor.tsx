import Image from "next/image";

const AboutAuthor = () => {
  return (
    <div>
      <h1> Sou a Ju </h1>
      <div className="flex items-center gap-4">
        <Image
          src="/author.jpg"
          alt="Foto do autor"
          width={410}
          height={300}
          className="poster"
        />
        <p>
          estudante de Ciência da Computação, desenvolvedora full stack em
          formação e, nas horas vagas, tentando descobrir a fórmula secreta de
          virar uma profissional completa (ainda não achei, mas juro que estou
          perto). Aqui tem código, os bugs que me tiraram do sério às 2h da
          manhã, produtividade, idiomas e tudo que envolve construir uma
          carreira sem se perder no caminho — documentado ao vivo, sem filtro e
          sem papo de coach genérico. Se identificou com alguma parte da
          bagunça? Vem trocar ideia comigo no LinkedIn!
        </p>
      </div>
    </div>
  );
};

export default AboutAuthor;
