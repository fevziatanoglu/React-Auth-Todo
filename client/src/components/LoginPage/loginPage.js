import "./loginPage.css";

import { useState } from "react";
import { login, register } from "../../axios";
import { useUser } from "../../contexts/userContext";

function Login() {

    const { loginUser } = useUser();

    // from type variables
    const [formType, setFormType] = useState("login");



    const handleFormType = () => {
        setFormType(formType === "login" ? "register" : "login");
        console.log(formType);
        setError({ isError: false, errorMessage: [] })
    }


    const [error, setError] = useState({
        isError: true,
        errorMessage: []
    });


    // login page variables
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: "",
    })

    const handleLoginOnChange = (e) => {
        setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
    }

    const loginSubmit = async (e) => {
        e.preventDefault();
        await login(loginForm)
            .then(response => {
                console.log(response.data.user);
                loginUser(response.data.user);
                window.location.replace('/home');
            })
            .catch(error => {
                console.log(error.response.data.message)
                setError({ isError: true, errorMessage: [error.response.data.message] })
            });
    }



    // register variables
    const [registerForm, setRegisterForm] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })



    const handleRegsiterOnChange = (e) => {
        setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
    }

    const registerSubmit = async (e) => {
        e.preventDefault();
        await register(registerForm)
            .then(response => {
                console.log(response);
                alert("Sign up successfully!");
                handleFormType();
            })
            .catch(error => {
                console.log(error);
                setError({ isError: true, errorMessage: [error.response.data.message] })
            }
            );
    }



    return (
        <main>
            {formType === "login"
                // LOGIN PAGE
                ?
                <>
                    <div className="text-container">
                        <h1>Welcome</h1>
                        <p>Let's login your account!</p>
                    </div>

                    <form onSubmit={(e) => loginSubmit(e)}>
                        <input placeholder="Email" type="Email" name="email" value={loginForm.email} onChange={(e) => handleLoginOnChange(e)}></input>
                        <input placeholder="Password" type="Password" name="password" value={loginForm.password} onChange={(e) => handleLoginOnChange(e)}></input>
                        <div >
                            <div className="change-form-text">
                                <p>If you do not have an account</p>
                                <a onClick={handleFormType}>Sign Up</a>
                            </div>
                            {
                                error.isError && error.errorMessage.map((message) => {
                                    return <p className="error-message">{message}</p>
                                })
                            }

                        </div>

                        <button type="submit">Sign In</button>
                    </form>
                </>
                // REGISTER PAGE
                :
                <>
                    <div className="text-container">
                        <h1>Welcome</h1>
                        <p>Let's create your account!</p>
                    </div>

                    <form onSubmit={(e) => registerSubmit(e)}>
                        <input placeholder="Email" type="Email" name="email" onChange={(e) => handleRegsiterOnChange(e)}></input>
                        <input placeholder="Password" type="Password" name="password" onChange={(e) => handleRegsiterOnChange(e)}></input>
                        <input placeholder="Confirm Password" type="Password" name="confirmPassword" onChange={(e) => handleRegsiterOnChange(e)}></input>
                        <div >
                            <div className="change-form-text">
                                <p>If you already have an account</p>
                                <a onClick={handleFormType}>Sign In</a>
                            </div>
                            {
                                error.isError && error.errorMessage.map((message) => {
                                    return <p className="error-message">{message}</p>
                                })
                            }

                        </div>
                        <button type="submit" disabled={false}>Sign Up</button>
                    </form>
                </>
            }
        </main>


    );
}

export default Login;
