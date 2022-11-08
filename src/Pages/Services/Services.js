import React from "react";
import { Link } from "react-router-dom";

const Services = ({ service }) => {
    // console.log(service);
    const { _id, name, details, logo, title } = service;
    // console.log(title);

    return (
        <div className="m-5 md:m-10">
            <div className="card w-96 border border-slate-400 shadow-xl">
                <figure>
                    <img src={logo} alt="Shoes" />
                </figure>
                <div className="card-body  rounded-xl">
                    <h2 className="card-title">{name}</h2>
                    <p>{title}</p>
                    <Link to={`/service/${_id}`}>
                        <button className="btn btn-primary">See Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Services;
