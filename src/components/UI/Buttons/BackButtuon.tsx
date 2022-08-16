import React from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../store/redux_hooks/hooks'
import { ClearScore } from '../../store/slices/resultSlice'
import './BackButton.scss'
const  BackButton = () => {
    
const counter = useAppSelector(state=>state.result.countResult)
const dispacth = useAppDispatch()
const GoBack = () =>{
    dispacth(ClearScore(0))
}
  return (
    <Link  to='/' style={{border:'0'}}><button className='Backbutton' onClick={GoBack}>
      Назад
    </button>
    </Link>
  )
}

export default BackButton