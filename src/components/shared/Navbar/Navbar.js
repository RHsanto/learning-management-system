/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Navbar.css";
import { IoIosArrowDown } from "react-icons/io";
import { FiSearch, FiLogOut } from "react-icons/fi";
import { TiUserOutline } from "react-icons/ti";
import { RiShoppingBagLine } from "react-icons/ri";
import { HiMenuAlt1 } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";

import { Link } from "react-router-dom";
import useFirebase from "../../../hooks/useFirebase";

const Navbar = () => {
  const { signInUsingGoogle, user, logOut } = useFirebase();

  const google = e => {
    signInUsingGoogle();
  };
  return (
    <div className="navbars py-2">
      <div className="container text-light px-0">
        <div className="d-none d-lg-block">
          <div className=" d-flex justify-content-between align-items-center py-3">
            <div>
              <h3>
                <Link className="text" to="/">Bright Zone</Link>
              </h3>
            </div>
            <div
              className="dropdownMenu d-flex
           justify-content-center align-items-center gap-4"
            >
              <div className="dropdown">
                <div>
                 
                  <Link className="text" to="/"> Home </Link>
                </div>
              </div>
              <div className="dropdown">
                <button className="dropBtn">
                  Pages <IoIosArrowDown />
                </button>
                <div className="dropdown-content">
                  <Link to="/reviews">Reviews Page</Link>
                  <Link to="/about">About Page</Link>
                  <Link to="/suti-course">Suitable Course</Link>
                </div>
              </div>
              <div className="dropdown">
                <button className="dropBtn">
                  Instructor <IoIosArrowDown />
                </button>
                <div className="dropdown-content">
                  <Link to="/instructor">Expert Instructor</Link>
                </div>
              </div>
              <div className="dropdown">
                <button className="dropBtn">
                  Courses <IoIosArrowDown />
                </button>
                <div className="dropdown-content">
                  <Link to="/popular-course">Popular Courses</Link>
                  <Link to="/online-course">Online Courses</Link>
                </div>
              </div>
              <div className="dropdown">
                <button className="dropBtn">
                  Blog <IoIosArrowDown />
                </button>
                <div className="dropdown-content">
                  <Link to="/news-blogs">Recent Blogs</Link>
                </div>
              </div>

              <div className="search">
                <FiSearch className="search-icon" />
                <input type="search" name="" id="" placeholder="Search Courses" />
              </div>

              <div>
                {/* add authentication */}

                {user?.email ? (
                  <>
                    <div class="dropdown">
                      <button
                        class=" dropdown-toggle user-name"
                        type="button"
                        id="dropdownMenu2"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span className="">{user?.displayName} </span>
                      </button>
                      <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                        {user?.photoURL ? (
                          <img className="UserImg" src={user?.photoURL} alt="img" />
                        ) : (
                          <>
                            {" "}
                            <TiUserOutline className="User" />{" "}
                          </>
                        )}
                        <button class="dash-btn dropdown-item mt-1">Dashboard</button>
                        <button className=" text-danger dropdown-item" onClick={logOut}>
                          Log-out
                          <FiLogOut className="ms-2" />
                        </button>
                      </ul>
                    </div>

                    {/* {user.emailVerified? <></>:
            <span className='user-name'>{user.email} </span>} */}
                  </>
                ) : (
                  <>
                    <button onClick={google} className="sign-btn">
                      {" "}
                      Sign-in
                      <TiUserOutline className="User" />
                    </button>
                  </>
                )}
              </div>
              {/* cart section */}
              <div>
                <RiShoppingBagLine className="cart" />
              </div>
            </div>
          </div>
        </div>

        {/* mobile device menu */}
        <div className="d-block d-lg-none fixed-top">
          <div
            className="d-flex justify-content-between align-items-center
        py-2 bg-light text-dark px-4"
          >
            <a
              className="text-dark"
              data-bs-toggle="offcanvas"
              href="#offcanvasExample"
              role="button"
              aria-controls="offcanvasExample"
            >
              <HiMenuAlt1 className="fs-1 " />
            </a>
            <h2 className="pt-2">
              {" "}
              <span className="sub-title">E</span>
              <span className="learn">-learning</span>
            </h2>
            {user.email ? (
              <img className="UserImg" src={user.photoURL} alt="" />
            ) : (
              <FaUserCircle className="fs-1 " />
            )}
          </div>
          <div
            className="offcanvas offcanvas-start text-dark"
            tabIndex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div className="offcanvas-header">
              <h3 className="offcanvas-title" id="offcanvasExampleLabel">
                <span className="sub-title">E</span>
                <span className="learn">-learning</span>{" "}
              </h3>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <div className="mb-menu">
                <li>
                  {" "}
                  <Link to="/">Home</Link>
                </li>
                <li>
                  {" "}
                  <Link to="/reviews">Reviews</Link>
                </li>
                <li>
                  {" "}
                  <Link to="/instructor">Expert Instructor</Link>
                </li>
                <li>
                  {" "}
                  <Link to="/popular-course">Popular Courses</Link>
                </li>
                <li>
                  <Link to="/news-blogs"> Blogs</Link>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
