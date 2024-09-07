import React from 'react'
import { useEffect,useState } from 'react'
import ReactMarkdown  from 'react-markdown'
const Contenido_Politica = ({politica}:any) => {
    const [contenido,setContenido]=useState<any>("")
    useEffect(()=>{
        fetch(`/contenido/${politica&&politica}`)
        .then(response=>(response.text()))
        .then(data=>setContenido(data))
    },[])
  return (
    <div className='mt-[100px] lg:p-[50px]'>  <ReactMarkdown>{contenido&&contenido}</ReactMarkdown></div>
  )
}

export default Contenido_Politica