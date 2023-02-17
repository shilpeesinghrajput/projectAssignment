
import './App.css';
import Nav from './Components/Nav';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Signup from './Components/Signup';
import PrivateComponent from './Components/PrivateComponent';
import Login from './Components/Login';
import AddTasks from './Components/AddTasks';
import TaskList from './Components/TaskList';
import UpdateComponent from './Components/UpdateComponent';


function App() {
  return (
   
    <div className="App">
       <BrowserRouter>
    <Nav/>
   
    <Routes>
      <Route element={<PrivateComponent />}>
      <Route path='/' element={<TaskList/>}/>
      <Route path='/add' element={<AddTasks/>}/>
      <Route path='/update/:id' element={<UpdateComponent/> }/>
      <Route path='/logout' element={ <h1> logout component</h1>}/>
     
    

      </Route>

      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>

    </Routes>
    
    </BrowserRouter>

    <Footer/>
    </div>
  );
}

export default App;
