import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const TaskList = () => {
  const [tasks, setTasks] = useState([]);
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


  const searchHandler = async (e) => {
    let key = e.target.value;
    if (key) {
      let result = await fetch(` http://localhost:5000/search/${key}`)
      result = await result.json();
      if (result) {
        setTasks(result);
      } else {
        getTasks();
      }
    }
  }

  return (
    <div className='product-list'>
      <h2>Tasks List</h2>
      <input type="" className='search-product-box' placeholder='search'
        onChange={searchHandler} />

<div className='row justify-content-center'>

      {
        
        tasks.length > 0 ? tasks.map((item, index) =>
          
            <div key={item._id} className="card col-3 m-4" style={{ width: 18 + 'rem' }}>
              <div className="card-header  bg-primary text-white">
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
