import React from "react";
import { Link } from "react-router-dom";
import img from "../../../assets/images/banner.jpg";
import Services from "../../Services/Services";

const Home = () => {
    return (
        <div className="min-h-screen">
            <div className="relative m-5 md:m-10 ">
                <div>
                    <img src={img} alt="banner" className="w-full rounded-lg"></img>
                </div>
                <div className="absolute right-24  md:right-44 top-1/4 md:top-1/4 font-bold text-white text-2xl md:text-5xl">
                    <h1>Dental Care</h1>
                    <h1>MR. John Joe</h1>
                    <h1 className="text-3xl">Doctor of Dental Surgery</h1>
                    <Link to="/">
                        <button className="btn btn-outline btn-primary bg-white m-3 px-7">OUR SERVICES</button>
                    </Link>
                </div>
            </div>
            <div>
                <h1 className="text-3xl text-center font-bold m-4">OUR SERVICES</h1>
                <Services />
                <button className="btn btn-outline btn-primary bg-white m-3 px-10">SEE ALL</button>
            </div>
        </div>
    );
};

export default Home;
