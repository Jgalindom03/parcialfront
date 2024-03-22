import { FunctionComponent } from "preact";
type opcionesMenu={
    selected: "Aclient"| "AServidor"
}
export const Menu:FunctionComponent<opcionesMenu>=({selected})=>{
    return(
    <div class = "menu">
        <h1>My agenda</h1>
        <a href = "/Aclient" class = {selected==="AClient"? "selected": ""}>
            Agenda Client Side
        </a>
        <a href = "/Aclient" class = {selected==="AClient"? "selected": ""}>
            Agenda Client Side
        </a>
    </div>
    )
}