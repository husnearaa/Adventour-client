import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook, FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";


const Footer = () => {
    return (
        <div>
            <footer className="px-4 divide-y bg-[#2D373C]">
                <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                    <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-full sm:grid-cols-4 mx-auto">
                        <div className="space-y-3  text-white">
                            <h1 className="self-center text-3xl font-bold text-white">Aven<span className="text-[#DD991B]">tour</span></h1>
                        </div>
                        <div className="space-y-3  text-white">
                            <h3 className="tracki uppercase  text-white">Services</h3>
                            <ul className="space-y-1">
                                <li>
                                    <a rel="noopener noreferrer" href="#">Features</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Integrations</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Pricing</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">FAQ</a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3  text-white">
                            <h3 className=" uppercase  text-white">Company Address</h3>
                            <ul className="space-y-1">
                                <li>
                                    <p className="flex items-center gap-1">
                                        <FaLocationDot className="text-lg" />
                                        Dhaka, Bangladesh
                                    </p>
                                </li> 
                                <li>
                                    <p className="flex items-center gap-1">
                                    <IoCall className="text-xl" />
                                        09925165242
                                    </p>
                                </li> 
                                <li>
                                    <p className="flex items-center gap-1">
                                    <IoMdMail className="text-xl" />
                                    adventour@business.com
                                    </p>
                                </li> 
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <div className="uppercase  text-white">Social media</div>
                            <div className="flex justify-start text-white">
                                <a rel="noopener noreferrer" href="#" title="Facebook" className="flex items-center p-1">
                                    <FaFacebook className="text-xl" />
                                </a>
                                <a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center p-1">
                                    <AiFillTwitterCircle className="text-2xl" />
                                </a>
                                <a rel="noopener noreferrer" href="#" title="Instagram" className="flex items-center p-1">
                                    <RiInstagramFill className="text-2xl" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-6 text-sm text-center  text-white">Copyright © 2024 - All right reserved by Adventour</div>
            </footer>
        </div>
    );
};

export default Footer;