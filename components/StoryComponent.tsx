import React,{useState} from 'react'
import Modal from 'react-modal';
import ReactPlayer from 'react-player';
import Image from 'next/image';
interface StoryComponentProps {
    title: string;
    imageUrl: string;
    videoUrl: string;
  }
const StoryComponent = ({ title, imageUrl,videoUrl }:StoryComponentProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
    const customStyles = {
 
        content: {
          width: '80%',
          maxWidth: '600px',
          margin: 'auto',
          display: 'flex',
        
        }
      };
      const playerConfig = {
        youtube: {
          playerVars: {
            controls: 1, // 0: oculta los controles, 1: muestra los controles
            modestbranding: 1,
            loop: 1,
          },
        },
      };
  return (
    <div className="mx-auto p-4 mt-[80px]">
      <div className='flex flex-wrap mb-[20px] justify-center align-center'>
      
        <Image width={300} height={260} alt="Tu tienda online para tu tienda shopify" className='w-[300] md:w-[450px] rounded-lg' src='https://res.cloudinary.com/dh9etf988/image/upload/v1709337223/crea-tienda-ya-conocenos_1_b9oo0z.png'/>
      </div>
      
      <div className="flex flex-wrap w-full items-center justify-center">
       
        <div className="md:w-1/2">
          <h2 className="text-3xl text-black2 font-montserrat font-semibold mb-4 text-center">{title}</h2>
          <p className="text-md mb-4 text-black3 lg:text-lg font-montserrat">En &quot;Crea tienda ya&quot;, comenzamos nuestra travesía en el vibrante mundo del comercio electrónico con una misión clara: comprender profundamente las necesidades de los emprendedores y transformar esas necesidades en tiendas online funcionales y atractivas. Nuestra historia se origina en las interacciones cotidianas en diversos grupos de ecommerce en redes sociales, donde la pasión por el desarrollo y diseño web encontró su propósito.</p>
          <div className="w-[300px] md:mr-8 mb-[20px] mt-[20px] md:w-[360px] relative">
          <img src={imageUrl} alt="Conocenos quienes somos crea tienda ya" className="w-full h-auto rounded-lg" />
          <button
            className="absolute top-2 right-2 bg-blue-500 text-white p-2 rounded-full"
            onClick={openModal}
          >
            ▶️
          </button>
        </div>
          <p className="text-md mb-4 text-black3 lg:text-lg font-montserrat">Sumergiéndome en comunidades de WooCommerce, Shopify, y más, me dediqué a trabajar mano a mano con cada cliente, descifrando el intrincado puzzle de lo que realmente se necesita para lanzar y escalar un negocio online exitoso. Esta experiencia directa no solo me equipó con un conocimiento invaluable sino que también sembró la semilla para algo más grande: el deseo de crear una microempresa que no solo se especialice en el desarrollo y diseño web, sino que también aspire a convertirse en una agencia integral de marketing, publicidad y desarrollo.</p>
          <p className="text-md mb-4 text-black3 lg:text-lg font-montserrat">El 20 de agosto marcó el inicio de este sueño, con la fundación de &quot;Crea tienda ya&quot; en Perú. Desde entonces, hemos tenido el privilegio de colaborar con clientes de Perú, Colombia, Chile, Ecuador, y más, ayudándoles a materializar sus visiones en el mundo digital. Aunque por ahora nuestro enfoque se mantiene en el desarrollo y diseño de tiendas online, nuestro horizonte es amplio y ambicioso. Miramos hacia un futuro donde &quot;Crea tienda ya&quot; sea reconocida no solo como una agencia de desarrollo, sino como un socio integral en marketing y publicidad, colaborando codo a codo con nuestros clientes para superar los desafíos y alcanzar sus metas.</p>
          <p className="text-md mb-4 text-black3 lg:text-lg font-montserrat">Entendemos que la tecnología avanza a pasos agigantados, y con ella, los negocios y sus necesidades de desarrollo evolucionan constantemente. En &quot;Crea tienda ya&quot;, estamos comprometidos con el crecimiento conjunto, adaptándonos y adoptando nuevas soluciones e implementaciones para asegurar que nuestros clientes siempre estén a la vanguardia.</p>
          <p className="text-md mb-4 text-black3 lg:text-lg font-montserrat">Porque creemos firmemente que el éxito de nuestros clientes es nuestro éxito. Juntos, avanzamos hacia un futuro lleno de posibilidades, crecimiento y éxito compartido.</p>
        </div>
      </div>
    
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Video Modal"
        style={customStyles}
        overlayClassName="overlay"
      >
        <div className="overlay" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
          <div className={`absolute right-0 z-[2] top-[100px]`}>
            <button onClick={closeModal} className="text-3xl rounded-full bg-white hover:bg-white6 w-[50px] h-[50px] cursor-pointer">
              &#x2715;
            </button>
          </div>
          <ReactPlayer url={videoUrl} controls playing config={playerConfig} width="100%" height="100%" />
        </div>
      </Modal>
    </div>
  )
}

export default StoryComponent
