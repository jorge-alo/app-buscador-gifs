import React from 'react'
import { FetchApi } from '../hook/fetchApi'
import { Imagen } from './Imagen'

export const DisplayGif = ({category}) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=H8EmA95Bt4Z3qJf4ATQcDEaGBqEwMU1r&q=${category}&limit=10`
    const {data, loading} = FetchApi(url)
  return (
    <div className='container__grid'> 
    {loading && <p>Cargando...</p>}
    {data && data.map(item => (
        <Imagen 
        key={item.id}
        imagen={item.images.downsized_medium.url}
        titulo={item.title}/>
    ))}
    </div>
  )
}
