import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const ServiceDetails = () => {
    const service = useLoaderData();
    const { user } = useContext(AuthContext);
    console.log(service);
    const { logo, name, details, title, price } = service;

    const handleReview = () => {};
    return (
        <div className="min-h-screen m-5 md:mx-20 md:my-10 rounded-xl">
            <div className=" w-full bg-slate-100 border border-slate-400 rounded-xl flex flex-col lg:flex-row">
                <figure className="m-5 lg:w-3/12">
                    <img src={logo} alt="logo" className="rounded-xl lg:w-72" />
                </figure>
                <div className="my-auto lg:w-7/12 text-start p-4">
                    <h2 className="font-bold text-3xl pb-3">{name}</h2>
                    <h2 className="font-bold text-sm">{title}</h2>
                    <h2 className="font-bold text-2xl pt-3">{price} $</h2>
                </div>
                <Link to="/" className="lg:w-2/12 m-auto">
                    <button className="btn btn-primary font-bold mx-5 mb-8 lg:mb-0">Get an Appointment</button>
                </Link>
            </div>
            <div>
                <p className="bg-white h-auto m-5 text-xl rounded py-10">{details}</p>
            </div>
            {/* <div className="flex justify-between mx-10">
                <div className="">
                    <div className="font-bold text-center flex space-x-4 flex-row items-center text-2xl m-5">
                        <div>rating.number</div>
                        <FaStar />
                    </div>
                </div>
                <div>
                    <button className="btn btn-primary my-4 w-44">Get PDF</button>
                </div>
                <div className="font-bold text-center flex flex-col items-center text-2xl m-5">
                    <FaEye />
                    total_view
                </div>
            </div> */}
        </div>
    );
};

export default ServiceDetails;
