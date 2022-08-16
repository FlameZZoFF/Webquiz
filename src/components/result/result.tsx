import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../store/redux_hooks/hooks'
import JSquest from '../questions/JS_quests'
import './result.scss'
import RestartGameB from '../UI/Buttons/RestartGameB'
import { ClearScore } from '../store/slices/resultSlice'
export default function Result() {
    const score = useAppSelector(state=>state.result.countResult)
    const lenght = useAppSelector(state=>state.length.QuestsLength)
    const dispacth = useAppDispatch()
    const [rank,setRank] = useState('')
    const Restart = () =>{
        dispacth(ClearScore(0))
    }
    useEffect(()=>{
     if(lenght / score === 1 ){
        setRank('Гуру')
     }else if(lenght / score < 1.4 || lenght / score  <  1.1 ){
      setRank('Опытный')
     }else if(lenght / score <= 0.5 || lenght / score > 0.1){
        setRank('Новичек')
    }
    },[])
  return (
    <div className='result'>
        <h1 className='result__rank'>{rank}</h1>
        <RestartGameB restart={Restart}/>
        <h2 className='result__label'>Ваш результат</h2>
      <h1 className='result__balls'>{score} Балл(ов) из {lenght}</h1>
    </div>
  )
}
