import Image from "next/image";

const AboutAuthor = () => {
  return (
    <div className="flex flex-col items-center gap-6 text-center">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <Image
          src="/author.jpg"
          alt="Foto da autora"
          width={200}
          height={200}
          className="rounded-2xl object-cover w-[400px] h-[300px] shrink-0"
        />
        <div className="flex flex-col items-center text-center">
          <h1>Sou a Ju</h1>
          <p className="max-w-2xl mt-4">
            estudante de Ciência da Computação, desenvolvedora full stack em
            formação e, nas horas vagas, tentando descobrir a fórmula secreta de
            virar uma profissional completa (ainda não achei, mas juro que estou
            perto). Aqui tem código, os bugs que me tiraram do sério às 2h da
            manhã, produtividade, idiomas e tudo que envolve construir uma
            carreira sem se perder no caminho — documentado ao vivo, sem filtro
            e sem papo de coach genérico. Se identificou com alguma parte da
            bagunça? Vem trocar ideia comigo no LinkedIn!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutAuthor;
