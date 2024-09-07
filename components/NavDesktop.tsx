import IconModule from './Icons/IconModule'
import IconJob from './Icons/IconJob'
import IconHome from './Icons/IconHome'
import LinkNav from './LinkNav'
import { useState,useEffect,useRef } from 'react'
const NavDesktop = () => {
  const[openMenuDesktop,setOpenMenuDesktop]=useState(false)
  const toggleContainer:any|undefined = useRef<any>(null);

  useEffect(() => {
    window.addEventListener("click", onClickOutsideHandler);
    return () => {
      window.removeEventListener("click", onClickOutsideHandler);
    };

  }); 
  const onClickOutsideHandler = (event:any) => {
    if (openMenuDesktop && !toggleContainer.current.contains(event.target)) {
      setOpenMenuDesktop(false);
    }
  };
  return (
    <section ref={toggleContainer} className=' flex flex-row lg:gap-[20px] items-center xl:gap-[82px]'>
        <LinkNav 
        Icon={ <IconHome/>} 
        text={"INICIO"}
         hreff="/"
       
         />
        <LinkNav 
        Icon={ <IconModule/>}
     
         open={openMenuDesktop} 
         text={"SERVICIOS"}
          OnClick={()=>setOpenMenuDesktop(!openMenuDesktop)} 
          links={[{id:1,href:"/diseno-tiendas-shopify",link:"/"},{id:2,href:"/ecommerce",link:"Mi Comercio Digital"},/* {id:3,href:"",link:"Aplicaciones web personalizadas"},{id:4,href:"",link:"Asesoramiento"},{id:5,href:"",link:"Sistemas web"} */]}
         />
         
        <LinkNav Icon={ <IconJob/>} text={"TIENDAS DESARROLLADAS"} 
         
        hreff={"/portafolio"}/>
    </section>
  )
}

export default NavDesktop