import {FunctionComponent} from 'preact';
import {Contact} from '../types.ts';

type AgendaProps={
    contacts:Contact[];
}

const Agenda: FunctionComponent<AgendaProps>= ({contacts})=>{
    return(
    <>
    {
        contacts.length()>0 &&(
            <h2>Contactos</h2>
            <ul>
            {contacts.map((contact, index)=>(
                <li key={index}>
                <span>{contact.name}</span>
                <span>{contact.email}</span>
                </li>
            ))}
            </ul>
        )}
    </>
    )
}
export default Agenda;