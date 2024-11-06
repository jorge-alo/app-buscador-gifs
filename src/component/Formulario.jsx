import { useState } from "react"
import { FetchApi } from "../hook/fetchApi"


export const Formulario = ({setCategory}) => {

    const [error, setError] = useState(false)
    const [value, setValue] = useState("")
    
    
   

    const handleSubmit = e => {
        e.preventDefault()

        if(value === "") {
            setError(true)
            return
        }
        setError(false)
        setCategory(value)
        setValue("")
    }
  return (
    <div>
        <form onSubmit={handleSubmit} >
            <input 
            className="form__input"
            type="text"
            value={value}
            onChange={e => setValue(e.target.value)}
             />
        </form>
        {error ? <p>No puede ingresar un valor vacio</p> : ""}
    </div>
  )
}
