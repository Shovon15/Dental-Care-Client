import React from "react";

const Blogs = () => {
    return (
        <div className="text-start">
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
            <div className="card w-auto bg-base-100 shadow-xl m-10">
                <div className="card-body">
                    <h2 className="card-title font-bold mx-auto ">What is a JWT and how does it work?</h2>
                    <p className="text-lg">
                        JSON Web Token is an open industry standard used to share information between two entities,
                        usually a client (like your app’s frontend) and a server (your app’s backend).
                    </p>
                    <p className="text-lg">
                        They contain JSON objects which have the information that needs to be shared. Each JWT is also
                        signed using cryptography (hashing) to ensure that the JSON contents (also known as JWT claims)
                        cannot be altered by the client or a malicious party.
                    </p>
                    <p className="text-lg">
                        Basically the identity provider(IdP) generates a JWT certifying user identity and Resource
                        server decodes and verifies the authenticity of the token using secret salt / public key.
                    </p>
                    <p className="text-lg">01. User sign-in using username and password or google/facebook.</p>
                    <p className="text-lg">
                        02.Authentication server verifies the credentials and issues a jwt signed using either a secret
                        salt or a private key.
                    </p>
                    <p className="text-lg">
                        03.User's Client uses the JWT to access protected resources by passing the JWT in HTTP
                        Authorization header.
                    </p>
                    <p className="text-lg">
                        04.Resource server then verifies the authenticity of the token using the secret salt/ public
                        key.
                    </p>
                </div>
            </div>
            <div className="card w-auto bg-base-100 shadow-xl m-10">
                <div className="card-body">
                    <h2 className="card-title font-bold mx-auto ">
                        What is the difference between javascript and NodeJS
                    </h2>
                    <p className="text-lg mb-2">
                        Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that
                        Javascript is the updated version of the ECMA script. Javascript is a high-level programming
                        language that uses the concept of Oops but it is based on prototype inheritance.{" "}
                    </p>
                    <p className="text-lg">
                        NodeJS is a cross-platform and open source Javascript runtime environment that allows the
                        javascript to be run on the server-side. Nodejs allows Javascript code to run outside the
                        browser. Nodejs comes with a lot of modules and mostly used in web development.
                    </p>
                </div>
            </div>
            <div className="card w-auto bg-base-100 shadow-xl m-10">
                <div className="card-body">
                    <h2 className="card-title font-bold mx-auto ">How NodeJS handle multiple client requests?</h2>
                    <p className="text-lg">
                        {" "}
                        NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with
                        the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop
                        that receives requests and processes them.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
