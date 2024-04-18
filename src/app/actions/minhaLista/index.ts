export async function getFilmes() {
    const resp = await fetch(process.env.API_BASE_URL + "/filme", { next: { revalidate: 0 } })
    return await resp.json()
}