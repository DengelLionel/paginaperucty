import React from 'react'

const IconArrowBack = ({BackClick}:any,props:any) => {
  return (
    <svg
    className='md:hidden'
    onClick={BackClick}
    width={29}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M29 10H6.17l5.768-7.18L9.667 0 0 12l9.667 12 2.271-2.82L6.171 14H29v-4Z"
      fill="#F3F3F3"
    />
  </svg>
  )
}

export default IconArrowBack