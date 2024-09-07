import Link from 'next/link'

interface linkNav{
  text:string,
  href:string,
  Icon?:any
}
const LinkNavLittleDesktop = ({text,href,Icon}:linkNav) => {
  return (
  
      <Link className='text-white2 font-roboto not-italic font-bold w-full flex flex-row transition-all tracking-[0.015em] duration-[500ms] p-[7px] gap-[7px] rounded-tl-[7px] rounded-tr-[7px] rounded-br-[7px] rounded-bl-[7px] border-[1px] border-solid border-transparent lg:hover:border-[1px] lg:hover:border-solid lg:hover:border-yellow4 lg:hover:text-azul4 lg:hover:bg-yellow5 ' href={href}>{Icon}{text}</Link>
  
    
  )
}

export default LinkNavLittleDesktop