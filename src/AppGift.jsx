import React, { useState } from 'react'
import { Formulario } from './component/Formulario'
import { DisplayGif } from './component/displayGif'
import "./styles/appgif.css"
export const AppGift = () => {
    const [category, setCategory] = useState("")
  return (
    <div className='container-appgift'>
        <h1>Gifs Expert App</h1>
        <Formulario
        setCategory={setCategory}
         />
         <DisplayGif 
         category={category}
         />
    </div>
  )
}
