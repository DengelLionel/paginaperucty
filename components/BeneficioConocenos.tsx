import React from 'react'
import Beneficio from './Beneficio';
import Titulo from './Titulo';
import ContainerGeneral from './ContainerGeneral';
import { BiHive } from "react-icons/bi";
import { FaHandsHelping } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
const BeneficioConocenos = () => {
    const benefits = [
        {
          title: 'Innovación',
          description: 'Impulsamos soluciones creativas en el comercio electrónico, siempre en adelante.',
          icon: <BiHive/>,
        },
        {
          title: 'Colaboración',
          description: 'Trabajamos en equipo para lograr resultados excepcionales.',
          icon:<FaHandsHelping/>,
        },
        {
          title: 'Pasión por el Cliente',
          description: 'Comprometidos en superar expectativas y personalizar soluciones.',
          icon: <FaUsers />,
        },
        // Agrega más beneficios según sea necesario
      ];
  return (
    <ContainerGeneral>
    <Titulo titulo='NUESTROS VALORES'/>
  <Beneficio benefits={benefits} />
  </ContainerGeneral>
  )
}

export default BeneficioConocenos
