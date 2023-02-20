import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';


function Login() {

  const [email,setEmail]= React.useState('');
  const [password ,setPassword] = React.useState('');
  const navigate =useNavigate();

  useEffect(()=>{
    const auth = localStorage.getItem('user');
    if(auth)
    {
      navigate('/')
    }
},[])

  const handleLogin = async ()=>{
 
    let result = await fetch("http://localhost:5000/login",{
      method:"post",
      body: JSON.stringify({email,password}),
      headers:{
        "Content-Type":"application/json"
      }

    });
    result =  await result.json();
    console.log(result);
    if(result.name)
{
 localStorage.setItem("user",JSON.stringify(result));
 navigate('/')
}else{
  alert("email & pasaword are not correct")
}
  }
  return (
    <div className='login'>
      <h2>Login</h2>
      <input  value={email} className="inputBox" type="text" required
      placeholder='enter your email' onChange={(e)=>setEmail(e.target.value)} />
      

      <input  value={password} className="inputBox"  required
      type="password" placeholder='enter your password' onChange={(e)=>setPassword(e.target.value)} />

      <button  className="appButton" type='button' onClick={handleLogin} >Login</button>
    </div>
  )
}

export default Login;
