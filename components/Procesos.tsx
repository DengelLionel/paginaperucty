import React from 'react';

interface ProcesoComponent {
  titulo: string;
  descripcion: string;
}

interface ProcesosTodo {
  procesos: ProcesoComponent[];
}

const Procesos: React.FC<ProcesosTodo> = ({ procesos }) => {
  return (
    <>
      {procesos.map((proceso, index) => (
        <div key={index} className={`my-[5px] p-[16px] ${index%2!=0?' lg:pl-[36px] lg:pr-0':' lg:pl-0 lg:pr-[36px]'}`}>
          <section className="bg-gray-300 font-montserrat rounded-lg p-4 w-full flex items-center lg:w-[492px]">
            <div className={`bg-black rounded-full min-w-[30px] h-[30px] font-bold  justify-center items-center text-white ${index%2!=0?'hidden':'flex'}`}>
              {index + 1}
            </div>
            <div className="ml-4  lg:w-[397px]">
              <span className="text-secundary2 font-bold">{proceso.titulo}</span>
              <p>{proceso.descripcion}</p>
            </div>
            <div  className={`bg-black rounded-full min-w-[30px] h-[30px] font-bold  justify-center items-center text-white ${index%2!=0?'flex':'hidden'}`}>
              {index + 1}
            </div>
          </section>
        </div>
      ))}
    </>
  );
};

export default Procesos;
