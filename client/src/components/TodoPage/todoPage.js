import { useUser } from "../../contexts/userContext";
import { useEffect, useState } from "react";
import { getTodos, addTodo, removeTodo, checkTodo } from "../../axios";

import{ AiFillCheckCircle, AiFillDelete, AiOutlineCheck } from "react-icons/ai"

function TodoPage() {

    // get user from context
    const { user } = useUser();
    // hold todos
    const [todos, setTodos] = useState([])
    // todo form variables
    const [todoForm, setTodoForm] = useState({
        text: "",
        user: user?._id,
    })

    // Axios functions
    const handleGetTodos = async () => {
        getTodos(user._id)
            .then(response => {
                setTodos(response.data.todos);
                console.log(Array.from(response.data.todos));
            })
            .catch(error => console.log(error));
    }

    const handleRemoveTodo = (todoId) => {
        removeTodo(todoId)
            .then(response => {
                setTodos(todos.filter(todo => todo._id !== todoId));
                console.log(response)
            })
            .catch(error => console.log(error))
    }


    const handleCheckTodo = (todo) => {
        checkTodo(todo._id).then(response => {
            console.log(response)
            setTodos(todos.map(todoMap => {
                if (todoMap._id === todo._id) {
                    return ({ ...todoMap, isChecked: !todoMap.isChecked })
                }
            }));
        }).catch(error => console.log(error))
    }

    // get todos when page starts
    useEffect(() => {
        // get todo
        handleGetTodos();
    }, [])

    // if user login , show this page


    return (<main className="todo-page">

        <form className=" w-full flex flex-row items-center  justify-center  p-3 bg-yellow-500" onSubmit={() => addTodo(todoForm).then(response => console.log(response).catch(error => console.log(error)))}>
            <input className="w-full" onChange={(e) => { console.log(todoForm); setTodoForm({ ...todoForm, text: e.target.value }) }} placeholder="Add a todo!"></input>
            <button type="submit" className="text-white bg-green-700  hover:opacity-50 focus:outline-none focus:ring-4  font-bold rounded-full  px-5 py-2.5 text-center">ADD</button>
        </form>
        {/* TODOS!!! */}
        {
            todos.map(todo => {
                return <div className={`todo-item ${todo.isChecked ? "todo-checked" : ""}`}>
                    {todo.text}
                    <div>
                        <button className="btn delete-btn flex items-center" onClick={(e) => { handleRemoveTodo(todo._id); }}><AiFillDelete size={25}/></button>
                        <button className="btn check-btn flex items-center" onClick={(e) => { handleCheckTodo(todo); }}><AiOutlineCheck size={25}/></button>
                    </div>

                </div>
            })
        }

    </main >)



}


export default TodoPage;



