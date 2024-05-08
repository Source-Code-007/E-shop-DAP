import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer/Footer";

const LayoutOne = () => {
    return (
        <div>
            <h2>Navbar</h2>
            <Outlet />
            <Footer/>

        </div>
    );
};

export default LayoutOne;