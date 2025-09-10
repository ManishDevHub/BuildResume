import React, { useContext } from 'react'
import { landingPageStyles} from '../assets/dummystyle'
import {  LayoutTemplate, Menu } from 'lucide-react';
import { useState } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
export default function LandingPage() {
 const {user} = useContext(UserContext)

const navigate = useNavigate()

 const [mobileMenuOpen, setmobileMenuOpen] = useState(false)


  return <div>
    <div className={landingPageStyles.container}>
<header className={landingPageStyles.header}>
  <div className={landingPageStyles.headerContainer}>
    <div className={landingPageStyles.logoContainer}>
      <div className={landingPageStyles.logoIcon}>
        <LayoutTemplate className={landingPageStyles.logoIconInner} />
        
      </div>
      <span className={landingPageStyles.logoText}>
        NewCareer
         </span>
    </div>
<button className={landingPageStyles.mobileMenuButton}
onClick={() => setmobileMenuOpen(!mobileMenuOpen)} >
  {mobileMenuOpen ?
  < X size={24} className={landingPageStyles.mobileMenuIcon} /> :
   <Menu size={24} className={landingPageStyles.mobileMenuIcon} /> }

</button>
<div className='hidden md:flex item-center'>
  {user}
</div>

  </div>
</header>

    </div>
  </div>
}
