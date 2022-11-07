import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-slate-300 text-base-content rounded">
            <div className="grid grid-flow-col gap-4">
                <Link to="/about" className="link link-hover">
                    About us
                </Link>
                <Link to="/blog" className="link link-hover">
                    Blogs
                </Link>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4 text-2xl">
                    <Link to="/">
                        <FaFacebookF />
                    </Link>
                    <Link to="/">
                        <FaYoutube />
                    </Link>
                    <Link to="/">
                        <FaTwitter />
                    </Link>
                </div>
            </div>
            <div>
                <p>Copyright © 2022 - All right reserved by Dental care</p>
            </div>
        </footer>
    );
};

export default Footer;
