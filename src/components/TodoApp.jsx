import bragosiLogo2 from '../assets/bragosiLogo2.png'
import { useState } from 'react'

const TodoApp = () => {
    const [isCompleteScreen, setIsCompleteScreen ] = useState(false);
  return (
    <section> 
          <div className='App'>
            {/** Heading */}
            <div className='relative flex flex-row justify-center items-center gap-6 pt-10'>
                <img src={bragosiLogo2} alt="logo" width={80} height={30} />
                <h2 className='font-bold text-white text-4xl '>
                    To-do App
                </h2>
            </div>
                {/** Input */}
            <div className='relative bg-wrapper md:w-4/5 justify-center items-center flex ml-auto mr-auto'>
            <div>
                     <div className='gap-5 flex flex-row justify-center items-center border-b-[1px] p-10'>
                    <div className='relative flex flex-col leading-10 '>
                        <label className='text-white text-lg mr-2 font-bold' htmlFor="title">Title:</label>
                        <input className='p-1 w-full lg:w-[290px] hover:border-purple border-2 outline-none rounded-lg' type="text" placeholder="Name your task" />
                    </div>
                <div className='relative flex flex-col leading-10'>
                        <label className='text-white text-lg mr-2  font-bold' htmlFor="title">Description:</label>
                        <input className='p-1 w-full lg:w-[290px] hover:border-purple border-2 outline-none rounded-lg' type="text" placeholder="Describe your task" />
                    </div>

                    <div className='relative justify-center items-center mt-7'>
                        <button className='my-button' type='button'>
                            Add
                        </button>
                    </div>
                 </div>
                 
                 <div className='p-7 ' >
                     <div className='relative flex-row flex items-start'>
                <button 
                className={`secondaryBtn ${isCompleteScreen &&
                     ''}`} onClick={()=>setIsCompleteScreen(false)}
                >
                    Todo</button>
                <button 
                className={`secondaryBtn ${isCompleteScreen
                     && 'bg-slate-700'}`} onClick={()=>setIsCompleteScreen(true)}
                >Completed</button>
            </div>
            <div 
            className='todo-list'>
                <div>
                    <h1 className='relative text-white  font-semibold text-xl'>
                        Task 1</h1>
                    <p>Description</p>
                </div>
            </div>
                 </div>
            </div>
            </div>

        </div>
    </section>
  )
}

export default TodoApp