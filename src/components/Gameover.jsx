import React, { useContext } from 'react'
import trophy from '../assets/trophy.gif';
import {useNavigate} from 'react-router-dom'
import { context } from '../utils/ContextWrapper';
const Gameover = ({score,setQueNo,setScore}) => {
  const {datas} = useContext(context)
  const navigate= useNavigate();
    const playAgain=()=>{
        setScore(0)
        // setQueNo(0)
        navigate('/')
      }
  return (
    <div className='flex flex-col gap-2 bg-white rounded-md p-4 items-center justify-center'>
        <img className='w-[150px h-[150px] object-contain' src={trophy} />
    <p>Score is {score}/{datas.length}</p>
    <button className='bg-green-500 rounded-md px-4 p-2 font-semibold' onClick={playAgain}>Play Again</button>
    </div>
  )
}

export default Gameover