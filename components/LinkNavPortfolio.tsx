import Link from "next/link"
import { useContext } from "react"
import { SiteContextVal } from "../context/SiteContext"
interface link{
  Icon?:any,
  text:string,
  href:any,
  download?:boolean
}
const LinkNavPortfolio = ({Icon,text,href,download}:link) => {
  const {openMenuDesktop}=useContext(SiteContextVal)
  return download===false?(
    
    <Link className="text-white2 flex items-center w-auto gap-[20px]" href={href}>
      {Icon}
      {openMenuDesktop===true&&text}
    </Link>
    
  ):(
    <Link className="text-white2 flex items-center w-auto gap-[20px]" target="_blank" href={href}>
    {Icon}
    {openMenuDesktop===true&&text}
  </Link>
  )
}

export default LinkNavPortfolio