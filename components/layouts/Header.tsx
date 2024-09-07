import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState,useRef,useEffect } from 'react'
import IconTiktok from '../Icons/IconTiktok'
import IconInstagram from '../Icons/IconInstagram'
const Header = () => {
const router=useRouter()
const [selectedLink, setSelectedLink] = useState(null)
const [error, setError] = useState(null)
  const Scroll = (elemento:any) => {
    // Verifica si estás en la página correcta
    if (
        router.pathname === '/conocenos' ||
        router.pathname === '/servicios/mantenimiento-soporte-tienda-online-shopify'|| router.pathname==='/diseno-tienda-shopify'|| router.pathname==='/servicios/diseno-grafico-ecommerce'
    ) {
        // Navega a la página principal y espera a que se complete
        router.push('/').then(() => {
                // Una vez que se ha completado el enrutamiento, verifica si el window está definido
                if (typeof window !== 'undefined') {
                    const destino = document.querySelector(elemento)
                    if (destino) {
                        // Realiza el desplazamiento
                        destino.scrollIntoView({ behavior: 'smooth' })
                        setSelectedLink(elemento)
                    }
                }
            })
            .catch(err => console.error(err)) // Captura cualquier error que pueda ocurrir durante el enrutamiento
    } else {
        // Si ya estás en la página principal, solo realiza el desplazamiento
        if (typeof window !== 'undefined') {
            const destino = document.querySelector(elemento)
            if (destino) {
                destino.scrollIntoView({ behavior: 'smooth' })
                setSelectedLink(elemento)
            }
        }
    }
}

    const [isMenuOpen, setMenuOpen] = useState(false);
    const toggleContainer:any|undefined = useRef<any>(null);
    const [isSubMenuOpen, setSubMenuOpen] = useState(false);
    const [isSubMenuOpenD, setSubMenuOpenD] = useState(false);
    const [currentPath, setCurrentPath] = useState('/');
    useEffect(() => {
        // Verificar si estamos en el navegador antes de intentar acceder a window
        if (typeof window !== 'undefined') {
          setCurrentPath(window.location.pathname);
        }
      }, []);
    useEffect(() => {
        
      window.addEventListener("click", onClickOutsideHandler);
      return () => {
        window.removeEventListener("click", onClickOutsideHandler);
      };
    }); 
    const onClickOutsideHandler = (event:any) => {
      if (isMenuOpen  && !toggleContainer.current.contains(event.target)) {
        setMenuOpen(false)
        setSubMenuOpen(false)
      }
      else if (isSubMenuOpenD  && !toggleContainer.current.contains(event.target)) {
        setSubMenuOpenD(false)
      }
    };
    useEffect(() => {
      const handleScroll = () => {
        if (toggleContainer.current) {
          const isScrolled = window.scrollY > 0;
          toggleContainer.current.style.boxShadow = isScrolled ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none';
        }
      };
  
      // Agrega un listener de evento al scroll
      window.addEventListener('scroll', handleScroll);
  
      // Limpia el listener cuando el componente se desmonta
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (

    <header  ref={toggleContainer} className="bg-white font-poppins font-bold p-4 z-[9999] fixed top-0 w-full">
    <nav className="flex items-center justify-between">
        <Link className='relative w-[240px] h-auto inline-block hover:rotate-3 transition-transform duration-300' href={"/"}>
        <Image width={240} height={40} src="https://res.cloudinary.com/dh9etf988/image/upload/v1695404889/creatiendaya/LOGO_CTY_bordes_blancos_horizontal_u00ee6.png" alt="Ayudamos a crear tu tienda online en shopify  " />
        </Link>
       

      <div className="md:hidden">
        {/* Botón de menú para dispositivos móviles */}
        <button
          className="transition ease-in-out duration-150 text-white focus:outline-none"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
         <svg
              className="h-6 w-6"
              fill="none"
              stroke="#222222"  // Cambia el color a negro (#222222)
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
        </button>
      </div>

      <div className="hidden md:flex space-x-4">
          <ul className="flex space-x-4">
         
            <li>
              <Link href="/"  className={` transition ease-in-out duration-150 hover:text-secundary2 ${currentPath === '/' ? 'text-secundary2' : 'text-black2'}`}>
                INICIO
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className={`transition ease-in-out duration-150 hover:text-secundary2  ${
                    currentPath === '/servicios/diseno-tienda-shopify' || currentPath==='/servicios/diseno-grafico-ecommerce' || currentPath==='/servicios/mantenimiento-soporte-tienda-online-shopify'  ? 'text-secundary2' : 'text-black2'
                  }`}
                onClick={(e) => {
                  e.preventDefault();
                  setSubMenuOpenD(!isSubMenuOpenD);
                }}
              >
                SERVICIOS ECOMMERCE
              </Link>
              {isSubMenuOpenD && (
                <ul className="ml-4 absolute top-[70%] bg-white border-[3px] border-l-transparent border-b-transparent border-r-transparent border-t-secundary2 p-2">
                  {/* Submenu */}
                  <li className='p-[8px]'>
                    <Link href="/servicios/diseno-tienda-shopify"   className={` transition ease-in-out duration-150 hover:text-secundary2 ${
                        currentPath === '/servicios/diseno-tienda-shopify' ?  'text-secundary2' : 'text-black3'
                      }`}>
                     DISEÑO DE TIENDA SHOPIFY
                    </Link>
                  </li>
                  <li className='p-[8px]'>
                    <Link href="/servicios/diseno-grafico-ecommerce"  className={` transition ease-in-out duration-150 hover:text-secundary2 ${
                        currentPath === '/servicios/diseno-grafico-ecommerce' ?  'text-secundary2' : 'text-black3'
                      }`}>
                     DISEÑO GRÁFICO ECOMMERCE
                    </Link>
                    {/* ... más elementos del submenu */}
                  </li>
                  <li className='p-[8px]'>
                    <Link href="/servicios/mantenimiento-soporte-tienda-online-shopify"  className={` transition ease-in-out duration-150 hover:text-secundary2 ${
                        currentPath === '/servicios/mantenimiento-soporte-tienda-online-shopify' ?  'text-secundary2' : 'text-black3'
                      }`}>
                     MANTENIMIENTO O SOPORTE
                    </Link>
                    {/* ... más elementos del submenu */}
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link href="/conocenos"    className={`transition ease-in-out duration-150  hover:text-secundary2 ${currentPath === '/conocenos' ? 'text-secundary2' : 'text-black2'}`}>
                CONÓCENOS
              </Link>
            </li>
            <li>
              <Link href="https://wa.link/4ad85q"  target='_blank' className={` cursor-pointer transition ease-in-out duration-150 text-black2  hover:text-secundary2 `}>
                CONTÁCTANOS
              </Link>
            </li>
            <li>
              <Link href="https://www.tiktok.com/@creatiendaya"  title="TIKTOK"  className={`transition-all duration-150 hover:text-secundary2`}>
               <IconTiktok/>
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/dengelrivera.dev/"  title="INSTAGRAM"  className={`text-black2 transition-all duration-150 hover:text-secundary2 `}>
               <IconInstagram/>
              </Link>
            </li>
            <li>
              <Link href="https://www.facebook.com/creatiendaya/"  title="Facebook"  className={`text-black2 transition-all duration-150 hover:text-secundary2`}>
              <svg width="23" height="23" viewBox="0 0 23 23" className="fill-current text-gray3 transition ease-in-out duration-150 hover:text-secundary2" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5 0C5.15868 0 0 5.15888 0 11.5C0 17.8413 5.15868 23.0004 11.5 23.0004C17.8409 23.0004 23 17.8413 23 11.5C23 5.15888 17.8409 0 11.5 0ZM14.7502 7.25972C14.7502 7.31418 14.7286 7.3664 14.6901 7.4049C14.6516 7.44341 14.5994 7.46504 14.5449 7.46504L13.2376 7.46586C12.3751 7.46586 12.2174 7.80177 12.2174 8.46331V9.83567H14.4595C14.5184 9.83567 14.5747 9.86113 14.6135 9.90548C14.6523 9.94983 14.6704 10.0088 14.6632 10.0673L14.3439 12.5379C14.3375 12.5874 14.3133 12.6329 14.2758 12.6658C14.2383 12.6988 14.1901 12.7169 14.1402 12.7169H12.2174V18.8517C12.2174 18.9062 12.1958 18.9584 12.1573 18.9969C12.1187 19.0354 12.0665 19.057 12.0121 19.057H9.46117C9.40671 19.057 9.35449 19.0354 9.31598 18.9969C9.27748 18.9584 9.25585 18.9062 9.25585 18.8517V12.7169H7.32686C7.27241 12.7169 7.22018 12.6953 7.18168 12.6568C7.14317 12.6183 7.12154 12.5661 7.12154 12.5116V10.041C7.12154 9.98654 7.14317 9.93431 7.18168 9.89581C7.22018 9.8573 7.27241 9.83567 7.32686 9.83567H9.25585V8.21877C9.25585 6.07728 10.5518 4.74721 12.6385 4.74721C13.5355 4.74721 14.3283 4.81394 14.5718 4.84618C14.6212 4.8527 14.6665 4.87693 14.6993 4.91436C14.7321 4.95179 14.7502 4.99987 14.7502 5.04965V7.25972Z"/>
</svg>

              </Link>
            </li>
          </ul>
        </div>
      
    </nav>
    <div
          className={`md:hidden absolute top-[80px] bg-secundary2 p-[16px] w-[340px] transition-transform transform ${
            isMenuOpen ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 -translate-y-4'
          }`}
        >
          <ul className="  flex flex-col">
            <li className='p-[8px]'>
              <Link href="/" className="text-white">
                INICIO
              </Link>
            </li>
            <li className='p-[8px]'>
              <Link
                href="#"
                className={`text-white ${isSubMenuOpen ? 'font-bold' : 'font-normal'}`}
                onClick={(e) => {
                  e.preventDefault();
                  setSubMenuOpen(!isSubMenuOpen);
                }}
              >
                SERVICIOS ECOMMERCE
              </Link>
              {isSubMenuOpen && (
                <ul className="ml-4  bg-text-secundary2 p-2">
                  {/* Submenu */}
                  <li className='p-[8px]'>
                    <Link href="/servicios/diseno-tienda-shopify" className="text-white">
                    DISEÑO DE TIENDA SHOPIFY
                    </Link>
                  </li>
                  <li className='p-[8px]'>
                    <Link href="/servicios/diseno-grafico-ecommerce" className="text-white">
                    DISEÑO GRAFICO ECOMMERCE
                    </Link>
                    {/* ... más elementos del submenu */}
                  </li>
                  <li className='p-[8px]'>
                    <Link href="/servicios/mantenimiento-soporte-tienda-online-shopify" className="text-white">
                   MANTENIMIENTO O SOPORTE
                    </Link>
                    {/* ... más elementos del submenu */}
                  </li>
                </ul>
              )}
            </li>
            <li className='p-[8px]'>
              <Link href="https://wa.link/4ad85q" className="text-white">
                CONTÁCTANOS
              </Link>
            </li>
            
          </ul>
        </div>
  </header>
  )
}

export default Header