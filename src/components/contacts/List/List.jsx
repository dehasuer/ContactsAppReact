import {useState} from "react";

export function List({contacts}) {
    const [filterText, setFilterText] = useState("");
    const filtered = contacts.filter((item) => {

    })
    return (
        <div>

            <input placeholder="Filter contact" value={filterText} onChange={(e) => setFilterText(e.target.value)}/>

            <ul>
                {
                    contacts.map((contact , index) => {
                       return <li key={index}>{contact.fullname}</li>
                    })
                }
            </ul>
        </div>
    )
}