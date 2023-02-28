import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthProvider/AuthProvider";
// import Review from "../Review";

const AddReview = ({ id, serviceName }) => {
    const { user, reviews, setReviews } = useContext(AuthContext);
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;
    // console.log(id);
    // console.log(user, date);

    const handleReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = user?.displayName;
        const userPhotoURL = user?.photoURL;
        const text = form.text.value;
        const date = currentDate;
        const email = user?.email || "unregistered";

        const order = {
            serviceId: id,
            serviceName: serviceName,
            name,
            userPhotoURL,
            text,
            date,
            email,
        };

        fetch("http://localhost:5000/services/reviews", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(order),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                const newReviews = [...reviews, data];
                setReviews(newReviews);
                if (data.acknowledged) {
                    toast.success("review placed successfully");
                    form.reset();
                }
            })
            .catch((err) => console.error(err));
    };
    return (
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
                                    name="text"
                                    placeholder="type your review"
                                    className="input input-bordered h-20"
                                    required
                                />
                            </div>
                            {/* <p className="text-red-500 py-0 text-md">{error}</p> */}
                            <div className="form-control mt-6">
                                <input className="btn btn-outline btn-primary bg-white" type="submit" value="review" />
                            </div>
                        </form>
                    </div>
                </>
            ) : (
                <></>
            )}
            <div className="text-start">
                {!user ? (
                    <Link to="/login">
                        <button className="text-base underline hover:text-blue-500">Please login to give review</button>
                    </Link>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};

export default AddReview;
