import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" dropdown-content mt-3 z-[1] p-5 shadow bg-base-100 rounded-box w-52">
                            <li className="mb-1 font-bold">
                                <NavLink to='/' className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "underline text-red-500 font-bold" : ""
                                }>Home</NavLink>
                            </li>
                            <li className="mb-1 font-bold">
                                <NavLink to='/allClasses' className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "underline text-red-500 font-bold" : ""
                                }>All Class</NavLink>
                            </li>
                            <li className="mb-1 font-bold">
                                <NavLink to='/aboutUs' className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "underline text-red-500 font-bold" : ""
                                }>About Us</NavLink>
                            </li>
                            <li className="mb-1 font-bold">
                                <NavLink to='/contactUs' className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "underline text-red-500 font-bold" : ""
                                }>Contact Us</NavLink>
                            </li>
                            <li className="mb-1 font-bold">
                                <NavLink to='/login' className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "underline text-red-500 font-bold" : ""
                                }>Login</NavLink>
                            </li>
                        </ul>
                    </div>
                    <a className="font-bold text-2xl">Music School</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="flex gap-8 px-1 font-bold text-xl">
                        <li>
                            <NavLink to='/' className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "underline text-red-500 font-bold" : ""
                            }>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/allClasses' className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "underline text-red-500 font-bold" : ""
                            }>All Class</NavLink>
                        </li>
                        <li>
                            <NavLink to='/aboutUs' className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "underline text-red-500 font-bold" : ""
                            }>About Us</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contactUs' className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "underline text-red-500 font-bold" : ""
                            }>Contact Us</NavLink>
                        </li>
                        <li>
                            <NavLink to='/login' className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "underline text-red-500 font-bold" : ""
                            }>Login</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;