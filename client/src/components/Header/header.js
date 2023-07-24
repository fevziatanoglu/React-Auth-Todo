import { useUser } from "../../contexts/userContext";
import { BiLogIn} from "react-icons/bi"
import "./header.css"
function Header() {
    const { user, logoutUser } = useUser();
    return (


        (<header className="w-full mx-auto p-2 fixed top-0 z-10  bg-white">
            {/* navbar container */}
            <div className="flex justify-between items-center w-full b">





                {/* icon container*/}
                <div>
                    <a href="#home"><h1 className="text-3xl font-bold ">REACT TODO</h1></a>
                </div>

                { user ? <div><button className="">Login</button></div> : <button type="button" class="text-white bg-green-700 hover:opacity-50 focus:outline-none focus:ring-4  font-bold rounded-full  px-5 py-2.5 text-center mr-2 mb-2  flex flex-row items-center gap-4">Login <BiLogIn size={25}/> </button>
}





                {/*dropdown menu button */}
                {/* <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="md:hidden">
                    {!isDropdownOpen ? <AiOutlineMenu size={25} /> : <AiOutlineClose size={25} />}
                </button> */}

                {/* dropdown menu */}
                {/* {isDropdownOpen && <div className="dropdown absolute top-14 right-5 rounded-lg flex flex-col p-5 justify-center items-center gap-5 shadow-xl"> */}

                    {/* link */}
                    {/* {NavbarItems.map((item, index) => {
                        return <a href={item.page} key={index}>{item.label}</a>
                    })} */}

                    

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
                


                {/* links container */}
                <div className="hidden md:flex   items-center  space-x-10  ">


              


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


            {/* </div> */}
        </header>
        )
    )
}

export default Header;