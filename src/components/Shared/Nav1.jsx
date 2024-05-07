import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook, FaLocationDot, FaYoutube } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";



const Nav1 = () => {
    return (
        <div>
              <div className="bg-[#2D373C] py-3">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="hidden md:flex">
                            <div className="flex gap-5">
                                <p className="flex items-center text-white gap-1">
                                <FaLocationDot className="text-lg" />
                                    <span>Dhaka, Bangladesh</span>
                                </p>
                                <p className="flex items-center text-white gap-1">
                                <IoCall className="text-xl" />
                                    <span>09925165242</span>
                                </p>
                                <p className="flex items-center text-white gap-1">
                                <IoMdMail className="text-xl" />
                                    <span>adventour@business.com</span>
                                </p>
                            </div>
                        </div>
                        <div className="lg:hidden md:hidden">
                            <div className="bg-[#DD991B] py-1 md:py-2 mx-10">
                                <h2 className="text-white text-lg lg:text-2xl text-center"> special offer</h2>
                            </div>
                        </div>
                        <div className="hidden md:flex text-white">
                            <div className="grid grid-flow-col gap-4 items-center justify-end ml-auto">
                                <a href="https://twitter.com"><AiFillTwitterCircle className="text-2xl" /></a>
                                <a href="https://www.facebook.com"><FaFacebook className="text-xl" /></a>
                                <a href="https://www.instagram.com"><RiInstagramFill className="text-2xl" /></a>
                                <a href="https://www.youtube.com"><FaYoutube  className="text-2xl"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav1;