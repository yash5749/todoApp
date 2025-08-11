import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [title, settitle] = useState("")
  const [desc, setDisc] = useState("")
  const [maintask, setMainTask] = useState([])
  const submithandler = (e) => {
    e.preventDefault()
    setMainTask([...maintask, { title, desc }]);
    settitle("")
    setDisc("")

  }

  const deleteHandler = (i) => {
      let copsyTask = [...maintask];
      copsyTask.splice(i,1);
       setMainTask(copsyTask);


  }


  let rendertask = <h2>No Task Avaliable</h2>
  if(maintask.length > 0) {
   rendertask = maintask.map((t,i) => {
    return (
   <li key={i}>
       <div className='flex justify-between'>
        <h6>{t.title}</h6>
        <h5>{t.desc}</h5>
        <button className='relative inline-flex items-center justify-center p-1 mb-3 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-red-600 to-pink-500    dark:text-white  content-center'
        onClick={ () => {
          deleteHandler(i);
        }}>Delete</button>
      </div>
   </li>
    );
  });
 }

  return (

    <>
    <h1 className='bg-black text-white p-5 font-bold text-5xl text-center'>Yash ToDoApp</h1>
    <form className='py-2' onSubmit={submithandler} >
      <input type="text" className='text-2xl border-zinc-800 border-4 m-5 px-4 py-2 rounded-2xl' 
      placeholder='Enter Task Here'
      value={title}
      onChange={(e)=>{
        settitle(e.target.value);
      }}
      />
      <input type="text" className='text-2xl border-zinc-800 border-4 m-5 px-4 py-2 rounded-2xl' 
      placeholder='Enter Descrpition Here'
      value={desc}
      onChange={(e) => {
        setDisc(e.target.value)
      }}
      />

     <button className="relative inline-flex items-center justify-center p-1 mb-3 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 content-center">
<span className="relative px-5 py-2 transition-all ease-in duration-75  dark:bg-gray-900 rounded-full group-hover:bg-transparent group-hover:dark:bg-transparent">
Add Task
</span>
</button>

    </form>
    <hr />
    <div className='p-8 bg-slate-200'>
      <ul>
        {rendertask}
      </ul>
    </div>
    </>
  )
}

export default App
