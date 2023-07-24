import "./todoPage.css"
import { useUser } from "../../contexts/userContext";
import { useEffect, useState } from "react";
import { getTodos, addTodo, removeTodo, checkTodo } from "../../axios";
import { Navigate } from "react-router-dom";

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
    if (!user) {
        return   <Navigate to="/login"></Navigate>
    }
        return (<main className="todo-page">

            <form className="todo-form" onSubmit={() => addTodo(todoForm).then(response => console.log(response).catch(error => console.log(error)))}>
                <input onChange={(e) => { console.log(todoForm); setTodoForm({ ...todoForm, text: e.target.value }) }}></input>
                <button type="submit" className="btn add-btn">ADD</button>
            </form>
            {/* TODOS!!! */}
            {todos.map(todo => {
                return <div className={`todo-item ${todo.isChecked ? "todo-checked" : ""}`}>
                    {todo.text}
                    <div>
                        <button className="btn delete-btn" onClick={(e) => { handleRemoveTodo(todo._id); }}>x</button>
                        <button className="btn check-btn" onClick={(e) => { handleCheckTodo(todo); }}>o</button>
                    </div>

                </div>
            })}

        </main>)
    


}


export default TodoPage;



