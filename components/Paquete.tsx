import Link from 'next/link'
import React from 'react'
interface paquete{
    nombre:string,
    precio:string,
    incluye:any,
    link:string
}
interface paqueteComponent{
    paquetes:paquete[],
    tipo:string
}
const Paquete = ({paquetes,tipo}:paqueteComponent) => {
    const basico=paquetes[0]
    const intermedio=paquetes[1]
    const premium=paquetes[2]
  return (
 
    <div className="grid px-6 md:px-12 lg:grid-cols-3 xl:px-32" >
    <div className="p-0 py-12">
      <div
        className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 lg:rounded-tr-none lg:rounded-br-none">
        <div className="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
          <p className="mb-4 text-sm uppercase text-white">
            <strong>{basico.nombre}</strong>
          </p>
          <h3 className="mb-6 text-3xl text-white">
            <strong>$ {basico.precio}</strong>
            <small className="text-base text-neutral-500 dark:text-neutral-300">/{tipo}</small>
          </h3>

          <Link href={`${basico.link}`}
            className="inline-block w-full rounded bg-gray-300 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-azulblanco focus:bg-azulblanco focus:outline-none focus:ring-0 active:bg-primary-accent-200"
            data-te-ripple-init data-te-ripple-color="light">
            COMPRAR
          </Link>
        </div>
        <div className="p-6 text-neutral-300">
          <ol className="list-inside">
            {basico.incluye.map((item:any,index:any)=>(
                <li key={index} className="mb-4 flex">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg> {item.item}
            </li>
            ))}
            
           
          </ol>
        </div>
      </div>
    </div>

    <div>
      <div
        className="block h-full rounded-lg bg-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] "
        style={{zIndex:1}}>
        <div className="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
          <p className="mb-4 text-sm uppercase text-black2">
            <strong>{intermedio.nombre}</strong>
          </p>
          <h3 className="mb-6 text-3xl text-black2">
            <strong>$ {intermedio.precio}</strong>
            <small className="text-base text-neutral-500 dark:text-neutral-500">/{tipo}</small>
          </h3>

          <Link href={`${intermedio.link}`}
            className="inline-block w-full rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            data-te-ripple-init data-te-ripple-color="light">
            Comprar
          </Link>
        </div>
        <div className="p-6 text-neutral-600">
          <ol className="list-inside">
          {intermedio.incluye.map((item:any,index:any)=>(
                <li key={index} className="mb-4 flex">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg> {item.item}
            </li>
            ))}
           
          </ol>
        </div>
      </div>
    </div>

    <div className="py-12">
      <div
        className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 lg:rounded-tl-none lg:rounded-bl-none">
        <div className="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
          <p className="mb-4 text-sm uppercase text-white">
            <strong>{premium.nombre}</strong>
          </p>
          <h3 className="mb-6 text-3xl text-white">
            <strong>$ {premium.precio}</strong>
            <small className="text-base text-neutral-500 dark:text-neutral-300">/{tipo}</small>
          </h3>

          <Link href={`${premium.link}`}
            className="inline-block w-full rounded bg-gray-300 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-azulblanco focus:bg-azulblanco focus:outline-none focus:ring-0 active:bg-primary-accent-200"
            data-te-ripple-init data-te-ripple-color="light">
           Comprar
          </Link>
        </div>
        <div className="p-6 text-neutral-300">
          <ol className="list-inside">
          {premium.incluye.map((item:any,index:any)=>(
                <li key={index} className="mb-4 flex">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg> {item.item}
            </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Paquete