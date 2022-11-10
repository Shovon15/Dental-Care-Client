// import React, { useContext } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link, useLoaderData } from "react-router-dom";
// import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import "react-photo-view/dist/react-photo-view.css";
import AddReview from "../Shared/Review/AddReview/AddReview";
import { useContext, useEffect, useState } from "react";
import Review from "../Shared/Review/Review";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
// import Review from "../Shared/Review/Review";

const ServiceDetails = () => {
    const service = useLoaderData();
    // const { user } = useContext(AuthContext);
    // console.log(service);
    const { logo, name, details, title, price, _id } = service;
    const { reviews } = useContext(AuthContext);

    console.log(reviews);

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
            {/* {reviews.map((review) => (
                <div key={review._id}>
                    <div className="mx-5 md:mx-10">
                        <div className=" flex space-x-3">
                            <img src={review?.userPhotoURL} alt="photoURL" className="w-10 h-10 rounded-full" />
                            <p className="flex justify-center items-center font-bold">{review?.name}</p>
                        </div>
                        <div className="w-full md:w-1/3 mx-5 md:mx-10 font-semibold">
                            <p>{review?.text}</p>
                            <h1 className="text-end ">{review?.date}</h1>
                        </div>
                    </div>
                </div>
            ))} */}
            <Review />
            <AddReview key={_id} id={_id} />
        </div>
    );
};

export default ServiceDetails;
