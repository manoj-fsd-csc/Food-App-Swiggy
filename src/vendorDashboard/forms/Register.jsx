import React,{useState} from 'react'
import { API_URL } from '../data/apiPath';
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";


function Register({showLoginHandler}) {
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    /* const [error,setError] = useState("")
    const [loading,setLoading] = useState(true) */

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    };

    const handleSubmit = async(e) =>{
      e.preventDefault();
      try {
        const response = await fetch(`${API_URL}/vendor/register`,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({username,email,password})
         })        
        const data = await response.json();
        if(response.ok){
            setUsername("")
            setEmail("")
            setPassword("")
            console.log(data)
            alert("Vendor Registered Succefully")
            showLoginHandler()
        }
        console.log(response)
      } catch (error) {

        console.error("Registration Failed",error)
        alert("Registration Failed")
        
      }
    }



  return (
    <div className="registerSection">
        <form   onSubmit={handleSubmit} className='registerAuthForm'>
        <div className='registerSectionHead'>  SignUp</div>
        <label className='registerAuthFormUsername' >Username:</label> 
        <input type="text" name="username" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='Enter your name' /> <br />
        <label >Email:</label> 
        <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your email' /> <br />
            {/* <label >Password:</label> 
            <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter your password' />
             */}
            <div style={{  position: 'relative', display: 'inline-block' }}>
            <label style={{marginLeft:'70px' }} >Password:</label> 
            <input   type={passwordVisible ? 'text' : 'password'} style={{ paddingRight: '90px',height:'23px', width:'370px',marginLeft:'70px', display:'block' }} name='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter your password' />
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
        {passwordVisible ?< IoIosEye className='passwordEye' />: <IoIosEyeOff className='passwordEye' />}
      </span>
    </div>
            <div className='agreeCheckbox'>
           <p>
              <input required   class="styled-checkbox"  type="checkbox" /> 
              I agree all <a href=""> terms & policys</a>
           </p>
           <div>Forgot Password</div>
           </div>
            {/* <div className="btnSubmit"> */}

            <div className="logInBtnSubmit">
                <br />
                <button type='submit'>Submit</button> 
                   <div className='linkLogin'>
                    <p >Don't have an account?
                     <span  onClick={showLoginHandler}>Login</span></p>
                 </div>
                
            </div>
        </form>
    </div>
   )
}

export default Register

/*

Manoj kumar S 
manojsundaram541@gmail.com
manoj541

*/