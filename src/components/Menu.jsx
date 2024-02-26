import React from 'react'

const Menu = ({title,icon}) => {
  return (
    <div className='flex flex-col-reverse gap-1 cursor-pointer  justify-center items-center'>
            <span className='text-xs'>{title}</span>
            <span className='text-black'>{icon}</span>
    </div>
  )
}

export default Menu