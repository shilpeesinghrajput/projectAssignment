import React from 'react';
import { useNavigate } from 'react-router-dom';

function AddTasks() {
    const [title, setTitle]= React.useState("")
    const [description, setDesc]= React.useState("")
    const [statuss, setStatus]= React.useState("")
    const [error ,setError] = React.useState(false)
    const navigate= useNavigate()

     const addTask= async()=>{

        if(!title || !description || !statuss)
        {
            setError(true)
            return false;
        }
       
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        console.log(userId);
        let result = await fetch(" http://localhost:5000/add-task",{
            method:"post",
            body :JSON.stringify({title,description,statuss}),
            headers:{
                "content-type":"application/json"
            }
        });
        result = await result.json();
        console.log(result);
        navigate('/')

     }
  return (
    <div className='product'>
      <h1>Add a Task</h1>
      <input type="text" placeholder='Enter Task Title' className='inputBox' value={title}  onChange={(e)=>setTitle(e.target.value)}/>
     {error&& !title  && <span className='invaild-input'>Enter valid Title</span>}

      <input type="text" placeholder='Describe Your task' className='inputBox' value={description}  onChange={(e)=>setDesc(e.target.value)} />
      {error&& !description  && <span className='invaild-input'>Enter valid Description</span>}

     
     <select name="" id="" className='inputBox' defaultValue=''  onChange={(e)=>setStatus(e.target.value)} >
     <option value="">Please Select</option>
     <option value="Plan">Plan</option>
      <option value="Development">Development</option>
      <option value="QA">QA</option>
      <option value="Done">Done</option>
     </select>
      {error&& !statuss  && <span className='invaild-input'>Enter valid Status</span>}

      <button  onClick={addTask} className='appButton'>Add Task</button>
    </div>
  )
}

export default AddTasks;
