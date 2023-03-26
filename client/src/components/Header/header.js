import { useUser } from "../../contexts/userContext";
import "./header.css"
function Header() {
    const { user, logoutUser } = useUser();
    return (



        <nav>
            <h1>REACT AUTH APP</h1>


            {user
                ?
                // user navbar
                <>
                    <div className="nav-content-container">
                        <a href="todopage">Todos</a>
                        <a href="login">Profile</a>
                        <a>Go Source Code</a>
                    </div>

                    <button className="logout-btn btn" onClick={(e) => {logoutUser(); window.location.replace('/login');}}>Logout</button >

                </>

                // no user navbar
                :
                <>
                    <div className="nav-content-container">
                        <a>Home</a>
                        <a>About App</a>
                        <a>Go Source Code</a>
                    </div>

                    <button className="login-btn btn" onClick={(e) => {window.location.replace('/login')}} href="/login">Login</button>
                </>
            }

        </nav>
    )
}

export default Header;