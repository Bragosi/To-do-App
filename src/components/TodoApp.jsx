import bragosiLogo2 from '../assets/bragosiLogo2.png'
const TodoApp = () => {
  return (
    <section>
        <div className='App'>
            <div className='relative flex flex-row justify-center items-center gap-6 pt-10'>
                <img src={bragosiLogo2} alt="logo" width={80} height={30} />
                <h2 className='font-bold text-white text-4xl '>
                    My To-do
                </h2>
            </div>

            <div className='todo-wrapper'>
                <div className='todo-input'>
                    <div className='todo-input-item'>
                        <label htmlFor="title">Title</label>
                        <input type="text" placeholder="Name your task" />
                    </div>

                    <div className='todo-input-item'>
                        <label htmlFor="description">Description</label>
                        <input type="text" placeholder="Describe the task" />
                    </div>

                    <div className='todo-input-item'>
                        <button className='primaryBtn' type='button'>
                            Add
                        </button>
                    </div>
                </div>
            </div>

            <div className='btn-area'>
                <button>Todo</button>
                <button>Completed</button>
            </div>

            <div className='todo-list'>
                <div>
                    <h1>Task 1</h1>
                    <p>Description</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TodoApp