import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="favoritos"/>
      <h2>Favoritos</h2>
    </main>
  );
}
