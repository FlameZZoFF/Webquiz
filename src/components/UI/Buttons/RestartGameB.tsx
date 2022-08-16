import React from 'react'
import './RestartGameB.scss'
import {Link} from 'react-router-dom'
interface buttonProps{
    restart():void;
}
const RestartGameB:React.FC<buttonProps> = ({restart}) => {
  return (
    <Link to='/' style={{}} onClick={restart}><button onClick={restart} className='Restart'>
       Restart
    </button></Link>
  )
}

export default RestartGameB