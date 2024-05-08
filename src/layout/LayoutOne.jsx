import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import Nav from "../shared/Nav/Nav";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const LayoutOne = () => {
    return (
        <div>
            <Nav />
            <Outlet />
            <Footer />

            {/* Toast container */}
            <ToastContainer
                position="bottom-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default LayoutOne;