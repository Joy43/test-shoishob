import React from 'react'
import Navbar from '../shared/Navbar'

export default function Authenticationlayout( {children}) {
  return (
    <div>
    <Navbar/>
    {children}
    </div>
  )
}
