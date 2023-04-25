import { useState } from 'react'
//import './App.css'
import {Contacts} from "./components/contacts/Contacts.jsx";
import {List} from "./components/contacts/List/List.jsx";
import {Form} from "./components/contacts/List/Form.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Contacts/>

    </div>
  )
}

export default App
