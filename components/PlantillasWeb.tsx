import ContainerGeneral from './ContainerGeneral'
import Titulo from './Titulo'
import ImagenAccion from './ImagenAccion'
const PlantillasWeb = () => {
  return (
    <ContainerGeneral>
        <Titulo titulo='Mi excelencia en diseño de plantillas'/>
      
        <ImagenAccion image={'https://res.cloudinary.com/darps1cta/image/upload/v1676390679/sitioweb/port_zpstv9.jpg'} alt="Mi excelencia en diseño de plantillas" tituloButton='Conoce más'/>
    </ContainerGeneral>
  )
}

export default PlantillasWeb