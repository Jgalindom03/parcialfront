import { FunctionComponent } from "preact";
export const AgendaClient: FunctionComponent=()=>{
    return(
        <form>
        <h1> Add new contact </h1>
        <input type = "text" name ="name" placeholder={"Name"}/>
        <input type = "text" name ="email" placeholder={"Email"}/>
        <button type = "submit">Add contact</button>
        </form>
        )
}