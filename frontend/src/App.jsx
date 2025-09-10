
import {   Route, Routes } from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import UserProvider from './context/UserContext'

function App() {
  

  return (
    <div>
    <UserProvider>
       <Routes>
        <Route path='/' element={<LandingPage/>} />
      </Routes>

    </UserProvider>
      
  
 
     
      
      
  </div>
  )
}

export default App
