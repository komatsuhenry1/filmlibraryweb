import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="recomendados"/>
      <h2>Filmes Recomendados serão os q tem a melhor avaliação e q n esteja como assistido</h2>
    </main>
  );
}
