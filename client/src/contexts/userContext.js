import { useContext, createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState( JSON.parse(localStorage.getItem("user")) || null );

    const loginUser = (userData) => {
        setUser(userData);
        console.log(user);
        localStorage.setItem('user', JSON.stringify(userData));
    }

    const logoutUser = () => {
        setUser(null);
        localStorage.removeItem('user');
    }

    return <UserContext.Provider value={{ user, setUser, loginUser , logoutUser }}>{children}</UserContext.Provider>
}

export const useUser = () => useContext(UserContext)