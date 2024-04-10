import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="minhaLista"/>
      <h2>Minha Lista</h2>
    </main>
  );
}
