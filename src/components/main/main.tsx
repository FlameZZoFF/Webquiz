import React from 'react'
import './main.scss'
import Category from '../categories/categories'
import { Link } from 'react-router-dom'
import ButtonStart from '../UI/Buttons/ButtonStart'
export default function Main() {
  return (
    <div className='Main'>
      {Category.map((elem)=>(
        <div className='Main_categories'>
          <h1 className='Main_categories-name'>{elem.name}</h1>
          <img className='Main_categories-photo' src = {elem.photo} ></img>
          <p className='Main_categories-description'>{elem.desription}</p>
          <Link to={elem.path}><ButtonStart/></Link>
        </div>
      ))}
    </div>
  )
}
