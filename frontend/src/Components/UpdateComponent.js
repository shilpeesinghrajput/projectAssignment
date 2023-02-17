import React, { useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';

function UpdateComponent() {
    const [title, setTitle]= React.useState("")
    const [description, setDesc]= React.useState("")
    const [statuss, setStatus]= React.useState("")
    const [error ,setError] = React.useState(false)
    
    const params = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        getTaskDetails();
    },[])

    const getTaskDetails= async ()=>{
        console.log(params);
        let result = await fetch(`http://localhost:5000/task/${params.id}`)
        result =  await result.json();
        console.log(result); 
        setTitle(result.title);
        setDesc(result.description);
        setStatus(result.statuss);
        
    }

  

     const updateTask= async ()=>{

      if(!title || !description || !statuss)
      {
          setError(true)
          return false;
      }

let result = await fetch(`http://localhost:5000/task/${params.id}`,{
  method:"put",
  body:JSON.stringify({title,description,statuss}),
  headers:{
    "content-type":"Application/json"
  }
 
});
result= await result.json();

if(result){
  navigate('/')
}

      

     }
  return (
    <div className='product'>
      <h1>Update Tasks</h1>
      <input type="text" placeholder='Enter product name' className='inputBox'
       value={title}  onChange={(e)=>setTitle(e.target.value)}/>
            {error&& !title  && <span className='invaild-input'>Enter valid Title</span>}

    
     
     

      <input type="text" placeholder='Enter product category' className='inputBox' 
      value={description} onChange={(e)=>setDesc(e.target.value)} />
            {error&& !description  && <span className='invaild-input'>Enter valid Description</span>}

     
     
      
      <select name="" id="" className='inputBox' value={statuss}  onChange={(e)=>setStatus(e.target.value)} >
     <option value="">Please Select</option>
      <option value="Plan">Plan</option>
      <option value="Development">Development</option>
      <option value="QA">QA</option>
      <option value="Done">Done</option>
     </select>
      {error&& !statuss  && <span className='invaild-input'>Enter valid Status</span>}

      <button  onClick={updateTask} className='appButton'>Update Task</button>
    </div>
  )
}

export default UpdateComponent;
