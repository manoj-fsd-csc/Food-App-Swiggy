import React from 'react'
import { useState } from 'react'
import { API_URL } from '../data/apiPath';
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";

const Login = ({showWelcomeHandler,showRegisterHandler}) => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  
  const loginHandler = async(e) =>{
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/vendor/login`,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({email,password})
      })
      const data = await response.json();
      if(response.ok){
        /* console.log(data) */
        alert('Login success')
        setEmail("");
        setPassword("");
        localStorage.setItem('loginToken',data.token)
        showWelcomeHandler()
       }
      const vendorId = data.vendorId 
      console.log('Checking for vendorId :',vendorId)
      const vendorResponse = await fetch(`${API_URL}/vendor/single-vendor/${vendorId}`)
      const vendorData = await vendorResponse.json();
      if(vendorResponse.ok){
        const vendorFirmId = vendorData.vendorFirmId;
        console.log("Checking for vendorData:-",vendorData );
        const FirmName = vendorData.vendor.firm[0].firmName;
        localStorage.setItem('firmId',vendorFirmId)
        localStorage.setItem('firmName',FirmName)
        // console.log("Checking for FirmName :- ",FirmName );
        window.location.reload()
      }
      
      window.location.reload()
    } catch (error) {
      alert("login fail")
    }
    
  }

  

  return (
    <div className="loginSection">
        <form   className='authForm' onSubmit={loginHandler} autoComplete='off'>
        <div className='logInSectionHead'> Login</div>
            <label className='loginSectionEmail'>Email:</label> 
            <input type="text" name='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your email' /> <br />
            <div style={{ position: 'relative', display: 'inline-block' }}>
            <label style={{marginLeft:'75px' }} >Password:</label> 
            <input   type={passwordVisible ? 'text' : 'password'} style={{ paddingRight: '90px',height:'15px', width:'375px',marginLeft:'75px', display:'block' }} name='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter your password' />
            <span
        onClick={togglePasswordVisibility}
        style={{
          position: 'absolute',
          right: '85px',
          top: '70%',
          transform: 'translateY(-50%)',
          cursor: 'pointer',
        }}
      >
        {passwordVisible ? < IoIosEye className='passwordEye' />: <IoIosEyeOff className='passwordEye' />}
      </span>
    </div>
           <div className='agreeCheckbox'>
           <p>
              <input required   class="styled-checkbox"  type="checkbox" /> 
              I agree all<a href=""> terms & policys</a>
           </p>
           <div>Forgot Password</div>
           </div>

            <div className="logInBtnSubmit">
                <br />
                <button type='submit'>Submit</button> 
                   <div className='linkRegister'>
                    <p >Don't have an account?
                     <span  onClick={showRegisterHandler}>SignUp</span></p>
                 </div>
                
            </div>
        </form>
    </div>
  )
}

export default Login