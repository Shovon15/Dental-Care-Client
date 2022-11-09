import React, { useContext } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import "react-photo-view/dist/react-photo-view.css";

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
            <div className=" my-5 lg:my-10">
                {user?.uid ? (
                    <>
                        <div className=" flex space-x-3">
                            <img src={user?.photoURL} alt="photoURL" className="w-20 h-20 rounded-full" />
                            <p className="flex justify-center items-center font-bold">{user?.displayName}</p>
                        </div>
                        <div className="w-80">
                            <form onSubmit={handleReview} className="card-body">
                                <div className="form-control">
                                    <textarea
                                        type="text"
                                        name="review"
                                        placeholder="type your review"
                                        className="input input-bordered h-20"
                                        required
                                    />
                                </div>
                                {/* <p className="text-red-500 py-0 text-md">{error}</p> */}
                                <div className="form-control mt-6">
                                    <input
                                        className="btn btn-outline btn-primary bg-white"
                                        type="submit"
                                        value="review"
                                    />
                                </div>
                            </form>
                        </div>
                    </>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};

export default ServiceDetails;
