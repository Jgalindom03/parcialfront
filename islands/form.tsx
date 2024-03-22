import {useState} from "preact/hooks";
import { FunctionComponent } from "preact";
import { JSX } from "preact";

 const Form:FunctionComponent=()=>{
    const[error, setError]= useState<string>("");
    const[name, setName]= useState<string>("");
    const [email,setEmail]= useState<string>("");

    const submitHandler = async( e:JSX.TargetedEvent<HTMLFormElement, Event>)=>{
        e.preventDefault();
        const errorMsg:string[]=[];
        if(name=== ""){
            errorMsg.push("Debes añadir un nombre");
        }
        if(email!=="." && email!=="@"){
            errorMsg.push("Un email tiene que tener . y @");
        }
        if(errorMsg.length>0)setError(errorMsg.join(" | "));
        else{
            setError("");
            e.currentTarget.submit();
        }
    }

return(
    <div class = "form">
        <h1> Add new contact</h1>
        <form action="/"
        method= "POST"
        onSubmit={submitHandler}
        >
            <div>
                <label for= "name">Name</label>
            </div>
            <div>
            <input
            onFocus={(e)=> setError("")}    
            onInput={(e)=>setName(e.currentTarget.value)}
            type="text"
            id="name"
            name="name"
            />
            </div>
            <div>
                <label for= "email">Email</label>
            </div>
            <div>
            <input
            onFocus={(e)=> setError("")}    
            onInput={(e)=>setEmail(e.currentTarget.value)}
            type="email"
            id="email"
            name="email"
            />
            </div>    
            <div>
            <button
            type ="sumbit"
            disabled={error!== ""}
            class ="btn"
            >
            Add Contact
            </button>
            </div>
            {error!== "" &&<div class ="span-2 error">{error}</div>}
        </form>
    </div>
)
}
export default Form;
