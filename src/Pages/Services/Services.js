// import React, { useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";

const Services = ({ service }) => {
    // console.log(service);
    let { _id, name, logo, title, price } = service;

    if (title.length > 120) {
        title = title.slice(0, 120) + "...";
    }

    return (
        <div className="m-5 md:m-10">
            <div className="card w-full border border-slate-400 shadow-xl">
                <PhotoProvider>
                    <PhotoView src={logo}>
                        <img src={logo} alt="img" className="cursor-pointer" />
                    </PhotoView>
                </PhotoProvider>
                <div className="card-body  rounded-xl">
                    <h2 className="card-title font-bold">{name}</h2>
                    <p>{title}</p>
                    <div className="flex">
                        <p className="text-start my-auto text-indigo-800 font-bold text-2xl">{price} $</p>
                        <Link to={`/service/${_id}`}>
                            <button className="btn btn-outline btn-primary bg-white  px-10">See Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
