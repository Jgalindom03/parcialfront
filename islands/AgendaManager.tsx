import {useState} from "preact/hooks";
import { FunctionComponent } from "preact";
import { JSX } from "preact";
import {Contact} from '../types.ts';
import Agenda from "../components/Agenda.tsx"

const AgendaManager:FunctionComponent=()=>{
    const[error, setError]= useState<string>("");
    const[name, setName]= useState<string>("");
    const [email,setEmail]= useState<string>("");
    const [contacts, setContacts]= useState<Contact[]>([]);

    const validateContact= (contact:Contact, contacts: Contact[]): boolean=>{
        return contact.name.length>0 && contact.email.length>0 &&
        !contacts.find((c)=>c.email===contact.email)&& contact.email.includes("@") && contact.email.includes(".");
    }

    const addContact=(contact:Contact, contacts:Contact[])=>{
        if(!validateContact(contact, contacts)){
            setError("Invalid contact.")
            return
        }
        setContacts([...contacts, contact]);
    }

return(
    <Agenda contacts={contacts}/>
    <div class = "agendaForm">
        <h1> Add new contact</h1>
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
            <button onClick={()=>addContact({name,email}, contacts)}
            >
            Add Contact
            </button>
            </div>
            {error!== "" &&<div class ="span-2 error">{error}</div>}
    </div>
)
}
export default AgendaManager;
