import React,{useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";


function Signup(){

    const[name, setName]= useState("")
    const[email, setEmail]= useState("")
    const[password, setPassword]= useState("")
    const [error ,setError] = React.useState(false)
  
    const navigate = useNavigate(); 

    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth)
        {
            navigate('/')
        }
    },[])


    const collectData= async ()=>{
        // console.log(name,email,password);
        if(!name || !email || !password)
        {
            setError(true)
            return false;
        }
        let result = await fetch("http://localhost:5000/register",{
            method:'post',
            body:JSON.stringify({name,email,password}),
            headers:{
                "Content-Type":"application/json"

            }

    });
     result = await result.json();
     console.log(result);
    //  localStorage.setItem('user',JSON.stringify(result));
     navigate('/login');
    }
    return(
        <div className="Register">
            <h1>Register</h1>
<input className="inputBox" type="text"placeholder="Enter Name" required
value={name} onChange={(e)=>setName(e.target.value)} />
 {error&& !name  && <span className='invaild-input'>Enter valid name</span>}


<input  className="inputBox" type="text"placeholder="Enter Email" 
value={email} onChange={(e)=>setEmail(e.target.value)} />
 {error&& !email  && <span className='invaild-input'>Enter valid email</span>}

<input  className="inputBox" type="password"placeholder="Enter Password"
value={password} onChange={(e)=>setPassword(e.target.value)} />
 {error&& !password  && <span className='invaild-input'>Enter valid password</span>}

<button onClick={collectData} className="appButton" type="button">Sign Up</button>
        </div>
    )
}
export default Signup;