import './App.css';
import Header from './components/header';
import Login from './components/loginPage';
import { UserProvider } from './contexts/userContext';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import TodoPage from './components/todoPage';


function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      {/* <Route path='' element={<div>Home</div>}/> */}
      <Route path='/login' element={<Login/>} />
      <Route path="/home" element={<TodoPage/>}/>
    </Routes>
    </BrowserRouter>
      
    </>
  );
}


function Root() {
  return <UserProvider>
    <App/>
  </UserProvider>
}

export default Root;
