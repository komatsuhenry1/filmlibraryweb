"use server"
import { redirect } from "next/navigation"

interface ValidationError {
    campo: string,
    mensagem: string
}

export async function update(prevState: any, formData: FormData){
    await new Promise(r => setTimeout(r, 4000))
    const id = formData.get("id")
    const data = {
        nome: formData.get("nome"),
        descricao: formData.get("descricao"),
        foto: formData.get("foto"),
        genero: formData.get("genero"),
        ano: formData.get("ano"),
        duracao: formData.get("duracao"),
        elenco: formData.get("elenco"),
        nota: formData.get("nota")
    }

    

    const options = {
        method: "put",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const resp = await fetch(process.env.API_BASE_URL + "/filme/" + id, options)

    //depois que atualiza vai pra pagina...
    if (resp.ok){
        redirect("/minhaLista")
    }

    if (resp.status == 400){
        const data : ValidationError[] = await resp.json()
        return {
            message: data.find(erro=> erro.campo == "nome")?.mensagem
        }
    }

}