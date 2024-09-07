import React from 'react'
import Beneficio from './Beneficio';
import Titulo from './Titulo';
import ContainerGeneral from './ContainerGeneral';
import { BsShop } from "react-icons/bs";
import { FaShopify,FaLaptopCode } from "react-icons/fa";
const Beneficios = () => {
    const benefits = [
        {
          title: 'Expertos en Shopify',
          description: 'Somos shopify partner.',
          icon: <FaShopify/>,
        },
        {
          title: 'Expertos en programación web',
          description: 'Tu tienda lista con tus requerimientos.',
          icon:<FaLaptopCode/>,
        },
        {
          title: 'Diseños unicos',
          description: 'Diseñamos tu tienda según tu nicho.',
          icon: <BsShop/>,
        },
        // Agrega más beneficios según sea necesario
      ];
  return (
    <ContainerGeneral>
        <Titulo titulo='¿Por qué elegir a "CREA TIENDA YA"?'/>
      <Beneficio benefits={benefits} />
      </ContainerGeneral>
  )
}

export default Beneficios
