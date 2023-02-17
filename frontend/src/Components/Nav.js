import React from 'react';
 import { Form, Link,useNavigate } from 'react-router-dom';
 
 

 const Nav=()=>{
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout=()=>{
        localStorage.clear();
    // navigate('/signup')
    }
    return(
        <div>
            
            <img
            alt="logo"
            className='logo'

             src="https://play-lh.googleusercontent.com/pjUulZ-Vdo7qPKxk3IRhnk8SORPlgSydSyYEjm7fGcoXO8wDyYisWXwQqEjMryZ_sqK2"></img>
            {
                auth ?
        
            <ul className='Nav-ul'>
                <li> <Link to='/'>Tasks</Link></li>
                <li> <Link to='/add'>Add Tasks</Link></li>
             
                 <li> <Link onClick={logout} to='/signup'>Logout({JSON.parse(auth).name})</Link></li>
                 
               </ul>
               :
               <ul className='Nav-ul nav-side'>
              
                <li> <Link to='/signup'>Sign Up</Link></li>
                  <li> <Link to='/login'>login</Link></li>
                 
                
            </ul>
 }
        </div>
    )
 }
 export default Nav;