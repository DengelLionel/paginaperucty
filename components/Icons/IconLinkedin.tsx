import React from 'react'
interface colorIcon{
  fill?:string
}
const IconLinkedin = ({fill}:colorIcon,props:any) => {
  return (
    <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 1.67A1.67 1.67 0 0 1 1.67 0h16.66A1.67 1.67 0 0 1 20 1.67v16.66A1.671 1.671 0 0 1 18.33 20H1.67A1.671 1.671 0 0 1 0 18.33V1.67Zm7.917 5.955h2.708v1.36c.39-.782 1.39-1.485 2.894-1.485 2.88 0 3.564 1.557 3.564 4.415v5.293h-2.916v-4.642c0-1.627-.39-2.545-1.384-2.545-1.377 0-1.95.99-1.95 2.545v4.642H7.917V7.625Zm-5 9.458h2.916V7.5H2.917v9.583ZM6.25 4.375a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Z"
      fill={`${fill?fill:"#201F47"}`}
    />
  </svg>
  )
}

export default IconLinkedin