import Image from 'next/legacy/image'
import styles from "../styles/CardServicios.module.css"
import IconStar from './Icons/IconStar'
import Link from 'next/link'
interface cards{
  image:string,
  titulo:string,
  url:string
}

const Card = ({image,titulo,url="#"}:cards) => {
  return (
    <Link href={url} target='_blank'>
    <section className={styles.card}>
      <div  className={styles.content1}>
        <article className='relative w-full h-full'>
        <Image className='rounded-tr-[20px] rounded-tl-[20px] object-cover'  src={image}   layout="fill"
      alt={titulo}/>
        </article>
     
      </div>
      <article className='w-[177px] h-[175px] text-white2 font-montserrat font-bold text-[24px] leading-[28px] text-center tracking-[0.015em] flex justify-center items-center p-[9px] bg-secundary2 rounded-tl-[0px] rounded-tr-[20px] rounded-bl-[0px] rounded-br-[20px] sm:w-[282px] sm:h-[150px] sm:rounded-tl-[0px] sm:rounded-tr-[0px] sm:rounded-bl-[20px] sm:rounded-br-[20px] md:leading-[32px]'>
        <h3 className='w-[257px] font-montserrat not-italic font-bold text-[16px] leading-[25px] text-center tracking-[0.015em] text-white md:text-[20px] lg:text-[24px] lg:leading-[33px]'> {titulo}</h3>
      </article>
    </section >

    <section className={styles.card1024}>
      <article className={styles.content}>
      <article className='relative w-full h-[200px]'>
      <Image className=" rounded-tr-[20px] rounded-tl-[20px] object-cover"  src={image} priority={true} layout="fill" alt={titulo}/>
      </article>
     
  
        <h3 className='w-[257px] font-montserrat not-italic font-bold text-[16px] leading-[25px] text-center tracking-[0.015em] text-white md:text-[20px] lg:text-[24px] lg:leading-[33px]'>{titulo}</h3>
        <article className={styles.IconStart}>
        <IconStar/>
        </article>
       
      </article>
     
    </section >

    </Link>
   
  )
}

export default Card