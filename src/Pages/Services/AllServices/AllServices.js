import React from "react";
import { useLoaderData } from "react-router-dom";
// import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import ServiceCard from "./ServiceCard";

const AllServices = () => {
    const services = useLoaderData();
    // console.log(services);
    return (
        <>
            <h1 className="text-3xl text-center font-bold m-4 text-indigo-700">All Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-5 gap-5 md:m-10">
                {services.map((service) => (
                    <ServiceCard key={service._id} service={service}></ServiceCard>
                ))}
            </div>
        </>
    );
};

export default AllServices;
