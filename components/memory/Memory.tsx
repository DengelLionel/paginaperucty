import { useState, useEffect } from 'react';

const Memory = () => {
    const images: string[] = ['https://res.cloudinary.com/dh9etf988/image/upload/v1703562628/cumple/b2_zkhqel.jpg', 'https://res.cloudinary.com/dh9etf988/image/upload/v1703562628/cumple/b4_yhoie5.jpg', 'https://res.cloudinary.com/dh9etf988/image/upload/v1703562628/cumple/b1_r1ut1w.jpg', 'https://res.cloudinary.com/dh9etf988/image/upload/v1703562629/cumple/b3_k1eria.jpg', 'https://res.cloudinary.com/dh9etf988/image/upload/v1703562628/cumple/b1_r1ut1w.jpg', 'https://res.cloudinary.com/dh9etf988/image/upload/v1703562628/cumple/b2_zkhqel.jpg', 'https://res.cloudinary.com/dh9etf988/image/upload/v1703562629/cumple/b3_k1eria.jpg', 'https://res.cloudinary.com/dh9etf988/image/upload/v1703562628/cumple/b4_yhoie5.jpg'];


    const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
    const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
    const [isGameWon, setIsGameWon] = useState<boolean>(false);
    const handleClick = (index: number): void => {
      if (flippedIndices.length === 2) {
        return; // Evitar que se volteen más de dos cartas a la vez
      }
  
      // Evitar que una carta ya volteada se vuelva a voltear
      if (flippedIndices.includes(index) || matchedPairs.includes(images[index])) {
        return;
      }
  
      setFlippedIndices((prevFlipped) => [...prevFlipped, index]);
    };
  
    useEffect(() => {
      if (flippedIndices.length === 2) {
        const [firstIndex, secondIndex] = flippedIndices;
  
        setTimeout(() => {
          if (images[firstIndex] === images[secondIndex]) {
            setMatchedPairs((prevPairs) => [...prevPairs, images[firstIndex]]);
          }
  
          setFlippedIndices([]);
        }, 1000);
      }
    }, [flippedIndices, images]);
  
    useEffect(() => {
      if (matchedPairs.length === images.length / 2) {
        setIsGameWon(true);
        setFlippedIndices([]);
        setMatchedPairs([]);
      }
    }, [matchedPairs, images.length]);
    const closeModal = () => {
        setIsGameWon(false);
      };
    return (
      <div className="memory-game">
        {images.map((image, index) => (
          <div
            key={index}
            className={`card  ${flippedIndices.includes(index) || matchedPairs.includes(image) ? 'flipped' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
            onClick={() => handleClick(index)}
          />
        
        ))}
         {isGameWon && (
        <div  style={{ backgroundImage: `url(https://res.cloudinary.com/dh9etf988/image/upload/v1703562248/cumple/8388377_nolnxf.jpg)` }} className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-md w-96">
            <button className="absolute top-2 right-2 text-sm text-gray-500 hover:text-gray-700" onClick={closeModal}>
              Cerrar
            </button>
            <h2 className="text-xl font-bold mb-4 text-red-500">¡Feliz Cumpleaños Kelly Sol Asmad Chau!</h2>
            <p className="text-gray-600">Este detalle es para ti departe de Dengel Rivera.</p>
          </div>
        </div>
      )}
      </div>
    );
}

export default Memory