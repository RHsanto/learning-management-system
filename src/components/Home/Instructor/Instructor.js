import React from "react";
import "./Instructor.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import Slider from "react-slick";
import { useState } from "react";
import { useEffect } from "react";
const Instructor = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch("https://learning-management-server.onrender.com/all-instructor")
      .then(res => res.json())
      .then(data => setInstructors(data));
  }, []);
  var settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="instructor-section ">
      <div className="container ">
        <div>
          <div className="d-flex justify-content-between ">
            <div className="ins-title">
              <h1 className="fw-bold lg:mb-0 mb-5 pb-5">Our Expert Instructor</h1>
            </div>
          </div>
          <div className="my-5">
            <Slider {...settings}>
              {instructors.map(data => (
                <div key={data?._id} className="sliders ">
                  <div className="ex-card ">
                    <img src={data?.img} alt="img" />
                    <h5>{data?.name}</h5>
                    <p>{data?.designation}</p>
                    <div className="social-icon">
                      <li>
                        <FaFacebookF />
                      </li>
                      <li>
                        <FaTwitter />
                      </li>
                      <li>
                        <AiFillInstagram />
                      </li>
                      <li>
                        <BsYoutube />
                      </li>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
