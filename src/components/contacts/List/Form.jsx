import {useEffect, useState} from "react";

const initialFormValues = {fullname: "" , phone_number: ""}
export function Form({addContact , contacts}) {
    const [form, setForm] = useState(initialFormValues);

    useEffect(() => {
        setForm(initialFormValues) //To empty the input boxes when form submitted
    }, [contacts]);


    const onChangeInput = (e) => {
        setForm({...form , [e.target.name] : e.target.value});
    }

    const onSubmit = (e) => {
        e.preventDefault() //To avoid refreshing page when form submitted

        if (form.fullname === "" || form.phone_number === "") { //When form inputs are empty dont submit it
            return false
        }
        addContact([...contacts,form])



        console.log(form)
    }
    return (
        <form onSubmit={onSubmit}>
          <div>
              <input name="fullname" placeholder="name" onChange={onChangeInput} value={form.fullname}/>
          </div>
            <div>
                <input name="phone_number" placeholder="phone number" onChange={onChangeInput} value={form.phone_number}/>
            </div>
            <div>
                <button>Add</button>
            </div>
        </form>
    )
}