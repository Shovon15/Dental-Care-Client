import React from "react";
import { FaPlus } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import img from "../../../assets/images/banner.jpg";
import Services from "../../Services/Services";
import DoctorLab from "../DoctorLab/DoctorLab";
import DoctorSchedule from "../DoctorSchedule/DoctorSchedule";
// import Locations from "../Locations/Locations";

const Home = () => {
    const services = useLoaderData();
    // console.log(services);
    return (
        <div className="min-h-screen">
            <div className="relative m-5 md:m-10 ">
                <div>
                    <img src={img} alt="banner" className="w-full rounded-lg"></img>
                </div>
                <div className="absolute right-12  md:right-44 top-1/4 md:top-1/4 font-bold text-white text-base md:text-5xl">
                    <h5 className="text-2xl hidden md:block">Dental Care</h5>
                    <h1 className="py-1 md:py-4">MR. John Doe</h1>
                    <h1 className="text-base md:text-3xl">Doctor of Dental Surgery</h1>
                    <Link to="/allServices">
                        <button className="btn btn-outline btn-primary bg-white md:m-3 px-3 md:px-7">
                            OUR SERVICES
                        </button>
                    </Link>
                </div>
            </div>
            <div id="services">
                <h1 className="text-3xl text-center font-bold m-4">OUR SERVICES</h1>
                <Link to="/addService">
                    <button className="btn btn-outline btn-primary bg-white m-3 px-7 ">
                        Add Services <FaPlus className="pl-2 w-6" />
                    </button>
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
            {/* <Locations /> */}
            <DoctorSchedule />
            <DoctorLab />
        </div>
    );
};

export default Home;
