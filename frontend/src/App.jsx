
import {   Route, Routes } from 'react-router-dom'

import LandingPage from './pages/LandingPage'

function App() {
  

  return (
    <div>
      hello word
      
  
 
      <Routes>
        <Route path='/' element={<LandingPage/>} />
      </Routes>
      
      
  </div>
  )
}

export default App
