import React, { useState } from 'react'
import "./LoginPopup.css"
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'
const LoginPopup = ({setShowpopup}) => {

    const{url,setToken}=useContext(StoreContext)
    const[currState,setCurrState]=useState("log in")
    const[data,setData]=useState({
        name:"",
        email:"",
        password:""
    })

    const onChangeHandler=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setData(data=>({...data,[name]:value}))
    }

    const onLogin=async(event)=>{
             event.preventDefault()
             let newUrl=url;
             if (currState==="log in") {
                newUrl+="/api/user/login"
             }
             else{
                newUrl+="/api/user/register"
             }
             const response=await axios.post(newUrl,data);
             if (response.data.success) {
                setToken(response.data.token);
                localStorage.setItem("token",response.data.token);
                setShowpopup(false)
             }
             else{
                alert(response.data.message);
             }

    }



  return (
    <div className='login-popup'>
        <form onSubmit={onLogin} action="" className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowpopup(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currState==="log in"?<></>:<input name='name' type='text'onChange={onChangeHandler} value={data.name} placeholder='your name'></input>}
                
                <input type="email" name='email' onChange={onChangeHandler} value={data.email} placeholder='your email'/>
                <input type="password" name='password' onChange={onChangeHandler} value={data.password} placeholder='enter password' />
            </div>
            <button type='submit'>{currState==="sign up"?"create account":"log in"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By continuing , agree for terms and policies!</p>
            </div>
            {currState==="log in"
            ?<p>Create a new account? <span onClick={()=>setCurrState("sign up")}>click here</span></p>
            :<p>Already have account?<span onClick={()=>setCurrState("log in")}>Login here</span></p>
        
        }
        </form>
        
    </div>
  )
}

export default LoginPopup