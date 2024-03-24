import React, { useContext } from 'react'
import QuizBox from '../components/QuizBox'
import { context } from '../utils/ContextWrapper'

const Quizpage = () => {
  
  return (
    <div className='w-full h-[calc(100vh-60px)] bg-black flex justify-center items-center'>
<QuizBox/>
    </div>
  )
}

export default Quizpage