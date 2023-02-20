import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [statuss, setStatus]= React.useState("")
  const [named, setNamed] = React.useState("")
  useEffect(() => {
    getTasks();

  }, []);


  const getTasks = async () => {
    let result = await fetch('http://localhost:5000/tasks');
    result = await result.json();
    if (result.hasOwnProperty("result")) {
      setTasks([]);

    } else {
      setTasks(result);
    }

  }
  const deleteTask= async (id) => {
    let result = await fetch(`http://localhost:5000/task/${id}`, {
      method: "Delete"
    });
    result = await result.json();
    if (result) {
      getTasks();
    }
    console.warn(id);

  }
  const statusHandler = async (e) => {
    setStatus(e);
    let status = e;
      let result = await fetch(` http://localhost:5000/search/${named}-${status}`)
      result = await result.json();
      if (result) {
        setTasks(result);
      } else {
        getTasks();
      }
  }
// add a new prop named key plss
  const searchHandler = async (e) => {
setNamed(e)
    let key = e;
   
      let result = await fetch(` http://localhost:5000/search/${key}-${statuss}`)
      result = await result.json();
      if (result) {
        setTasks(result);
      } else {
        getTasks();
      }
    
  }

  return (
    <div className='product-list'>
      <h3>Tasks List</h3>
      <div className='d-flex justify-content-center'>
      <input type="" className='search-product-box ' placeholder='Search'
        onChange={(e)=>searchHandler(e.target.value)} />
        <select name="" id="" className='search-product-box1'
      
        value={statuss}  onChange={(e)=>{statusHandler(e.target.value);}} >
     <option value="">Select status</option>
      <option value="Plan">Plan</option>
      <option value="Development">Development</option>
      <option value="QA">QA</option>
      <option value="Done">Done</option>
     </select>
     </div>

<div className='row justify-content-center'>

      {
        
        tasks.length > 0 ? tasks.map((item, index) =>
          
            <div key={item._id} className="card col-3 m-4 shadow-lg p-3 mb-5 bg-white rounded" style={{ width: 18 + 'rem' }}>
              <div className={item.is_active ? "bg-primary card-header text-white":"bg-success card-header text-white"}>
                {item.title}
              </div>
              <div className="card-body">

                <h6 className="card-subtitle mb-2">{item.statuss}</h6>
                <p className="card-text">{item.description}</p>
                <a href="#" className="card-link btn btn-danger" onClick={() => deleteTask(item._id)}>Delete</a>
                <Link to={'/update/' + item._id} className='card-link btn btn-info'>Update</Link>
              </div>
            </div>
            


        )
          : <h3>No result found</h3>
      
      }
</div>
    </div>
  )
}

export default TaskList;
