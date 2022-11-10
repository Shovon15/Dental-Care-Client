import React from "react";

const ReviewRow = ({ review }) => {
    console.log(review);
    const { _id, text, date, serviceName } = review;
    const handleDelete = () => {};
    const handleReviewUpdate = () => {};

    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-ghost">
                        X
                    </button>
                    <button onClick={() => handleReviewUpdate(_id)} className="btn btn-ghost">
                        X
                    </button>
                </label>
            </th>
            <td>
                <div className="font-bold">{serviceName}</div>
            </td>
            <td>
                <span className="flex flex-wrap">{text}</span>
            </td>
            <td>
                <span className="flex flex-wrap">{date}</span>
            </td>
        </tr>
    );
};

export default ReviewRow;
