import React,{useState} from 'react'
import { useEffect } from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import Login from '../forms/Login'
import Register from '../forms/Register'
import AddFirm from '../forms/AddFirm'
import AddProduct from '../forms/AddProduct'
import Welcome from '../forms/Welcome'
import AllProducts from '../forms/AllProducts'
import UserDetails from '../forms/UserDetails'

const LandingPage = () => {
  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)
  const [showFirm, setShowFirm] = useState(false)
  const [showProduct, setShowProduct] = useState(false)
  const [showWelcome, setShowWelcome] = useState(false)
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [showLogOut, setShowLogOut] = useState(false)
  const [showFirmTitle, setShowFirmTitle] = useState(true)
  const [showUserDetails, setShowUserDetails] = useState(false)
/*   const [isClicked, setIsClicked] = useState(true);
 */
  useEffect(()=>{
    const loginToken = localStorage.getItem('loginToken');
    if(loginToken){
      setShowLogOut(true)
      /*    setShowWelcome(true) */
    }
  }, [])
  /*   const firmClicked = () =>{
    setShowFirm(false)
    }
    */
   
   
   const firmIdPresent = ()=>{
     const firmId = localStorage.getItem('firmId');
     if(firmId){
      //  alert("firmId");
       setShowFirm(false)
       setShowProduct(true)
    }else{
      alert(" REMAIN FIRM  ");
      setShowFirm(true)
    }
 }

  useEffect(()=>{
      const firmName = localStorage.getItem('firmName');
       if(firmName ){
          setShowFirmTitle(false)
       }
  },[])



  const logOutHandler =()=>{
    confirm("Are you sure to logout?")
    if(true){
      localStorage.removeItem("loginToken");
      localStorage.removeItem("firmId");
      localStorage.removeItem('firmName');
      setShowLogOut(false)
      setShowFirmTitle(true)
      setShowUserDetails(false)
      /* setShowWelcome(false) */
    }

  }


  const showRegisterHandler = ()=>{
    setShowRegister(true)
    setShowLogin(false)
    setShowFirm(false)
    setShowProduct(false)
    setShowWelcome(false)
    setShowAllProducts(false)
    setShowUserDetails(false)

}
const showLoginHandler =()=>{
    setShowLogin(true)
    setShowRegister(false)
    setShowFirm(false)
    setShowProduct(false)
    setShowWelcome(false)
    setShowAllProducts(false)
    setShowUserDetails(false)

}
const showWelcomeHandler = ()=>{
  setShowWelcome(true)
  setShowRegister(false)
  setShowLogin(false)
  setShowFirm(false)
  setShowProduct(false)
  setShowAllProducts(false)
  setShowUserDetails(false)

}


const showFirmHandler = ()=>{
    if(showLogOut){
      setShowFirm(true)
        setShowRegister(false)
        setShowLogin(false)
        setShowProduct(false)
        setShowWelcome(false)
        setShowAllProducts(false)
        setShowUserDetails(false)
    }else{
        alert("Please Login");
        setShowLogin(true)
    }
 }
 
/*  const showCutFirmHandlerHandler = ()=>{
  const firmId = localStorage.getItem('firmId')
  }
 */
const showProductHandler = ()=>{
    if(showLogOut){
      setShowProduct(true)
    setShowRegister(false)
    setShowLogin(false)
    setShowFirm(false)
    setShowWelcome(false)
    setShowAllProducts(false)
    setShowUserDetails(false)
     }else{
        alert("Please Login");
        setShowLogin(true)
    }
  
}

const showAllProductsHandler = ()=>{
    if(showLogOut){
      setShowAllProducts(true)
    setShowRegister(false)
    setShowLogin(false)
    setShowFirm(false)
    setShowProduct(false)
    setShowWelcome(false)
    setShowUserDetails(false)
    }else{
        alert("Please Login");
        setShowLogin(true)
    }
}
const showUserDetailsHandler = ()=>{
  if(showLogOut){
    setShowUserDetails(true)
  setShowRegister(false)
  setShowLogin(false)
  setShowFirm(false)
  setShowProduct(false)
  setShowWelcome(false)
  setShowAllProducts(false)
   }else{
      alert("Please Login");
      setShowLogin(true)
  }
}

/* const handleClick = () => {
  // window.location.reload(); 
  console.log("IT'S CLICKED")
  setIsClicked(true); 
}; */
const handleClick = () => {
  // console.log(" LAND firmSubmit clicked")  
  window.location.reload(); 

};

 
  return (
    <>
      <section className='landingSection'>
             <NavBar showLoginHandler = {showLoginHandler} showRegisterHandler = {showRegisterHandler}
            showLogOut = {showLogOut}
            logOutHandler = {logOutHandler}
            handleClick = {handleClick}
            />
           

            <div className="collectionSection">
            { showLogOut &&<SideBar showFirmHandler={showFirmHandler} showProductHandler ={showProductHandler}
            showAllProductsHandler = {showAllProductsHandler}
            showFirmTitle={showFirmTitle}
            showUserDetailsHandler={showUserDetailsHandler}
            />}


            {!showLogin && !showRegister && !showProduct && !showFirm && !showProduct &&  !showAllProducts  && !showUserDetails &&/*  isClicked &&   */  <Welcome   showRegisterHandler={showRegisterHandler}/>}

            
          {showFirm && showLogOut &&  <AddFirm
          firmIdPresent={firmIdPresent}
           />}

          {/* firmClicked={firmClicked} showCutFirmHandlerHandler={showCutFirmHandlerHandler} */}

          {showProduct && showLogOut &&<AddProduct />} 
          {showUserDetails && showLogOut &&<UserDetails />} 
          {showAllProducts && showLogOut &&  <AllProducts />}
          {showLogin && <Login showWelcomeHandler ={showWelcomeHandler} 
                               showRegisterHandler={showRegisterHandler}
                               />}
           {showRegister && <Register showLoginHandler={showLoginHandler}
            logOutHandler = {logOutHandler}/>}
        
            </div>
        </section>
    </>
  )
}

export default LandingPage




