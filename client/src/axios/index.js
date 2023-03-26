import axios from "axios";

const HTTP = axios.create({
    baseURL : "http://localhost:4000"
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

export async function getTodo(formData){
    return await HTTP.post("/todos/get" , formData);
}

export async function removeTodo(formData){
    return await HTTP.post("/todos/remove" , formData);
}
