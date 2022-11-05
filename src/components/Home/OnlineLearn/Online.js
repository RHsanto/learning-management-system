import React from "react";
import "./Online.css";
import { AiOutlineCheck } from "react-icons/ai";
import { BsCameraVideo } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { BiDotsHorizontalRounded, BiVolumeMute } from "react-icons/bi";
import tara from "../../../image/tara-removebg-preview.png";
import { Link } from "react-router-dom";
const Online = () => {
  return (
    <div className="online-section">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-lg-6 online">
            <img
              src="https://images.unsplash.com/photo-1573164713350-b14a82d3c15b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHdvbWVuJTIwdGVhY2hlcnxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div className="experience shadow">
              <div className="icon">23+</div>{" "}
              <small>
                <b>years Experience</b>
              </small>
            </div>
            <div className="secure shadow">
              <div className="icon">
                <AiOutlineCheck />
              </div>
              <small>
                <b>Fully Safe & Secure</b>
              </small>
            </div>
            <div className="over-icons d-flex">
              <li>
                <BiVolumeMute />
              </li>
              <li>
                <FiPhone />
              </li>
              <li>
                <BsCameraVideo />
              </li>
              <li>
                <BiDotsHorizontalRounded />
              </li>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="online-info">
              <div className="tara">
                <img src={tara} alt="" />
              </div>
              <p className="sub-title">
                <b>Why Chose Us</b>
              </p>
              <h2 className="fw-bold">
                Why You Choose Our <br /> Online Learning
              </h2>
              <p className="my-4">
                Dramatically supply transparent deliverables before & can <br /> backward comp
                internet or "organic" sources.
              </p>
              <div className="mb-5 check">
                <li>
                  {" "}
                  <span className="marks">
                    {" "}
                    <AiOutlineCheck />{" "}
                  </span>{" "}
                  Increasing Your Learning Skills
                </li>
                <li>
                  {" "}
                  <span className="marks">
                    {" "}
                    <AiOutlineCheck />{" "}
                  </span>{" "}
                  High Quality video & Audio Classes
                </li>
                <li>
                  {" "}
                  <span className="marks">
                    {" "}
                    <AiOutlineCheck />{" "}
                  </span>{" "}
                  Finfish Your Courses, Get Certificate
                </li>
              </div>
              <button className="global-btn">
                <Link to="/online-course">More Details</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Online;
