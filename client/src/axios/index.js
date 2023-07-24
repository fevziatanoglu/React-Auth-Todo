import axios from "axios";

const HTTP = axios.create({
    baseURL : "https://todo-service-dy56.onrender.com"
})


export async function login(formData){
    return await HTTP.post("/users/login" , formData);
}

export async function register(formData){
    return await HTTP.post("/users/register" , formData);
}

export async function addTodo(formData){
    return await HTTP.post("/todos/add" , formData);
}

export async function getTodos(userid){
    return await HTTP.get(`/todos/get/${userid}`);
}

export async function removeTodo(formData){
    return await HTTP.delete(`/todos/delete/${formData}`);
}

export async function checkTodo(formData){
    return await HTTP.put(`/todos/check/${formData}`);
}
