"use client"
import { create } from "@/app/actions/minhaLista/create";
import NavBar from "@/components/NavBar";
import { SubmitButton } from "@/components/SubmitButton";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import { useFormState } from "react-dom";

const initialState = {
    message: ""
}

export default function FormCategoria(){
    const [state, formAction] = useFormState(create, initialState)

    return(
        <main className="flex min-h-screen flex-col items-center">
            <NavBar active="minhaLista" />

            <form action={formAction} className="flex flex-col gap-4 bg-slate-900 p-6 m-6 rounded">
                <h2 className="text-2xl font-bold">Cadastrar Filme</h2>

                <Input 
                    name="nome"
                    label="Nome"
                    labelPlacement="outside"
                    variant="bordered"
                    isInvalid={state?.message != ""}
                    errorMessage={state?.message}
                />

                <Input 
                    name="descricao"
                    label="descricao"
                    labelPlacement="outside"
                    variant="bordered"
                    isInvalid={state?.message != ""}
                    errorMessage={state?.message}
                />
                <Input 
                    name="foto"
                    label="foto"
                    labelPlacement="outside"
                    variant="bordered"
                    isInvalid={state?.message != ""}
                    errorMessage={state?.message}
                />
                <Input 
                    name="genero"
                    label="genero"
                    labelPlacement="outside"
                    variant="bordered"
                    isInvalid={state?.message != ""}
                    errorMessage={state?.message}
                />
                <Input 
                    name="ano"
                    label="ano"
                    labelPlacement="outside"
                    variant="bordered"
                    isInvalid={state?.message != ""}
                    errorMessage={state?.message}
                />
                <Input 
                    name="duracao"
                    label="duracao"
                    labelPlacement="outside"
                    variant="bordered"
                    isInvalid={state?.message != ""}
                    errorMessage={state?.message}
                />
                <Input 
                    name="elenco"
                    label="elenco"
                    labelPlacement="outside"
                    variant="bordered"
                    isInvalid={state?.message != ""}
                    errorMessage={state?.message}
                />
                <Input 
                    name="nota"
                    label="nota"
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
        </main>
    )
}