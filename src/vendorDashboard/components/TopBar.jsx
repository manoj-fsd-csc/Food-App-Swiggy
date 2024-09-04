import React from 'react'
import swiggyLogo from '../../assets/images/swiggy3.svg';   
import { Link } from 'react-router-dom';


function TopBar({ logOutHandler}) {
    const firmName = localStorage.getItem('firmName')
    return (
     <div className='navSection'>
           <div className='swiggyPngLogodiv'>
                <Link to='/Welcome'>
                <img className='swiggyPngLogo' src={swiggyLogo} alt="Swiggy-1" />
              </Link>
                <div className='company'> Vendor Dashboard</div>
              </div>
         <div className="firmName"><h2>{firmName}</h2></div>
           <div className='userAuth'>
           {/* {!showLogOut ?<><span onClick={showLoginHandler}>Login/</span>
                            <span onClick={showRegisterHandler}>Register</span>
                            </>: */}
                            <span onClick={logOutHandler}>Logout</span>
         </div>
     </div>
   )
}

export default TopBar