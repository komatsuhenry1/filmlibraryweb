import Filmes from "@/components/Filmes";
import  Navbar  from "@/components/NavBar";
import  Pesquisa  from "@/components/Pesquisa";
// import  MyModal  from "@/components/MyModal";
import App from "next/app";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar active="home"/>
      <Pesquisa/>
      {/* alinha o texto no começo da pagina */}
      <h2 className="mt-24" >Minha Lista</h2>
      <Filmes/>
      <h2 className="mt-24">Recomendados</h2>
      <Filmes/>
      <h2 className="mt-24">Gênero</h2>
      <Filmes/>




      {/* tenho q arruamr a modal pra quando clicar
      na img aparecer uma descrição do filme igual do figma */}
      {/* <MyModal/> */}
      
    </main>
  );
}
