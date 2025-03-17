import { Outlet, Link } from "react-router-dom";

const HomeLayout = () => {
    return (
        <>
            <nav>
                <h1 className="text-4xl text-primary">Comfy</h1>
            </nav>
            <Outlet />
        </>
    );
};

export default HomeLayout;
