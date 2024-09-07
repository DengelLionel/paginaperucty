import { useRouter } from 'next/router';
interface titulo{
    titulo:string,
    idd?:any
}

const Titulo = ({titulo,idd}:titulo) => {
  const router = useRouter();
  const paginaparah1 = ['/preguntas-frecuentes'];
  return (
    <>
    {!paginaparah1.includes(router.pathname) ? (
      <h2 id={idd} className='font-poppins font-bold text-[32px] text-center leading-[40px] tracking-[0.015em] p-[16px] text-black2 sm:w-[418px] sm:text-center md:text-[48px] md:w-[600px] md:leading-[50px] lg:text-[50px] lg:w-[800px] lg:leading-[58px]  2xl:leading-[57px] '>{titulo}</h2>
    ):
  (
    <h1 id={idd} className='font-poppins font-bold text-[32px] text-center leading-[40px] tracking-[0.015em] p-[16px] text-black2 sm:w-[418px] sm:text-center md:text-[48px] md:w-[600px] md:leading-[50px] lg:text-[50px] lg:w-[800px] lg:leading-[58px]  2xl:leading-[57px] '>{titulo}</h1>
  )
  }
    </>
  )
}

export default Titulo