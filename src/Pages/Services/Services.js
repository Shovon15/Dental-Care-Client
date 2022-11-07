import React from "react";

const Services = () => {
    return (
        <div className="m-5 md:m-10">
            <div className="card w-96 border border-slate-400 shadow-xl">
                <figure>
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
                </figure>
                <div className="card-body  rounded-xl">
                    <h2 className="card-title">title</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, dolores?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline btn-primary bg-white px-10">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
