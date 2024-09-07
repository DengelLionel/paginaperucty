import ContainerGeneral from './ContainerGeneral'
import { useForm, ValidationError } from '@formspree/react';

const Formulario = () => {
    const [state, handleSubmit] = useForm("mgeblaeo");

  return (
 <ContainerGeneral>
    
    <span id="contactanos" className='flex flex-col justify-center items-center gap-[6px] lg:gap-[25px] text-center '>

        <span className='font-poppins font-medium text-[24px] leading-[30px] text-center tracking-[0.015em] text-black2 lg:text-[30px] '>Dime lo que necesitas.</span>
       
        <h2 className='font-poppins font-bold text-[32px] leading-[40px] text-center tracking-[0.015em] text-black2 lg:text-[50px]'>Ayudamos a solucionarlo</h2>
       
    </span>
    
    <form   onSubmit={handleSubmit}>
                <div className="md:flex items-center ">
                    <div className="w-full md:w-1/2 flex flex-col">
                        <label htmlFor="nombre" className='font-montserrat font-normal text-[20px] leading-[30px] tracking-[0.015em] text-black3 md:text-[24px]'>Nombres:</label>
                        <input  name="name" id="nombre" type="text" className='leading-none font-montserrat font-medium text-[16px] tracking-[0.015em] mt-[16px] border-[2px] border-transparent border-solid bg-black2 p-[8px] rounded-tl-[7px] rounded-tr-[7px] rounded-bl-[7px] rounded-br-[7px] text-white6 focus:outline-none focus:border-[2px] focus:border-solid focus:bg-focusInput lg:text-[20px] lg:w-[400px]' required />
                    </div>
                  
                </div>
                <div className="md:flex items-center mt-8">
                    <div className="w-full flex flex-col">
                        <label htmlFor="email" className='font-montserrat font-normal text-[20px] leading-[30px] tracking-[0.015em] text-black3 md:text-[24px]'>Email:</label>
                        <input name="email" id="email" type="email" className='leading-none font-montserrat font-medium text-[16px] tracking-[0.015em] mt-[16px] border-[2px] border-transparent border-solid bg-black2 p-[8px] rounded-tl-[7px] rounded-tr-[7px] rounded-bl-[7px] rounded-br-[7px] text-white6 focus:outline-none focus:border-[2px] focus:border-solid focus:bg-focusInput lg:text-[20px] lg:w-[400px]' required/>
                    </div>
                    <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
                    
                </div>
                <div>
                    <div className="w-full flex flex-col mt-8">
                        <label htmlFor="mensaje" className='font-montserrat font-normal text-[20px] leading-[30px] tracking-[0.015em] text-black3 md:text-[24px]'>Mensaje:</label>
                        <textarea  name="message" id="mensaje" className='mt-[16px] bg-black2 p-[8px] text-white6 border-[2px] border-solid border-transparent rounded-tl-[7px] rounded-tr-[7px] rounded-br-[7px] rounded-bl-[7px] resize-none h-[160px] leading-none not-italic font-montserrat font-medium text-[16px] focus:outline-none focus:border-[2px] focus:border-solid focus:border-focusInput lg:text-[20px]' required></textarea>
                    </div>
                    <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
                </div>
                <div className="flex items-center justify-center w-full font-montserrat ">
                    <button type="submit" disabled={state.submitting} className='button'>
                       Enviar
                    </button>
                </div>
            </form>
        {state.succeeded&& <p className='font-bold font-montserrat text-xl text-yellow1'>Tu mensaje se envió con éxito !</p>}
 </ContainerGeneral>
  )
}

export default Formulario