import React, { useContext } from "react";
import toast from "react-hot-toast";
import { FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Header = () => {
    const { user, logout } = useContext(AuthContext);

    const handleLogOut = () => {
        logout()
            .then(() => {})
            .catch((error) => console.error(error));
        toast.success("logout");
    };

    const menuItems = (
        <>
            <Link to="/" className=" btn btn-ghost font-bold">
                Home
            </Link>

            <Link to="/blog" className=" btn btn-ghost font-bold">
                Blogs
            </Link>
            {user?.uid ? (
                <></>
            ) : (
                <>
                    <Link to="/login" className="btn btn-ghost md:mx-2 font-bold md:hidden">
                        Log in
                    </Link>
                    <Link to="/signUp" className="btn btn-ghost font-bold md:hidden">
                        Sign Up
                    </Link>
                </>
            )}
        </>
    );

    return (
        <div className="navbar bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block w-5 h-5 stroke-current"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    Dental Care
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">{menuItems}</ul>
            </div>
            <div className="navbar-end">
                {user?.uid ? (
                    <div className="flex items-center mx-4">
                        <Link to="/">
                            <div className="tooltip tooltip-left" data-tip={user?.displayName}>
                                {user?.photoURL ? (
                                    <img
                                        src={user.photoURL}
                                        alt="img"
                                        className="w-10 h-10 rounded-full border border-white"
                                    ></img>
                                ) : (
                                    <FaUser />
                                )}
                            </div>
                        </Link>

                        <button onClick={handleLogOut} className="btn btn-outline btn-primary bg-slate-400 m-2">
                            <FaSignOutAlt className=" text-white w-4 h-4 md:w-5 md:h-5" />
                        </button>
                    </div>
                ) : (
                    <div className="md:mx-5 hidden md:block">
                        <Link to="/login" className="btn  md:mx-2">
                            Log in
                        </Link>
                        <Link to="/signUp" className="btn">
                            Sign Up
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
