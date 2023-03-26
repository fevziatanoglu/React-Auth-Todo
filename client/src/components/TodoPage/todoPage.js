import "./todoPage.css"
import { useUser } from "../../contexts/userContext";
import { useEffect, useState } from "react";
import { getTodos, addTodo } from "../../axios";

function TodoPage() {

    const { user } = useUser();
    const [todos, setTodos] = useState([])

    const [todoForm, setTodoForm] = useState({
        text: "",
        user: user._id,
        isChecked: false
    })

    const getTodosFromAxios = async () => {
        console.log("test!");
        await getTodos(user.id).then(response => console.log(response)).catch(error => console.log(error));
    }

    useEffect(() => {
        console.log(user._id)
        getTodos(user._id).then(response => { setTodos(response.data.todos); console.log(Array.from(response.data.todos)); }).catch(error => console.log(error));
    }, [])

    if (user) {
        return (<div>

            <form onSubmit={()=> addTodo(todoForm).then(response => console.log(response).catch(error => console.log(error)))}>
                <input onChange={(e) => { console.log(todoForm); setTodoForm({ text: e.target.value }) }}></input>
                <button type="submit">add</button>
            </form>

            {todos.map(todos => {
                return <div>{todos.text}</div>
            })}

        </div>)
    }


}


export default TodoPage;



