import './App.css';
import Header from './components/Header/header';
import Login from './components/LoginPage/loginPage';
import { UserProvider } from './contexts/userContext';
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='' element={<div>Home</div>}/>
      <Route path='/login' element={<Login/>} />
      
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
