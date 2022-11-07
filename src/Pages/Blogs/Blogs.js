import React from "react";

const Blogs = () => {
    return (
        <div>
            <div className="card w-auto bg-base-100 shadow-xl m-10">
                <div className="card-body">
                    <h2 className="card-title font-bold mx-auto ">Difference between SQL and NoSQL</h2>
                    <p className="text-lg">
                        When it comes to choosing a database the biggest decisions is picking a relational (SQL) or
                        non-relational (NoSQL) data structure. While both the databases are viable options still there
                        are certain key differences between the two that users must keep in mind when making a decision.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
