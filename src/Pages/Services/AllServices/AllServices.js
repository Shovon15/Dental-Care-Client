import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const AllServices = () => {
    const services = useLoaderData();
    // const { logo, name, title, _id } = services;
    console.log(services);
    return (
        <>
            <h1>All Services</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-5 md:m-10">
                {services.map((service) => (
                    <div className="card w-96 border border-slate-400 shadow-xl m-5">
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
                            <Link to={`/service/${service._id}`}>
                                <button className="btn btn-primary">See Details</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default AllServices;
