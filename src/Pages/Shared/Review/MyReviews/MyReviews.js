import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../contexts/AuthProvider/AuthProvider";
import ReviewRow from "./ReviewRow";

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    // console.log(user);

    useEffect(() => {
        fetch(`http://localhost:5000/myReviews?email=${user?.email}`)
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, [user?.email]);

    // console.log(reviews);
    let reviewCount = "";
    if (reviews.length === 0) {
        reviewCount = "you have no review yet";
    } else {
        reviewCount = `you have ${reviews.length} reviews`;
    }

    return (
        <div>
            <h2 className="text-3xl text-start my-5 font-bold mx-10">{reviewCount}</h2>
            <div className="overflow-x-auto w-full min-h-screen">
                <table className="table w-full  ">
                    <thead>
                        <tr>
                            <th>Action</th>
                            <th>Service Name</th>
                            <th>review message</th>
                            <th>date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reviews.map((review) => (
                            <ReviewRow
                                key={review._id}
                                review={review}
                                // handleDelete={handleDelete}
                                // handleStatusUpdate={handleStatusUpdate}
                            ></ReviewRow>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReviews;
