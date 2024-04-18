"use client"

import DropDownActions from "@/components/DropDownActions";
import { destroy } from "../actions/minhaLista/destroy";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import {Image} from "@nextui-org/react";


interface FilmeItemProps {
    filme: Filme
}

export function FilmeItem({ filme }: FilmeItemProps) {
    const router = useRouter()
    
    function handleDelete() {
        toast.promise(
            destroy(filme.id),
            {
                loading: `apagando filme ${filme.nome}...`,
                success: "filme apagado",
                error: "erro ao apagar filme",
            }
        );

    }

    return (
    <>
    <div className="flex w-full">
        <DropDownActions 
                onEdit={() => router.push("/minhaLista/" + filme.id)}
                onDelete={handleDelete} 
                />
    <Image
      isZoomed
      width={120}
      alt={filme.nome}
      src={filme.foto}
    />
    </div>
        
    </>
    )
}