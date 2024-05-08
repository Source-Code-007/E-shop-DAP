import { useEffect, useState } from "react";
import ActiveLink from "../../components/helpingCompo/ActiveLink"
import { Link } from "react-router-dom";
import logo from '/assets/img/logo.png'
import MyMotion from "../../components/helpingCompo/MyMotion";


const Nav = () => {
    const [isTop, setIsTop] = useState(true);


    // for conditionally set navbar bg
    useEffect(() => {
        const handleScroll = () => {
            const scrolledToTop = window.pageYOffset < 200;
            setIsTop(scrolledToTop);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const menu =
        <>

            <li><ActiveLink to={'/'}>Home</ActiveLink></li>
            <li><ActiveLink to={'/about-us'}>About us</ActiveLink></li>
            <li><ActiveLink to={'/trendy-products'}>Trendy Products</ActiveLink></li>
            <li><ActiveLink to={'/blogs'}>Blogs</ActiveLink></li>

        </>

    return (



        <nav className={`navbar px-8 bg-slate-900 transition duration-500 shadow ${isTop ? 'bg-opacity-25' : 'bg-opacity-90'} fixed z-50`}>
            <div className="navbar-start w-fit md:w-3/6">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden !text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-slate-800 bg-opacity-95 mt-3 p-2 shadow space-y-5 rounded-box w-52">
                        {menu}
                    </ul>
                </div>

                <MyMotion x={-10}>

                    <Link to={'/'} className="text-2xl font-bold cursor-pointer text-white items-center gap-2 hidden md:flex"><img className="w-12 h-12 rounded-full" src={logo} alt="E-shop" /> E-shop</Link>
                </MyMotion>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menu}
                </ul>
            </div>
            <div className="navbar-end w-full md:w-3/6">
                <MyMotion x={10}>
                    <Link to={'/signin'}>
                    <button className="cmn-btn-two">Signin</button>
                    </Link>
                </MyMotion>
            </div>
        </nav>
    );
};

export default Nav;