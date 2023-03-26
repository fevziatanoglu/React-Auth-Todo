import "./loginPage.css";

import { useState } from "react";
import { login, register } from "../../axios";
import { useUser } from "../../contexts/userContext";

function Login() {
    
    const { loginUser } = useUser();

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
            })
            .catch(error => {
                console.log(error);
                setError({ isError: true, errorMessage: [error.response.data.message] })
            }
            );
    }

    // slider
    const [slider, setSlider] = useState(false);

    const handleSlider = () => {
        setSlider(!slider)
        setError({ isError: false, errorMessage: [] });
    }


    return (
        // main
        <main className="main">
            {/* slider */}
            <div className={slider ? "slider-left slider" : "slider-right slider"}>

                <h1>{slider ? "WELCOME!" : "HELLO :)"}</h1>

                <p>
                    {slider ? "If you have an account, let's login!" : "If you have not an account, let's create an account for you."}

                </p>

                <button className="slider-btn btn" onClick={(e) => handleSlider()}>
                    {slider ? "Login >" : "< Register "}
                </button>

            </div>

            {/* login */}
            <div className="box login-box">


                <h1>LOGIN</h1>

                <form onSubmit={(e) => loginSubmit(e)}>
                    <input placeholder="Email" type="Email" name="email" value={loginForm.email} onChange={(e) => handleLoginOnChange(e)}></input>
                    <input placeholder="Password" type="Password" name="password" value={loginForm.password} onChange={(e) => handleLoginOnChange(e)}></input>
                    <div >

                        {
                            error.isError && error.errorMessage.map((message) => {
                                return <p className="error-message">{message}</p>
                            })
                        }

                    </div>

                    <button className="submit-btn btn" type="submit">Sign In</button>
                </form>
            </div>

            {/* register */}
            <div className="box register-box">

                <h1>REGISTER</h1>

                <form onSubmit={(e) => registerSubmit(e)}>
                    <input placeholder="Email" type="Email" name="email" onChange={(e) => handleRegsiterOnChange(e)}></input>
                    <input placeholder="Password" type="Password" name="password" onChange={(e) => handleRegsiterOnChange(e)}></input>
                    <input placeholder="Confirm Password" type="Password" name="confirmPassword" onChange={(e) => handleRegsiterOnChange(e)}></input>
                    <div >

                        {
                            error.isError && error.errorMessage.map((message) => {
                                return <p className="error-message">{message}</p>
                            })
                        }

                    </div>
                    <button class="submit-btn btn" type="submit" >Sign Up</button>

                </form>
            </div>



        </main>


    );
}

export default Login;
