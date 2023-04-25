import {Form} from "./List/Form.jsx";
import {List} from "./List/List.jsx";
import {useState , useEffect} from "react";

export function Contacts() {
    const [contacts, setContacts] = useState([
        {
            fullname: "Deha",
            phone_number: "123123"

        },
        {
            fullname: "Burak",
            phone_number: "456456"
        },
        {
            fullname: "Onuralp",
            phone_number: "789789"
        }
    ]);

    useEffect(() => {
        console.log(contacts)
    }, [contacts]);
    
    return (
        <div>
            <List contacts={contacts}/>
            <Form addContact={setContacts} contacts={contacts}/>
        </div>
    )
}