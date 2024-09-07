import React from 'react'
interface BenefitItem {
    title: string;
    description: string;
    icon: React.ReactNode;
  }
  
  interface BenefitsComponentProps {
    benefits: BenefitItem[];
  }
const Beneficio = ({ benefits }:BenefitsComponentProps) => {
  return (
    <div className=" mx-auto p-4 w-full font-montserrat">
    <div className="flex justify-center flex-wrap gap-8 lg:gap-[15px]">
      {benefits.map((benefit, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-m sm:w-[250px] flex flex-col justify-center items-center lg:w-[250px]">
          <div className="mb-4 text-center text-secundary2 text-[40px] lg:text-[80px] ">{benefit.icon}</div>
          <h3 className="text-xl font-semibold mb-2 text-black2">{benefit.title}</h3>
          <p className='text-black3'>{benefit.description}</p>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Beneficio
