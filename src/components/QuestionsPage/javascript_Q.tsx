import React, { useEffect, useState } from 'react'
import JSquest from '../questions/JS_quests'
import { useAppDispatch, useAppSelector } from '../store/redux_hooks/hooks'
import { AddSmth } from '../store/slices/resultSlice'
import Result from '../result/result'
import BackButton from '../UI/Buttons/BackButtuon'
import './styles/ForAllQ.scss'
import { SetLength } from '../store/slices/resultQlengthSlice'
export default function JavascriptQ() {

  const [currentPage,setCurrentPage] = useState(0)
  const score = useAppSelector(state=>state.result.countResult)
  const [showResult,setShowResult] = useState(false)
  const dispatch = useAppDispatch()
  const ChooseAnswer = (isCorrect:boolean) =>{
    if(isCorrect){
      dispatch(AddSmth(1))
    }
   if(currentPage + 1 > JSquest.length - 1){
     setShowResult(true)
   }else{
    setCurrentPage(prev => prev + 1)
   }
  }

  useEffect(()=>{
    dispatch(SetLength(JSquest.length))
  },[])
  return (
    showResult 
    ?
    <Result/>
    :
    <div className='ForAllQ'>
      <BackButton/>
      <h3>JavaScript</h3>
      <h2>{currentPage + 1} из {JSquest.length}</h2>
      <h1>{JSquest[currentPage].question}</h1>
      {JSquest[currentPage].options.map((elem)=>(
        <div onClick={()=>ChooseAnswer(elem.isCorrect)} className='ForAllQ-options'>
        <li >{elem.text}</li>
        </div>
      ))}
    </div>
  )
}
