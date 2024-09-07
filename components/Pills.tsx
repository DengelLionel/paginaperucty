import React, { useState } from 'react';
import Paquete from './Paquete';
import Link from 'next/link';

const Pills = () => {
  const [activePill, setActivePill] = useState('pills-home01');

  const handlePillClick = (pillId: any, event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    setActivePill(pillId);
  };

  const mes=[
    
        {
            nombre:"Básico",
            precio:"25",
            link:"https://wa.link/t9wmfn",
            incluye:[
               {item:"Asistencia rápida para resolver problemas técnicos"},
                {item:"Actualización de productos "},
                {item:"Agregar productos "},
                {item:"Actualizar Banner"},
                {item:"Actualizar páginas"}
            ]
        },
        {
            nombre:"Intermedio",
            precio:"35",
            link:"https://wa.link/apsjo2",
            incluye:[
                {item:"Asistencia rápida para resolver problemas técnicos"},
                {item:"Actualización de productos "},
                {item:"Agregar productos"},
                {item:"Actualizar Banner"},
                {item:"Actualizar páginas"},
                {item:" Ajustes generales"},
                {item:"Actualizar 2 secciones a código"}
            ]
        },
        {
            nombre:"Premium",
            precio:"75",
            link:"https://wa.link/gqn63y",
            incluye:[
                {item:"Asistencia rápida para resolver problemas técnicos"},
                {item:"Actualización de productos"},
                {item:"Agregar productos"},
                {item:"Actualizar Banner"},
                {item:"Actualizar páginas"},
                {item:" Ajustes generales"},
                {item:"Desarrollo personalizado"}
            ]
        }
       
  ]
  const anual=[
    {
        nombre:"Basico",
        precio:"19",
        link:"https://wa.link/t877ck",
        incluye:[
           {item:"Asistencia rápida para resolver problemas técnicos"},
            {item:"Actualización de productos "},
            {item:"Agregar productos "},
            {item:"Actualizar Banner"},
            {item:"Actualizar páginas"}
        ]
    },
    {
        nombre:"Intermedio",
        precio:"29",
        link:"https://wa.link/gbyv30",
        incluye:[
            {item:"Asistencia rápida para resolver problemas técnicos"},
            {item:"Actualización de productos "},
            {item:"Agregar productos"},
            {item:"Actualizar Banner"},
            {item:"Actualizar páginas"},
            {item:" Ajustes generales"},
            {item:"Actualizar 2 secciones a código"}
        ]
    },
    {
        nombre:"Premium",
        precio:"69",
        link:"https://wa.link/2njtuy",
        incluye:[
            {item:"Asistencia rápida para resolver problemas técnicos"},
            {item:"Actualización de productos"},
            {item:"Agregar productos"},
            {item:"Actualizar Banner"},
            {item:"Actualizar páginas"},
            {item:" Ajustes generales"},
            {item:"Desarrollo personalizado"}
        ]
    }
  ]
 
  return (
    <div>
      <ul
        className="mb-5 flex list-none flex-col flex-wrap pl-0 md:flex-row text-center justify-center items-center md:justify-center mt-[-130px] xl:mt-[-200px]"
        role="tablist"
        data-te-nav-ref
      >
        <li role="presentation" className="">
          <Link
            href="#pills-home01"
            onClick={(e) => handlePillClick('pills-home01', e)}
            className={`my-2 block w-[250px] rounded bg-neutral-100 px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight  ${activePill === 'pills-home01' ? 'bg-neutral-700 text-white' : 'bg-neutral-200 text-neutral-500'} md:mr-4`}
            id="pills-home-tab01"
            data-te-toggle="pill"
            data-te-target="#pills-home01"
            role="tab"
            aria-controls="pills-home01"
            aria-selected={activePill === 'pills-home01'}
          >
            MES
          </Link>
        </li>
        <li role="profile" className="">
          <Link
            href="#pills-profile01"
            onClick={(e) => handlePillClick('pills-profile01', e)}
            className={`my-2 block w-[250px]  rounded bg-neutral-100 px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight  ${activePill === 'pills-profile01' ? 'bg-neutral-700 text-white' : 'bg-neutral-200 text-neutral-500'} md:mr-4`}
            id="pills-profile-tab01"
            data-te-toggle="pill"
            data-te-target="#pills-profile01"
            role="tab"
            aria-controls="pills-profile01"
            aria-selected={activePill === 'pills-profile01'}
          >
            ANUAL
          </Link>
        </li>
      </ul>

      <div className="mb-6">
        <div
          className={`transition-opacity duration-150 ease-linear ${activePill === 'pills-home01' ? 'block opacity-100' : 'hidden opacity-0'}`}
          id="pills-home01"
          role="tabpanel"
          aria-labelledby="pills-home-tab01"
          data-te-tab-active
        >
          <Paquete tipo="MES" paquetes={mes} />
        </div>
        <div
          className={`transition-opacity duration-150 ease-linear ${activePill === 'pills-profile01' ? 'block opacity-100' : 'hidden opacity-0'}`}
          id="pills-profile01"
          role="tabpanel"
          aria-labelledby="pills-profile-tab01"
        >
          <Paquete tipo="ANUAL" paquetes={anual} /> 
        </div>
      </div>
    </div>
  );
};

export default Pills;
