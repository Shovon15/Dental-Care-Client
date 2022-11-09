import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import img from "../../../assets/images/banner.jpg";
import Services from "../../Services/Services";
import Locations from "../Locations/Locations";

const Home = () => {
    const services = useLoaderData();
    // console.log(services);
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
                    <Link to="/allServices">
                        <button className="btn btn-outline btn-primary bg-white m-3 px-7">OUR SERVICES</button>
                    </Link>
                </div>
            </div>
            <div id="services">
                <h1 className="text-3xl text-center font-bold m-4">OUR SERVICES</h1>
                <Link to="/addService">
                    <button className="btn btn-outline btn-primary bg-white m-3 px-7 ">Add Services</button>
                </Link>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                    {services.map((service) => (
                        <Services key={service._id} service={service}></Services>
                    ))}
                </div>

                <Link to="/allServices">
                    <button className="btn btn-outline btn-primary bg-white m-3 px-10">SEE ALL Services</button>
                </Link>
            </div>
            <Locations />
        </div>
    );
};

export default Home;
