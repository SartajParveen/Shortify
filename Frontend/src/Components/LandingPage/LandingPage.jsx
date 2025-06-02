import React from 'react'
import './LandingPage.css'
import { useNavigate } from 'react-router-dom'
// import LandingImage from '../Assets/MainPage.jpg'

const LandingPage = () => {
    const navigate = new useNavigate();

    const change=()=>{
        navigate('/urlForm')
    }
  return (
    <div onClick={change} className='landingPage'>
      
    </div>
  )
}

export default LandingPage
