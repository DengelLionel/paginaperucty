import { useState } from 'react';
import Link from 'next/link';
import InputComponente from './InputComponente';
import SelectOptions from './SelectOptions';
import Textarea from './Textarea';
import ButtonUno from './ButtonUno';

const Popupformulario = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleButtonClick = (e:any) => {
    e.preventDefault();
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };
  const [inputNombre, setInputNombre] = useState('');
  const [inputCorreo,setInputCorreo]=useState('');
  const [inputCelular,setInputCelular]=useState('');
  const handleInputNombre = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputNombre(e.target.value);
  };
  const handleInputCorreo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputCorreo(e.target.value);
  };
  const handleInputCelular = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputCelular(e.target.value);
  };

  const [selectedValue, setSelectedValue] = useState('');
  const [selectedObjetivoPrincipal, setSelectedObjetivoPrincipal] = useState('');
  const [selectedDisenomente, setSelectedDisenomente] = useState('');
  const [selectedDisenoprefieres, setSelectedDisenoprefieres] = useState('');
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value);
  };
  const handleObjetivoPrincipal = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedObjetivoPrincipal(e.target.value);
  };
  const handleDisenomente = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDisenomente(e.target.value);
  };
  const handleDisenoprefiere = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDisenoprefieres(e.target.value);
  };
  const options = [
    { value: 'tiendaonline', label: 'Tienda Online' },
    { value: 'negociofisico', label: 'Negocio Físico' },
    { value: 'ambos', label: 'Ambos' },
  ];
  const optionsObjetivoPrincipal = [
    { value: 'crearnuevatiendashopify', label: 'Crear una nueva tienda Shopify' },
    { value: 'rediseñarmitiendaactual', label: 'Rediseñar mi tienda actual' },
    { value: 'aumentarventasmitiendaactual', label: 'Aumentar ventas en mi tienda actual' },
  ];
  const optionsDisenomente = [
    { value: 'ideaclara', label: 'Sí, tengo una idea clara' },
    { value: 'necesitoayuda', label: 'No, necesito ayuda para definirlo' },
    { value: 'tengoalgunasreferencias', label: 'Tengo algunas referencias' },
  ];
  const optionsDisenoprefiere = [
    { value: 'moderno', label: 'Moderno y minimalista' },
    { value: 'elegante', label: 'Elegante y sofisticado' },
    { value: 'colorido', label: 'Colorido y vibrante' },
  ];

  const [textareaValue, setTextareaValue] = useState('');

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(e.target.value);
  };

  const handleClick = () => {
    alert('Button clicked!');
  };
  return (
    <div>
      <Link
        href="https://wa.link/futxo7"
        className="bg-[#9BBC4C] hover:bg-secundary2 transition duration-150 ease-in-out flex flex-row gap-[51px] items-center text-white px-4 py-2 rounded-md font-semibold cursor-pointer text-[18px]"
        onClick={handleButtonClick}
      >
        Solicita tu consulta gratis
        <svg
          width="26"
          height="22"
          viewBox="0 0 26 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.5165 8.11794H0.000244141V13.5299H19.5165V21.6478L26.0002 10.8239L19.5165 0V8.11794Z"
            fill="white"
          />
        </svg>
      </Link>

      {isPopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[9999]">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[80%] lg:w-[50%] h-[90%] overflow-y-auto relative">
          <button
              className="bg-white rounded-full w-[60px] h-[60px] text-white px-4 py-2 absolute top-0 right-0"
              onClick={handleClosePopup}
            >
           <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 1.81286L16.1871 0L9 7.18714L1.81286 0L0 1.81286L7.18714 9L0 16.1871L1.81286 18L9 10.8129L16.1871 18L18 16.1871L10.8129 9L18 1.81286Z" fill="#00060E"/>
</svg>

            </button>
            <h2 className="text-lg font-bold mb-4">¡Consulta gratis!</h2>
            <p className="mb-4">1. Información de Contacto</p>
            <InputComponente 
                    label="Nombre"
                    name="nombre"
                    value={inputNombre}
                    onChange={handleInputNombre}
                    placeholder="Ingresa tu nombre"
                    errorMessage={inputNombre === '' ? 'Este campo es requerido' : ''}
            />
              <InputComponente
                    label="Correo electrónico"
                    name="correo"
                    value={inputCorreo}
                    type='email'
                    onChange={handleInputCorreo}
                    placeholder="Ingresa tu correo electrónico"
                    errorMessage={inputCorreo === '' ? 'Este campo es requerido' : ''}
            />
              <InputComponente
                    label="Número de whatsapp"
                    name="celular"
                    value={inputCelular}
                    type='text'
                    onChange={handleInputCelular}
                    placeholder="Ingresa tu número whatsapp"
                    errorMessage={inputCorreo === '' ? 'Este campo es requerido' : ''}
            />

<p className="mb-4">2. Información sobre el Negocio</p>  
<SelectOptions
label="Tipo de Negocio"
name="tiponegocio"
options={options}
value={selectedValue}
onChange={handleSelectChange}
errorMessage={selectedValue === '' ? 'Por favor selecciona una opción' : ''}
/>

<SelectOptions
label="Objetivo Principal"
name="objetivoprincipal"
options={optionsObjetivoPrincipal}
value={selectedObjetivoPrincipal}
onChange={handleObjetivoPrincipal}
errorMessage={selectedObjetivoPrincipal === '' ? 'Por favor selecciona una opción' : ''}
/>
<p className="mb-4">3. Preferencias de Diseño</p>  
<SelectOptions
label="¿Tienes un diseño en mente para tu tienda?"
name="disenomente"
options={optionsDisenomente}
value={selectedDisenomente}
onChange={handleDisenomente}
errorMessage={selectedDisenomente === '' ? 'Por favor selecciona una opción' : ''}
/>
<SelectOptions
label="¿Qué estilo de diseño prefieres para tu tienda?"
name="disenoprefiere"
options={optionsDisenoprefiere}
value={selectedDisenoprefieres}
onChange={handleDisenoprefiere}
errorMessage={selectedDisenoprefieres === '' ? 'Por favor selecciona una opción' : ''}
/>

<p className="mb-4">4. Comentarios Adicionales</p>  
<Textarea
        label="Comentarios Adicionales (Opcional)"
        name="Comentario Adicional"
        value={textareaValue}
        onChange={handleTextareaChange}
        placeholder="Comentario adicional"
        required={false}
        errorMessage={textareaValue === '' ? 'Este campo es requerido' : ''}
      />
      <ButtonUno label="Solicitar Consulta Gratis" onClick={handleClick}/>
       
          </div>
        </div>
      )}
    </div>
  );
};

export default Popupformulario;
