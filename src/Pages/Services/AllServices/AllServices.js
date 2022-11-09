import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const AllServices = () => {
    const services = useLoaderData();
    // console.log(services);
    return (
        <>
            <h1 className="text-3xl text-center font-bold m-4 text-indigo-700">All Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-5 gap-5 md:m-10">
                {services.map((service) => (
                    <div className="card w-full border border-slate-400 shadow-xl m-">
                        <figure>
                            <PhotoProvider>
                                <PhotoView src={service.logo}>
                                    <img src={service.logo} alt="img" className="cursor-pointer" />
                                </PhotoView>
                            </PhotoProvider>
                        </figure>
                        <div className="card-body  rounded-xl">
                            <h2 className="card-title">{service.name}</h2>
                            <p>{service.title}</p>
                            <div className="flex">
                                <p className="text-start my-auto text-indigo-800 font-bold text-2xl">
                                    {service.price} $
                                </p>
                                <Link to={`/service/${service._id}`}>
                                    <button className="btn btn-outline btn-primary bg-white  px-10">See Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default AllServices;
