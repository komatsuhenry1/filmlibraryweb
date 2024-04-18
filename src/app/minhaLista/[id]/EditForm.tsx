"use client"

import { update } from "@/app/actions/minhaLista/update"
// import { icons } from "@/app/utils/icons"
import { SubmitButton } from "@/components/SubmitButton"
import { Autocomplete, AutocompleteItem, Button, Input } from "@nextui-org/react"
import Link from "next/link"
import { useFormState } from "react-dom"

export function EditForm(filme: Filme){
    const initialState = {
        message: ""
    }

    const [state, formAction] = useFormState(update, initialState)

    return (
        <form action={formAction} className="flex flex-col gap-4 bg-slate-900 p-6 m-6 rounded">
                <h2 className="text-2xl font-bold">Editar Filme {filme.nome}</h2>
                <input type="hidden" name="id" value={filme.id} />
                <Input 
                    name="nome"
                    label="Nome"
                    defaultValue={filme.nome}
                    labelPlacement="outside"
                    variant="bordered"
                    isInvalid={state?.message != ""}
                    errorMessage={state?.message}
                />

                <Input 
                    name="descricao"
                    label="descricao"
                    defaultValue={filme.descricao}
                    labelPlacement="outside"
                    variant="bordered"
                    isInvalid={state?.message != ""}
                    errorMessage={state?.message}
                />
                <Input 
                    name="foto"
                    label="foto"
                    defaultValue={filme.foto}
                    labelPlacement="outside"
                    variant="bordered"
                    isInvalid={state?.message != ""}
                    errorMessage={state?.message}
                />
                <Input 
                    name="genero"
                    label="genero"
                    defaultValue={filme.genero}
                    labelPlacement="outside"
                    variant="bordered"
                    isInvalid={state?.message != ""}
                    errorMessage={state?.message}
                />
                <Input 
                    name="ano"
                    label="ano"
                    // defaultValue={filme.ano}
                    labelPlacement="outside"
                    variant="bordered"
                    isInvalid={state?.message != ""}
                    errorMessage={state?.message}
                />
                <Input 
                    name="duracao"
                    label="duracao"
                    defaultValue={filme.duracao}
                    labelPlacement="outside"
                    variant="bordered"
                    isInvalid={state?.message != ""}
                    errorMessage={state?.message}
                />
                <Input 
                    name="elenco"
                    label="elenco"
                    defaultValue={filme.elenco}
                    labelPlacement="outside"
                    variant="bordered"
                    isInvalid={state?.message != ""}
                    errorMessage={state?.message}
                />
                <Input 
                    name="nota"
                    label="nota"
                    // defaultValue={filme.nota}
                    labelPlacement="outside"
                    variant="bordered"
                    isInvalid={state?.message != ""}
                    errorMessage={state?.message}
                />





            
            

                <div className="flex justify-around">
                    <Link href="/minhaLista">
                        <Button variant="bordered">cancelar</Button>
                    </Link>

                    <SubmitButton />
                </div>

            </form>
    )
}