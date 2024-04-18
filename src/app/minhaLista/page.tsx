import NavBar from "@/components/NavBar"
import { FilmeItem } from "./FilmeItem";
import { Button } from "@nextui-org/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import { getFilmes } from "@/app/actions/minhaLista/index";

export default async function MinhaLista() {
  const filmes : Array<Filme> = await getFilmes()
  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="minhaLista"/>
      <section className="flex flex-col gap-2 bg-slate-900 mt-4 p-3 rounded min-w-[500px]">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">Filmes Cadastrados</h2>
          <Link href="/minhaLista/new">
            <Button color="primary" startContent={<Plus />}>
              novo filme
            </Button>
          </Link>
        </div>

      
        {filmes.map(filme => <FilmeItem filme={filme} /> )}

      </section>
    </main>
  );
}
