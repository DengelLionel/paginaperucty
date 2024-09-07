import React from 'react'
import { createContext,useState } from 'react'
interface context{
    openMenuDesktop:boolean|undefined,
    setOpenMenuDesktop:(data:boolean|undefined)=>void,
    openCardPortfolio:boolean|undefined,
    setOpenCardPortfolio:(data:boolean|undefined)=>void,
    idProyectExperience:any|undefined,
    setIdProyectExperience:(data:any|undefined)=>void,
    idHabilidad:any|undefined,
    setIdHabilidad:(data:any|undefined)=>void,
}
export const SiteContextVal=createContext<context>({
openMenuDesktop:false,
setOpenMenuDesktop:()=>{},
openCardPortfolio:false,
setOpenCardPortfolio:()=>{},
idProyectExperience:{id:0,state:false},
setIdProyectExperience:()=>{},
idHabilidad:0,
setIdHabilidad:()=>{},

})
const SiteContext = ({children}:any) => {
    const[openMenuDesktop,setOpenMenuDesktop]=useState<boolean|undefined>(false)
    const[openCardPortfolio,setOpenCardPortfolio]=useState<boolean|undefined>(false)
    const[idProyectExperience,setIdProyectExperience]=useState<any|undefined>({id:0,state:false})
    const[idHabilidad,setIdHabilidad]=useState<any|undefined>(0)
 const data={
    openMenuDesktop,setOpenMenuDesktop,openCardPortfolio,setOpenCardPortfolio,idProyectExperience,setIdProyectExperience,idHabilidad,setIdHabilidad
 }
    return (
   <SiteContextVal.Provider value={data}>{children}</SiteContextVal.Provider>
  )
}

export default SiteContext