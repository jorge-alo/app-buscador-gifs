import { useEffect, useState } from 'react'




export const FetchApi = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)

   const fetchApiData = () => { 
    setLoading(true)
    fetch(url) 
    .then((respuesta) => respuesta.json())
    .then((respuestaJson) => {
        setData(respuestaJson.data)
    })
    .catch((error) => console.log(error))
    .finally(()=> {setLoading(false)})
   }
    useEffect(() => {
      fetchApiData()
    }, [url])
    
  return {
    data,
    loading
  }
}
