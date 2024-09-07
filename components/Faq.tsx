import React, { useState } from 'react';
interface FaqItem {
    question: string;
    answer: string;
  }
  interface FaqComponentProps {
    faqs: FaqItem[];
  }
const Faq = ({ faqs }:FaqComponentProps) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className="max-w-2xl mx-auto p-4">
    <div>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <div
            className="cursor-pointer flex justify-between items-center p-4 bg-gray-100 rounded"
            onClick={() => toggleFaq(index)}
          >
            <div className="font-semibold text-azulpalido2">{faq.question}</div>
            <div className="text-gray-500">{activeIndex === index ? (<svg width="17" height="3" viewBox="0 0 17 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.0196 2.01009L1.0203 2.15256C0.755099 2.15526 0.499686 2.0525 0.310251 1.86688C0.120816 1.68126 0.0128759 1.42799 0.0101769 1.16279C0.00747779 0.897587 0.110241 0.642174 0.295859 0.452739C0.481477 0.263304 0.734745 0.155364 0.999948 0.152665L14.9992 0.0101888C15.2644 0.0074897 15.5198 0.110253 15.7093 0.295871C15.8987 0.481489 16.0066 0.734757 16.0093 0.99996C16.012 1.26516 15.9093 1.52058 15.7237 1.71001C15.538 1.89945 15.2848 2.00739 15.0196 2.01009Z" fill="#71BB4C"/>
</svg>
) : (<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 7H9V1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0C7.73478 0 7.48043 0.105357 7.29289 0.292893C7.10536 0.48043 7 0.734784 7 1V7H1C0.734784 7 0.48043 7.10536 0.292893 7.29289C0.105357 7.48043 0 7.73478 0 8C0 8.26522 0.105357 8.51957 0.292893 8.70711C0.48043 8.89464 0.734784 9 1 9H7V15C7 15.2652 7.10536 15.5196 7.29289 15.7071C7.48043 15.8946 7.73478 16 8 16C8.26522 16 8.51957 15.8946 8.70711 15.7071C8.89464 15.5196 9 15.2652 9 15V9H15C15.2652 9 15.5196 8.89464 15.7071 8.70711C15.8946 8.51957 16 8.26522 16 8C16 7.73478 15.8946 7.48043 15.7071 7.29289C15.5196 7.10536 15.2652 7 15 7Z" fill="#71BB4C"/>
</svg>
)}</div>
          </div>
          {activeIndex === index && (
            <div className="p-4 bg-white rounded mt-2 text-black3">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
  )
}

export default Faq