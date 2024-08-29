import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
              <div>
            <nav className="flex justify-between items-center flex-col gap-3 md:flex-row py-5 px-10 text-base shadow-xl mx-auto ">
                <h2 className="text-4xl font-extrabold dark:text-white">Adven<span className="text-[#DD991B]">tour</span></h2>
                <ul className="flex gap-5 flex-col md:flex-row font-semibold text-xl dark:text-white">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#DD991B] " : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/rooms"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#DD991B] " : ""
                            }
                        >
                            Tourist Places
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/bookings"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#DD991B] " : ""
                            }
                        >
                            Places list
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/gallery"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#DD991B]" : ""
                            }
                        >
                            Add tourist place
                        </NavLink>
                    </li>
                </ul>
                <button className="btn border-[#DD991B] text-black bg-white w-18 border-2  rounded-full">Login</button>
                {/* <div className="">
                        <button>
                            <div className="w-10 rounded-full border-2 border-red-500">
                                <img src="" alt="" />
                            </div>
                        </button>
                    </div> */}
            </nav>
        </div>
        </div>
    );
};

export default Navbar;