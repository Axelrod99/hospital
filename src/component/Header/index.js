import React from 'react'
import logo from '../../assets/icons/logo.png'


export default function index() {
  return (
    <div className='h-24 flex px-5 justify-between items-center text-md font-semibold'>
      <img className='h-10' src={logo}/>

      <div className='sm:flex gap-5 text-xs hidden md:text-sm '>
        <p>Find Doctors?</p>
        <p>Service</p>
        <p>Blog</p>
      </div>

      <p>Register/Login</p>
    </div>
  )
}
