import bragosiLogo2 from '../assets/bragosiLogo2.png';
import { useEffect, useState } from 'react';
import { MdDelete, MdEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

const TodoApp = () => {
    const [isCompleteScreen, setIsCompleteScreen] = useState(false);
    const [newTitle, setNewTitle] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [allTodos, setAllTodos] = useState([]);
    const [completedTodo, setCompletedTodo] = useState([]);
    const [currentEdit, setCurrentEdit] = useState(null);

    const handleAddTodo = () => {
        if (!newTitle.trim() || !newDescription.trim()) {
            alert("Please fill in both the title and description before adding a task.");
            return;
        }

        let newTodoItem = {
            title: newTitle,
            description: newDescription,
        };
        let updatedTodoArr = [...allTodos];
        updatedTodoArr.push(newTodoItem);
        setAllTodos(updatedTodoArr);
        localStorage.setItem('todoList', JSON.stringify(updatedTodoArr));
        setNewTitle("");
        setNewDescription("");
    };

    const handleDeleteTodo = (index) => {
        let reducedTodo = [...allTodos];
        reducedTodo.splice(index, 1);
        setAllTodos(reducedTodo);
        localStorage.setItem('todoList', JSON.stringify(reducedTodo));
    };

    const handleDeleteCompleteTodo = (index) => {
        let reducedTodo = [...completedTodo];
        reducedTodo.splice(index, 1);
        setCompletedTodo(reducedTodo);
        localStorage.setItem('completedTodo', JSON.stringify(reducedTodo));
    };

    const handleComplete = (index) => {
        let now = new Date();
        let completedOn = `${now.toLocaleDateString()} at ${now.toLocaleTimeString()}`;
        
        let filterdItem = {
            ...allTodos[index],
            completedOn,
        };
        let updatedCompletedArr = [...completedTodo];
        updatedCompletedArr.push(filterdItem);
        setCompletedTodo(updatedCompletedArr);
        handleDeleteTodo(index);
        localStorage.setItem('completedTodo', JSON.stringify(updatedCompletedArr));
    };

    const handleEditTodo = (index) => {
        setCurrentEdit(index);
        setNewTitle(allTodos[index].title);
        setNewDescription(allTodos[index].description);
    };

    const handleSaveEdit = () => {
        if (currentEdit === null) return;

        let updatedTodos = [...allTodos];
        updatedTodos[currentEdit] = {
            title: newTitle,
            description: newDescription,
        };
        setAllTodos(updatedTodos);
        localStorage.setItem('todoList', JSON.stringify(updatedTodos));
        setCurrentEdit(null);
        setNewTitle("");
        setNewDescription("");
    };

    useEffect(() => {
        let savedTodo = JSON.parse(localStorage.getItem('todoList'));
        let savedCompletedTodo = JSON.parse(localStorage.getItem('completedTodo'));
        if (savedTodo) setAllTodos(savedTodo);
        if (savedCompletedTodo) setCompletedTodo(savedCompletedTodo);
    }, []);

    return (
        <section>
            <div className="App">
                <div className="relative flex flex-row justify-center items-center gap-6 pt-10">
                    <img src={bragosiLogo2} alt="logo" width={80} height={30} />
                    <h2 className="font-bold text-white text-4xl">To-do App</h2>
                </div>
                <div className="relative bg-wrapper md:w-4/5 justify-center items-center flex ml-auto mr-auto">
                    <div>
                        <div className="gap-5 flex flex-row justify-center items-center border-b-[1px] p-10">
                            <div className="relative flex flex-col leading-10">
                                <label className="text-white text-lg mr-2 font-bold" htmlFor="title">Title:</label>
                                <input
                                    className="p-1 w-full lg:w-[290px] hover:border-purple border-2 outline-none rounded-lg"
                                    type="text"
                                    placeholder="Name your task"
                                    value={newTitle}
                                    onChange={(e) => setNewTitle(e.target.value)}
                                />
                            </div>
                            <div className="relative flex flex-col leading-10">
                                <label className="text-white text-lg mr-2 font-bold" htmlFor="title">Description:</label>
                                <input
                                    value={newDescription}
                                    onChange={(e) => setNewDescription(e.target.value)}
                                    className="p-1 w-full lg:w-[290px] hover:border-purple border-2 outline-none rounded-lg"
                                    type="text"
                                    placeholder="Describe your task"
                                />
                            </div>
                            <div className="relative justify-center items-center mt-7">
                                {currentEdit === null ? (
                                    <button className="my-button" type="button" onClick={handleAddTodo}>Add</button>
                                ) : (
                                    <button className="my-button" type="button" onClick={handleSaveEdit}>Save</button>
                                )}
                            </div>
                        </div>
                        <div className="p-7">
                            <div className="relative flex-row flex items-start">
                                <button className={`${!isCompleteScreen ? 'secondaryBtn' : 'btn'}`} onClick={() => setIsCompleteScreen(false)}>Todo</button>
                                <button className={`${isCompleteScreen ? 'secondaryBtn' : 'btn'}`} onClick={() => setIsCompleteScreen(true)}>Completed</button>
                            </div>
                            <div className="flex flex-col mt-5 w-full">
                                {isCompleteScreen === false && allTodos.map((items, i) => (
                                    <div key={i} className="bg-gray-900 mb-2 flex flex-row p-8 w-full">
                                        <div className="flex flex-col w-full">
                                            <h1 className="text-[25px] font-bold text-purple mt-0">{items.title}</h1>
                                            <p className="text-[14px] text-white mt-0">{items.description}</p>
                                        </div>
                                        <div className="flex flex-row mt-5 gap-3">
                                            <MdDelete className="icon" title="Delete" onClick={() => handleDeleteTodo(i)} />
                                            <MdEdit className="icon" title="Edit" onClick={() => handleEditTodo(i)} />
                                            <FaCheck className="iconn" title="Completed" onClick={() => handleComplete(i)} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TodoApp;
