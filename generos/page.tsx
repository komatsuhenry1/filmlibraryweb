import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="generos"/>
      <h2>Generos</h2>
    </main>
  );
}
