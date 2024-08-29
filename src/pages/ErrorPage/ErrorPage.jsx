// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <div>
                <img className="w-90 h-80 " src="https://i.ibb.co/j4JfZxw/error.gif" alt="" />
                <h2 className=" text-lg text-center font-semibold text-black ml-6 mb-5">Oops!!! Not found the page</h2>
                <div className="flex justify-center items-center">
                    <Link to="/"><button className="btn  bg-[#DD991B] text-white ">Go back to home</button></Link>
                    <Link to="/"><button className="btn  bg-gradient-to-r from-amber-300 to-amber-500  text-white w-full h-full  transition duration-300 ease-out border-2 ">Go  home</button></Link>
                    <button className="relative overflow-hidden text-white font-bold py-2 px-4 rounded transition duration-300">
                        <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500 to-red-500 transition-transform duration-500 hover:transform hover:translate-x-full"></span>
                        Hover Me
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;