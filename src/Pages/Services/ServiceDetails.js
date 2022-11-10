// import React, { useContext } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link, useLoaderData } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import AddReview from "../Shared/Review/AddReview/AddReview";
import Review from "../Shared/Review/Review";

const ServiceDetails = () => {
    const service = useLoaderData();
    const { logo, name, details, title, price, _id } = service;

    return (
        <div className="min-h-screen m-5 md:mx-20 md:my-10 rounded-xl">
            <div className=" w-full bg-slate-100 border border-slate-400 rounded-xl flex flex-col lg:flex-row">
                <figure className="m-5 lg:w-3/12">
                    <PhotoProvider>
                        <PhotoView src={logo}>
                            <img src={logo} alt="logo" className="rounded-xl lg:w-72 cursor-pointer" />
                        </PhotoView>
                    </PhotoProvider>
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

            <Review />
            <AddReview key={_id} id={_id} serviceName={name} />
        </div>
    );
};

export default ServiceDetails;
