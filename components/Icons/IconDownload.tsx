import React from 'react'
interface colorIcon{
  fill?:string
}
const IconDownload = ({fill}:colorIcon,props:any) => {
  return (
    <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M24 8.47h-6.857V0H6.857v8.47H0l12 9.883L24 8.47ZM0 21.178V24h24v-2.823H0Z"
      fill={`${fill?fill:"#F3F3F3"}`}
    />
  </svg>
  )
}

export default IconDownload