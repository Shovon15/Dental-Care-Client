import React from "react";
import img01 from "../../../assets/images/lab-01.jpg";
import img02 from "../../../assets/images/lab-02.jpg";
import img03 from "../../../assets/images/lab-03.jpg";
import img04 from "../../../assets/images/lab-04.jpg";

const DoctorLab = () => {
    return (
        <div className="mx-5 lg:mx-10  py-5">
            <h1 className="text-3xl text-center font-bold m-4"> Doctor's Lab</h1>
            <div className="carousel w-auto  rounded-xl">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img01} className="w-full h-auto" alt="" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide2" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img02} className="w-full" alt="" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide3" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img03} className="w-full" alt="banner" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide4" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img04} className="w-full" alt="banner" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide1" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorLab;
