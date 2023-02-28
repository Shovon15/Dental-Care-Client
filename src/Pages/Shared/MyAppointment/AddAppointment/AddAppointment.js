import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddAppointment = () => {
    const navigate = useNavigate();

    const handleAddAppointment = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const title = form.title.value;
        const logo = form.logo.value;
        const details = form.details.value;
        const price = form.price.value;
        // console.log(title, photoURL, details, price);
        const order = {
            // service: _id,
            name: name,
            title: title,
            logo: logo,
            details: details,
            price: price,
        };

        fetch("http://localhost:5000/services/Services", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(order),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success("appointment add successfully");
                    event.target.reset();
                    navigate("/myAppointment");
                }
            })
            .catch((err) => console.error(err));
    };
    return (
        <div className="hero w-2/3 hero-content mx-auto">
            <div className="card  w-full  shadow-2xl bg-base-100 py-10">
                <h1 className="text-5xl text-center font-bold text-indigo-600">Add An Appointment</h1>
                <form onSubmit={handleAddAppointment} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service name</span>
                        </label>
                        <input type="text" name="name" placeholder="title" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Detail about Service</span>
                        </label>
                        <textarea
                            type="text"
                            name="details"
                            placeholder="details about service"
                            className="input input-bordered h-32"
                            required
                        />
                    </div>

                    <div className="form-control mt-6">
                        <input
                            className="btn btn-primary mx-auto px-24"
                            type="submit"
                            value="Add To Appointment List"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddAppointment;
