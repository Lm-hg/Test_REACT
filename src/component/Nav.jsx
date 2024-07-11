import Lien from "./Lien"
export default function Nav({lien}){
    return (
        <nav>

            {lien.map((a)=>(
                    <Lien nom={a}></Lien>
                ))}
        </nav>
    )
}