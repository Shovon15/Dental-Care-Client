import React from "react";
import img from "../../../assets/images/doctorTime-img.jpg";

const DoctorSchedule = () => {
    return (
        <div className="flex flex-col lg:flex-row m-5 md:m-10 bg-slate-200 rounded-xl">
            <div className="lg:w-3/6">
                <img src={img} alt="banner" className="w-full h-80 rounded-lg"></img>
            </div>
            <div className="p-10 lg:flex w-full items-center">
                <div className="w-full lg:w-1/2">
                    <h5 className="text-3xl font-bold ">Doctor John Doe</h5>
                    <h1 className="text-base pb-5">Doctor of Dental Surgery</h1>
                </div>
                <div className="w-full lg:w-1/2">
                    <h1 className="text-xl pb-5 font-bold">Doctor's Schedule</h1>
                    <h1 className="py-1 ">
                        <span className="font-bold">Sunday</span> - 4.00 PM - 10.00 PM{" "}
                    </h1>
                    <h1 className="py-1 ">
                        <span className="font-bold">Tuesday</span> - 4.00 PM - 10.00 PM{" "}
                    </h1>
                    <h1 className="py-1 ">
                        <span className="font-bold">Wednesday</span> - 4.00 PM - 10.00 PM{" "}
                    </h1>
                    <h1 className="py-1 ">
                        <span className="font-bold">Friday</span> - 3.00 PM - 10.00 PM{" "}
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default DoctorSchedule;
