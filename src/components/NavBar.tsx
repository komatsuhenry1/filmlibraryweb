import Link from "next/link";
interface NavBarProps{
  active: "home"|"favoritos"|"generos"|"minhaLista"|"recomendados"
}
export default function NavBar(props:NavBarProps){
  const {active} = props
  const classActive = "border-b-4 border-pink-500"
    return(
        <nav className="flex  w-full justify-between px-5 py-3 items-center">
        <h1 className="text-3xl font-bold">FilmLibrary</h1>
        <ul className="flex gap-20">
        <li className={active =="home" ? classActive:""}><Link href="/">home</Link></li>
          <li className={active =="favoritos" ? classActive:""}><Link href="/favoritos">favoritos</Link></li>
          <li className={active =="generos" ? classActive:""}><Link href="/generos">generos</Link></li>
          <li className={active =="minhaLista" ? classActive:""}><Link href="/minhaLista">minhaLista</Link></li>
          <li className={active =="recomendados" ? classActive:""}><Link href="/recomendados">recomendados</Link></li>
        </ul>
        <div className="w-14 rounded-full overflow-hidden ">
          <img src="https://i.pravatar.cc/150" alt="Avatar do usuário" />
        </div>
      </nav>
    )
}