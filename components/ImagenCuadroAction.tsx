import Link from 'next/link'
import React from 'react'
interface imagen{
    imagen:string,
    titulo:string,
    subtitulo:string,
    textoBoton?:string|undefined|null,
    activarboton:boolean,
    link?:string
}
const ImagenCuadroAction = ({imagen,titulo,subtitulo,textoBoton,activarboton,link}:imagen) => {

  return (
    <div
  className="relative overflow-hidden rounded-lg bg-cover mb-[20px] bg-no-repeat w-full h-full p-12 text-center"
  style={{backgroundImage:`url('${imagen}')`,height:600}}>
  <div
    className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
    style={{backgroundColor:' rgba(0, 0, 0, 0.6)'}}>
    <div className="flex h-full items-center justify-center">
      <div className="text-white">
        <h2 className="mb-4 text-4xl font-semibold">{titulo}</h2>
        <h4 className="mb-6 text-xl font-semibold">{subtitulo}</h4>
        {activarboton&&(
  <Link
  href={`${link}`}
  target='_blank'
  className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
  data-te-ripple-init
  data-te-ripple-color="light">
  {textoBoton}
</Link>
        )}
      
      </div>
    </div>
  </div>
</div>
  )
}

export default ImagenCuadroAction