import React from 'react'
import { useContext } from 'react'
import { SiteContextVal } from '../../context/SiteContext'
const IconArrowDown = ({id}:any,props:any) => {
const {idProyectExperience}=useContext(SiteContextVal)
  return (
    <svg
    className={`${idProyectExperience.id===id.id&& idProyectExperience.state!==false&&'rotate-180'} transition-all duration-500`}
    width={24}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.82 0 12 9.553 21.18 0 24 2.941 12 15.456 0 2.941 2.82 0Z"
      fill="#E6E6E6"
    />
  </svg>
  )
}

export default IconArrowDown