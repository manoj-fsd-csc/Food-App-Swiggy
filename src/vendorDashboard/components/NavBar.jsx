import React from 'react'
import swiggyLogo from '../../assets/images/swiggy3.svg';   
 

const NavBar = ({showLoginHandler,showRegisterHandler,showLogOut,logOutHandler,handleClick}) => {
  const firmName = localStorage.getItem('firmName')
   return (
    <div className='navSection'>
          <div onClick={handleClick} className='swiggyPngLogodiv'>
                <div className='swiggyPngLogoBox'>
                     <img className='swiggyPngLogo' src={swiggyLogo} alt="Swiggy-1" />
                 </div>    
                <div className='company'> Vendor Dashboard</div>
         </div>
        <div className="firmName"><h2>{firmName}</h2></div>
          <div className='userAuth'>
          {!showLogOut ?<><span onClick={showLoginHandler}>Login</span>
                           <span onClick={showRegisterHandler}>SignUp</span>
                           </>:
                           <span onClick={logOutHandler}>Logout</span>}
        </div>
    </div>
  )
}

export default NavBar