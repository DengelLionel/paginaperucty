import Link from 'next/link'
import { NavDesktopTypeTwo } from 'componentes-dengel'
import LinkNavLittleDesktop from './LinkNavLittleDesktop'
interface linkNav{
  Icon?:any,
  hreff?:string,
 
  text:string,
  OnClick?:any,
  open?:any,
  links?:any
}
const LinkNav = ({Icon,hreff,text,OnClick,open,links}:linkNav) => {
  return hreff!==undefined?(
   
    <Link className='transition-all font-roboto font-medium duration-[300ms] delay-[75ms] text-white2 rounded-tl-[25px] rounded-tr-[25px] rounded-bl-[25px] rounded-br-[25px] border-[.2px] border-solid border-transparent pt-[8px] pb-[8px] pl-[10px] pr-[10px] text-[16px] grid grid-cols-[repeat(2,auto)]  gap-[10px] lg:text-textPrimary lg:flex lg:text-[18px] lg:flex-row lg:gap-[7px] lg:items-center lg:text-center lg:hover:text-white2 lg:hover:border-[.2px] lg:hover:border-solid lg:hover:border-textPrimary lg:hover:bg-linkHover lg:hover:shadow-shadow1 ' href={hreff}>
    {Icon}
    {text}</Link>
  
  ):(
   
    <section className='flex flex-col '>
      
      <p onClick={OnClick}  className='transition-all font-roboto font-medium duration-[300ms] delay-[75ms] text-white2 rounded-tl-[25px] rounded-tr-[25px] rounded-bl-[25px] rounded-br-[25px] border-[.2px] border-solid border-transparent pt-[8px] pb-[8px] pl-[10px] pr-[10px] text-[16px] grid grid-cols-[repeat(2,auto)]  gap-[10px] lg:text-textPrimary lg:flex lg:text-[18px] lg:flex-row lg:gap-[7px] lg:items-center lg:text-center lg:hover:text-white2 lg:hover:border-[.2px] lg:hover:border-solid lg:hover:border-textPrimary lg:hover:bg-linkHover lg:hover:shadow-shadow1 '>
      {Icon}
    {text}</p>
      
      <NavDesktopTypeTwo colorNavLittleDesktop={"bg-whiteTransparent3 backdrop-blur top-[90px]"} openMenuDesktop={open}>
        {links?.map((link:any,index:number)=>(
       <LinkNavLittleDesktop key={index} href={link.href}  text={link.link}/>
        ))}
      
  </NavDesktopTypeTwo>
    </section>

    
  )
}

export default LinkNav