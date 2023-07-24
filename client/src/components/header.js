import { useUser } from "../contexts/userContext";
import { BiLogIn } from "react-icons/bi"
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

function Header() {
    const { user, logoutUser } = useUser();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [darkTheme, setDarkTheme] = useState(false);

    const toggleTheme = () => {
        setDarkTheme(!darkTheme);
        // add theme change here
    }

    return (


        <header className="w-full mx-auto p-2 fixed top-0 z-10  bg-white">
            {/* navbar container */}
            <div className="flex justify-between items-center w-full px-2">





                {/* icon container*/}
                <div>
                    <div><h1 className="text-3xl font-bold ">REACT TODO</h1></div>
                </div>

                {user

                    ?
                    <>
                        {/*dropdown menu button */}
                        <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="">
                            {!isDropdownOpen ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
                        </button>

                        {/* dropdown menu */}
                        {isDropdownOpen && <div className="dropdown h-52 w-36 bg-blue-500 absolute top-14 right-5 rounded-lg flex flex-col  items-center gap-4 p-5 shadow-xl">

                            <div className="text-white text-md font-light">{user.email}</div>

                            <button
                                onClick={() => {
                                    logoutUser();
                                }}
                                className="text-white bg-red-700 hover:opacity-50 focus:outline-none focus:ring-4  font-bold rounded-full  px-5 py-2.5 text-center mr-2 mb-2  flex flex-row items-center gap-4">Logout <BiLogIn size={25} /> </button>



                            <hr />

                            {/* toggle button */}
                            <div
                                onClick={() => toggleTheme()}
                                className="toggle-button bg-red-500">
                                <div className={`toggle-dot bg-green-50 flex justify-center items-center ${darkTheme && "toggle-dot-active"}`}>
                                    {darkTheme ? <BsFillMoonFill /> : <BsFillSunFill />}
                                </div>
                                <div className={`toggle-icon flex justify-center items-center ${darkTheme && "toggle-icon-active"}`}>
                                    {!darkTheme ? <BsFillMoonFill /> : <BsFillSunFill />}
                                </div>
                            </div>
                        </div>
                        }

                    </>

                    : <a href="/login" className="text-white bg-green-700 hover:opacity-50 focus:outline-none focus:ring-4  font-bold rounded-full  px-5 py-2.5 text-center mr-2 mb-2  flex flex-row items-center gap-4">Login <BiLogIn size={25} /> </a>
                }













                {/* toggle button */}
                {/* <div
                        onClick={() => toggleTheme()}
                        className="toggle-button bg-red-500">
                        <div className={`toggle-dot bg-green-50 flex justify-center items-center ${darkTheme && "toggle-dot-active"}`}>
                            {darkTheme ? <BsFillMoonFill /> : <BsFillSunFill />}
                        </div>
                        <div className={`toggle-icon flex justify-center items-center ${darkTheme && "toggle-icon-active"}`}>
                            {!darkTheme ? <BsFillMoonFill /> : <BsFillSunFill />}
                        </div>
                    </div> */}





            </div>
        </header>

    )
}

export default Header;