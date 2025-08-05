import { useState } from 'react'
import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdEdit } from "react-icons/md";

import './App.css'


function App() {
  const [Tasks, setTasks] = useState([])
  const [input,setInput] = useState("")

  function Add(){
   
        setTasks([...Tasks,{text:input,Completed:false}])
        setInput("")
  
    

}
function del(e){
  setTasks(Tasks.filter((_,index)=>index !== e))
}
function edit(t,e){
  setInput(t.text)
  setTasks(Tasks.filter((_,index)=>index !== e))
}
function handleChange(index){
  setTasks(
    Tasks.map((task,i)=> i === index?{...task,Completed : !task.Completed}: task)
  )
}

  return (
    <>
      <section>
          <h1 className='text-center fw-bold w-100 fs-1 p-3 heading text-white'>To Do App</h1>

        <div className='contain mt-5'>
          <h3 className='fs-2'>Enter your task :</h3>
          <div className='inputdiv row justify-content-center align-items-center'>
          <input className='input form-control mb-2 col-6' type="text" value={input} onChange={(e)=> setInput(e.target.value)} />
          <button className='btn bg-secondary save text-white ms-md-5 ms-0 col-1 save ' onClick={Add}>Save</button>
          </div>
        </div>
        <div>
          <ul className='list-group mt-4 d-flex align-items-center ul'>
                     

            {Tasks.map((t,index)=>(
              <li className='list-group-item shadow d-flex align-items-center justify-content-between col-6 w-50 text-start fw-normal' key={index}>
                <div className=' d-flex justify-content-center align-items-center'>
                <input type="checkbox" className='me-2 fs-1 ch' onChange={()=>handleChange(index)} checked={t.Completed} />
                <span className='text-start' style={{textDecoration : t.Completed? "line-through" : 'none'}}>{t.text }</span>
                </div>
               <div className='btn-group group'>
                <button className='btn edit text-white' onClick={()=>edit(t,index)}><MdEdit /></button>
                <button className='btn btn-danger del' onClick={()=>del(index)}><RiDeleteBin6Fill /></button>
                </div>
                </li>
            ))}
            
          </ul>
        </div>
      </section>
    </>
  )
}

export default App
