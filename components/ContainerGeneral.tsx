const ContainerGeneral = ({children}:any) => {
  return (
    <section className={` pl-[16px] pr-[16px] pb-[34px] flex  flex-col gap-[30px] sm:flex sm:justify-center sm:items-center sm:gap-[30px] sm:flex-row md:gap-[30px] lg:gap-[50px] lg:justify-center lg:items-center lg:h-auto lg:flex-col`}>
        {children}
   </section>
  )
}

export default ContainerGeneral