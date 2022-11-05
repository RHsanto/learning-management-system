import React from "react";
import "./Categories.css";
import { FaPen } from "react-icons/fa";
import { AiOutlineAppstore } from "react-icons/ai";
import { FaMicrophoneAlt } from "react-icons/fa";
import { SiPaloaltosoftware } from "react-icons/si";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { BsHandbagFill } from "react-icons/bs";
import { TiCameraOutline } from "react-icons/ti";
import { MdQueueMusic } from "react-icons/md";

const Categories = () => {
  return (
    <div className="categories-section">
      <div className="container categories">
        <div className="row text-center mx-2 g-4">
          <h2 className=" fw-bold mb-5">Top Categories</h2>
          <div className="col-lg-3 col-md-6 col-12 category">
            <div className="d-flex ">
              <div className="c-icons">
                <FaPen />
              </div>
              <h5>Design Deve</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 category">
            <div className="d-flex">
              <div className="c-icons">
                {" "}
                <AiOutlineAppstore />
              </div>
              <h5>Development</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 category">
            <div className="d-flex">
              <div className="c-icons">
                {" "}
                <FaMicrophoneAlt />
              </div>
              <h5>Marketing</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 category">
            <div className="d-flex">
              <div className="c-icons">
                {" "}
                <SiPaloaltosoftware />
              </div>
              <h5>It & Software</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 category">
            <div className="d-flex">
              <div className="c-icons">
                {" "}
                <BsFillCameraVideoFill />
              </div>
              <h5>Videography</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 category">
            <div className="d-flex">
              <div className="c-icons">
                {" "}
                <BsHandbagFill />
              </div>
              <h5>Business Sys</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 category">
            <div className="d-flex">
              <div className="c-icons">
                <TiCameraOutline />
              </div>
              <h5>Photography</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 category">
            <div className="d-flex">
              <div className="c-icons">
                <MdQueueMusic />
              </div>
              <h5>Musical Intru</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
