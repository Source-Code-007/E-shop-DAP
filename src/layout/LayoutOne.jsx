import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import Nav from "../shared/Nav/Nav";

const LayoutOne = () => {
    return (
        <div>
            <Nav/>
            <Outlet />
            <Footer/>

        </div>
    );
};

export default LayoutOne;