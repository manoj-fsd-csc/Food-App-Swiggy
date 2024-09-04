import React from 'react'
  import WELCOME from '../../assets/images/WELCOME.png';  // Corrected import path
// import TopBar from '../components/TopBar';
 // import swiggy3 from '../../assets/images/swiggy3.png';   

function Welcome() {
   return (
    <>
    {/* <TopBar/> */}
      <div className='welcomeSection'>
    <div className='welcomeBody'>
          <div className='imgBox'>
           <img className='img1' src={WELCOME } alt="imgBox" />
           {/* <img onClick={showRegisterHandler}  className='img2' src={swiggy3 } alt="imgBox" /> */}
          </div>
         </div>
    </div>
    </>
  )
}

export default Welcome