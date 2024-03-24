import React, { createContext, useState } from 'react'

export const context = createContext();
const ContextWrapper = ({children}) => {
    const [datas,setDatas] = useState([]);
  return (
    <context.Provider
    value={{
        datas,setDatas
    }}
    >
        {children}
    </context.Provider>
  )
}

export default ContextWrapper;