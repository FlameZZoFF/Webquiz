import React from 'react'
import {Outlet,Navigate} from 'react-router-dom'
import Header from '../header/header'
import Main from '../main/main'

export default function Layout() {

  return (
    <div>
    <Header />
    <Outlet/>
    </div>
  )
}