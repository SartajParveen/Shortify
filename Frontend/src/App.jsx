import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import LandingPage from './Components/LandingPage/LandingPage';
import UrlForm from './Components/UrlForm/UrlForm';
const App = () => {
  return (
    <div>
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/urlForm' element={<UrlForm/>} />
        
       </Routes>
      
      </BrowserRouter>
      
    </div>
  )
}

export default App
