// import Footer from "../components/Shared/Footer";
import Nav1 from "../components/Shared/Nav1";
import Navbar from "../components/Shared/Navbar";





const MainLayout = () => {
    return (
        <div className="max-w-full mx-auto ">
            {/* <h1 className="text-3xl text-red-700">This is layout</h1> */}
            <Nav1></Nav1>
            <Navbar></Navbar>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default MainLayout;