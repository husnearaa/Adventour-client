import Home from "../pages/Home/Home";


const MainLayout = () => {
    return (
        <div className="max-w-[1300px] mx-auto ">
            <h1 className="text-3xl text-red-700">This is layout</h1>
            <Home></Home>
        </div>
    );
};

export default MainLayout;