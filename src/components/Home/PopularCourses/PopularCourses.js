/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./PopularCourses.css";
import { IoIosArrowDown } from "react-icons/io";
import { RiPlayCircleLine } from "react-icons/ri";
import { TiUser } from "react-icons/ti";
import { BsStarHalf } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const PopularCourses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("https://learning-management-server.onrender.com/all-popCourses")
      .then(res => res.json())
      .then(data => setCourses(data));
  }, []);
  return (
    <div className="popular-courses ">
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-between">
            <div className="title">
              <h2 className="fw-bold">Explore Popular Courses</h2>
            </div>
            <div className="drop">
              <b>Sort by</b>
              <div className="dropdown ">
                <button className="dropbtn">
                  All category <IoIosArrowDown />
                </button>
                <div className="dropdown-content">
                  <a href="#">Design</a>
                  <a href="#">Development</a>
                  <a href="#">Video graphy</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-4 ">
            {courses.map(data => (
              <div className="col" key={data?._id}>
                <div className="card p-card shadow">
                  <img src={data?.img} alt="..." />
                  <div className="love">
                    <FaRegHeart />
                  </div>
                  <div className="card-body">
                    {/* here title & user */}
                    <div className="d-flex align-items-center gap-2 ">
                      <div className="man">
                        <img src={data?.userImg} alt="" />
                      </div>
                      <Link to={`/popular-courses/${data?._id}`}>
                        <h6 className="card-title fw-bold text-dark pop-title">{data?.title}</h6>
                      </Link>
                    </div>
                  </div>
                  {/* here count info */}
                  <div className="p-count d-flex  justify-content-between">
                    <div className="class d-flex gap-1">
                      <div className="icon">
                        <RiPlayCircleLine />
                      </div>
                      <p>{data?.class} Classes</p>
                    </div>
                    <div className="students d-flex gap-1">
                      <div className="icon">
                        <TiUser />
                      </div>
                      <p>{data?.students} Students</p>
                    </div>
                    <div className="ratings d-flex gap-1">
                      <div className="icon">
                        <BsStarHalf />
                      </div>
                      <p>{data?.ratings} </p>
                    </div>
                  </div>
                  {/* here all button */}

                  <div className=" d-flex px-4 py-3 justify-content-between">
                    <div className="p-button d-flex gap-2">
                      <button>Design</button>
                      <button>Development</button>
                    </div>
                    <div className="dolar">
                      <b> ${data?.price}</b>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <button className="all-courses  mx-auto">
              <Link to="/popular-course">Browse All Courses</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;
