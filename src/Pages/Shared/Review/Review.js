import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Review = () => {
    const { reviews } = useContext(AuthContext);
    // const { name, userPhotoURL, review, date } = reviews;
    // console.log(reviews);

    return (
        <div className="text-start">
            {reviews.map((review) => (
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
            ))}
        </div>
    );
};

export default Review;
