import {useEffect, useState} from "react";

const initialFormValues = {fullname: "" , phone_number: ""}
export function Form({addContact , contacts}) {
    const [form, setForm] = useState(initialFormValues);

    useEffect(() => {
        setForm(initialFormValues) //To empty the input boxes when form submitted
    }, [contacts]);


    const onChangeInput = (e) => {
        setForm({...form , [e.target.name] : e.target.value}); //Enable editing the form.
    }

    const onSubmit = (e) => {
        e.preventDefault() //To avoid refreshing page when form submitted

        if (form.fullname === "" || form.phone_number === "") { //When form inputs are empty disable the submit function.
            return false
        }
        addContact([...contacts,form]) //Add contact to the list with keeping the old ones.



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
            <div className="btn">
                <button>Add</button>
            </div>
        </form>
    )
}