import React, { useEffect, useState } from 'react'
import CSSQuest from '../questions/CSS_quests'
import { useAppDispatch, useAppSelector } from '../store/redux_hooks/hooks'
import { AddSmth } from '../store/slices/resultSlice'
import Result from '../result/result'
import './styles/ForAllQ.scss'
import BackButton from '../UI/Buttons/BackButtuon'
import { SetLength } from '../store/slices/resultQlengthSlice'
export default function Сss_q() {

  const [currentPage,setCurrentPage] = useState(0)
  const score = useAppSelector(state=>state.result.countResult)
  const [showResult,setShowResult] = useState(false)
  const dispatch = useAppDispatch()
  const ChooseAnswer = (isCorrect:boolean) =>{
    if(isCorrect){
      dispatch(AddSmth(1))
    }
   if(currentPage + 1 > CSSQuest.length - 1){
     setShowResult(true)
   }else{
    setCurrentPage(prev => prev + 1)
   }
  }
  useEffect(()=>{
    dispatch(SetLength(CSSQuest.length))
  },[])
  return (
    showResult 
    ?
    <Result/>
    :
    <div className='ForAllQ'>
      <BackButton/>
      <h3>CSS</h3>
      <h2>{currentPage + 1} из {CSSQuest.length}</h2>
      <h1>{CSSQuest[currentPage].question}</h1>
      {CSSQuest[currentPage].options.map((elem)=>(
        <div onClick={()=>ChooseAnswer(elem.isCorrect)} className='ForAllQ-options'>
        <li >{elem.text}</li>
        </div>
      ))}
    </div>
  )
}

