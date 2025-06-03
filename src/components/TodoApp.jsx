import bragosiLogo2 from '../assets/bragosiLogo2.png';
import { useEffect, useState } from 'react';
import { MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";

const TodoApp = () => {
    // State management
    const [isCompleteScreen, setIsCompleteScreen] = useState(false);
    const [newTitle, setNewTitle] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [allTodos, setAllTodos] = useState([]);
    const [completedTodo, setCompletedTodo] = useState([]);
    const [currentEdit, setCurrentEdit] = useState("");
    const [currentEditedItem, setCurrentEditedItem] = useState("");

    // Handlers for todos
    const handleAddTodo = () => {
        if (!newTitle.trim() || !newDescription.trim()) {
            alert("Please fill in both the title and description before adding a task.");
            return;
        }

        const newTodoItem = { title: newTitle, description: newDescription };
        const updatedTodoArr = [...allTodos, newTodoItem];
        
        setAllTodos(updatedTodoArr);
        localStorage.setItem('todoList', JSON.stringify(updatedTodoArr));
        setNewTitle("");
        setNewDescription("");
    };

    const handleDeleteTodo = (index) => {
        const updatedTodos = allTodos.filter((_, i) => i !== index);
        setAllTodos(updatedTodos);
        localStorage.setItem('todoList', JSON.stringify(updatedTodos));
    };

    const handleDeleteCompleteTodo = (index) => {
        const updatedCompletedTodos = completedTodo.filter((_, i) => i !== index);
        setCompletedTodo(updatedCompletedTodos);
        localStorage.setItem('completedTodo', JSON.stringify(updatedCompletedTodos));
    };

    const handleComplete = (index) => {
        const now = new Date();
        const completedOn = `${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()} at ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
        
        const completedItem = { ...allTodos[index], completedOn };
        
        const updatedCompletedArr = [...completedTodo, completedItem];
        setCompletedTodo(updatedCompletedArr);
        handleDeleteTodo(index);
        localStorage.setItem('completedTodo', JSON.stringify(updatedCompletedArr));
    };

    // Handlers for editing todos
    const handleEdit = (index) => {
        setCurrentEdit(index);
        setCurrentEditedItem(allTodos[index]);
    };

    const handleUpdateTitle = (value) => {
        setCurrentEditedItem((prev) => ({ ...prev, title: value }));
    };

    const handleUpdateDescription = (value) => {
        setCurrentEditedItem((prev) => ({ ...prev, description: value }));
    };

    const handleUpdateTodo = () => {
        const updatedTodos = [...allTodos];
        updatedTodos[currentEdit] = currentEditedItem;
        
        setAllTodos(updatedTodos);
        setCurrentEdit("");
        localStorage.setItem('todoList', JSON.stringify(updatedTodos));
    };

    // Load todos from localStorage
    useEffect(() => {
        const savedTodo = JSON.parse(localStorage.getItem('todoList')) || [];
        const savedCompletedTodo = JSON.parse(localStorage.getItem('completedTodo')) || [];
        
        setAllTodos(savedTodo);
        setCompletedTodo(savedCompletedTodo);
    }, []);

    // Render sections
    const renderTodos = () => (
        allTodos.map((item, i) => (
            currentEdit === i ? (
                <div key={i} className="relative flex flex-col gap-2">
                    <input
                        type="text"
                        className="border-2 p-2 outline-none hover:border-purple w-full h-8 rounded-md"
                        placeholder="Update Title"
                        value={currentEditedItem.title}
                        onChange={(e) => handleUpdateTitle(e.target.value)}
                    />
                    <textarea
                        className="border-2 p-2 outline-none hover:border-purple w-full h-[5rem] rounded-md"
                        placeholder="Update Description"
                        value={currentEditedItem.description}
                        onChange={(e) => handleUpdateDescription(e.target.value)}
                    />
                    <button className="my-button w-fit ml-auto mr-auto" onClick={handleUpdateTodo}>Update</button>
                </div>
            ) : (
                <div key={i} className="bg-gray-900 mb-2 flex flex-row p-8 w-full">
                    <div className="flex flex-col w-full">
                        <h1 className="text-[25px] font-bold text-purple">{item.title}</h1>
                        <p className="text-[14px] text-white">{item.description}</p>
                    </div>
                    <div className="flex flex-row mt-5 gap-3">
                        <MdDelete className="icon" title="Delete" onClick={() => handleDeleteTodo(i)} />
                        <FaCheck className="iconn" title="Completed" onClick={() => handleComplete(i)} />
                        <CiEdit className="icon" title="Edit" onClick={() => handleEdit(i)} />
                    </div>
                </div>
            )
        ))
    );

    const renderCompletedTodos = () => (
        completedTodo.map((item, i) => (
            <div key={i} className="bg-gray-900 mb-2 flex flex-row p-8 w-full">
                <div className="flex flex-col w-full">
                    <h1 className="text-[25px] font-bold text-purple">{item.title}</h1>
                    <p className="text-[14px] text-white">{item.description}</p>
                    <p className="text-gray-600">Completed on: <i>{item.completedOn}</i></p>
                </div>
                <MdDelete className="icon" title="Delete" onClick={() => handleDeleteCompleteTodo(i)} />
            </div>
        ))
    );

    return (
        <section>
            <div className="App">
                {/* Header */}
                <div className="relative flex flex-row justify-center items-center gap-6 pt-10">
                    <img src={bragosiLogo2} alt="logo" width={80} height={30} />
                    <h2 className="font-bold text-white text-4xl">To-do App</h2>
                </div>

                {/* Input */}
                <div className="relative bg-wrapper md:w-4/5 justify-center items-center flex ml-auto mr-auto">
                    <div>
                        <div className="gap-5 flex flex-row justify-center items-center border-b-[1px] p-10">
                            <div className="relative flex flex-col leading-10">
                                <label className="text-white text-lg font-bold" htmlFor="title">Title:</label>
                                <input
                                    className="p-1 w-full lg:w-[290px] hover:border-purple border-2 outline-none rounded-lg"
                                    type="text"
                                    placeholder="Name your task"
                                    value={newTitle}
                                    onChange={(e) => setNewTitle(e.target.value)}
                                />
                            </div>
                            <div className="relative flex flex-col leading-10">
                                <label className="text-white text-lg font-bold" htmlFor="description">Description:</label>
                                <input
                                    className="p-1 w-full lg:w-[290px] hover:border-purple border-2 outline-none rounded-lg"
                                    type="text"
                                    placeholder="Describe your task"
                                    value={newDescription}
                                    onChange={(e) => setNewDescription(e.target.value)}
                                />
                            </div>
                            <button className="my-button mt-7" onClick={handleAddTodo}>Add</button>
                        </div>

                        {/* Todo and Completed Sections */}
                        <div className="p-7">
                            <div className="flex flex-row">
                                <button
                                    className={`${!isCompleteScreen ? 'secondaryBtn' : 'btn'}`}
                                    onClick={() => setIsCompleteScreen(false)}
                                >Todo</button>
                                <button
                                    className={`${isCompleteScreen ? 'secondaryBtn' : 'btn'}`}
                                    onClick={() => setIsCompleteScreen(true)}
                                >Completed</button>
                            </div>
                            <div className="flex flex-col mt-5 w-full">
                                {!isCompleteScreen ? renderTodos() : renderCompletedTodos()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TodoApp;
