import LinkNav from "./LinkNav"
import { subLinks } from "../user/User"
const SubNav = () => {
  return (
    <section>
        {subLinks?.map((subLink:any,index:number)=>(
            <LinkNav key={index} text={subLink.text} hreff={subLink.href}/>
        ))}
       
</section>
  )
}

export default SubNav