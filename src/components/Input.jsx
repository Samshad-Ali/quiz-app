import React from 'react'

const Input = ({placeholder,name,type,register}) => {
  return (
   <input className={`${type==='text'?'w-2/3':'w-8'} text-sm p-1 border  rounded-md`} type={type} name={name} placeholder={placeholder} {...register(name)}  />
  )
}

export default Input;