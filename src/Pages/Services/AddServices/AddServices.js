import React from "react";
import toast from "react-hot-toast";

const AddServices = () => {
    const handleAddServices = (event) => {
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

        fetch("http://localhost:5000/Services", {
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
                    toast.success("Order placed successfully");
                    event.target.reset();
                }
            })
            .catch((err) => console.error(err));
    };
    return (
        <div className="hero w-2/3 hero-content mx-auto">
            <div className="card  w-full  shadow-2xl bg-base-100 py-10">
                <h1 className="text-5xl text-center font-bold text-orange-600">Add Services</h1>
                <form onSubmit={handleAddServices} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service name</span>
                        </label>
                        <input type="text" name="name" placeholder="title" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service Title</span>
                        </label>
                        <input type="text" name="title" placeholder="title" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service PhotoURL</span>
                        </label>
                        <input
                            type="text"
                            name="logo"
                            placeholder="photoURL"
                            className="input input-bordered"
                            required
                        />
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
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service Price</span>
                        </label>
                        <input
                            type="number"
                            name="price"
                            placeholder="Service price"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    {/* <p className="text-red-500 py-0 text-md">{error}</p> */}
                    <div className="form-control mt-6">
                        <input className="btn btn-primary mx-auto px-24" type="submit" value="Add To Service List" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddServices;
