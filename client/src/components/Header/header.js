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
                        <a>Todos</a>
                        <a>Profile</a>
                        <a>Go Source Code</a>
                    </div>

                    <a className="logout-a" onClick={(e) => logoutUser()}>Logout {user.email}</a >

                </>

                // no user navbar
                :
                <>
                    <div className="nav-content-container">
                        <a>Home</a>
                        <a>About App</a>
                        <a>Go Source Code</a>
                    </div>

                    <a className="login-a" href="/login">Login</a>
                </>
            }

        </nav>
    )
}

export default Header;