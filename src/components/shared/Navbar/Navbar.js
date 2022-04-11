/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Navbar.css'
import { IoIosArrowDown } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { TiUserOutline } from "react-icons/ti";
import { RiShoppingBagLine } from "react-icons/ri";
import { HiMenuAlt1 } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
const Navbar = () => {
  return (
    <div>
     <div className="container text-light px-0">
     
     <div className='d-none d-md-block'>
     <div className=" d-flex justify-content-between align-items-center py-3">
         <div >
         <div class="dropdown">
         <button class=" logo">Categories <IoIosArrowDown/></button>
         <div class="dropdown-content ">
           <a href="#">Category 1</a>
           <a href="#">Category 2</a>
           <a href="#">Category 3</a>
         </div>
          </div>
         </div>
          <div className="dropdownMenu d-flex
           justify-content-center align-items-center gap-4">
          <div class="dropdown">
         <button class="dropBtn">Home  <IoIosArrowDown/></button>
         <div class="dropdown-content">
           <a href="#">Home 1</a>
           <a href="#">Home 2</a>
           <a href="#">Home 3</a>
         </div>
          </div>
           <div class="dropdown">
         <button class="dropBtn">Pages  <IoIosArrowDown/></button>
         <div class="dropdown-content">
           <a href="#">Pages 1</a>
           <a href="#">Pages 2</a>
           <a href="#">Pages 3</a>
         </div>
          </div>
           <div class="dropdown">
         <button class="dropBtn">Instructor  <IoIosArrowDown/></button>
         <div class="dropdown-content">
           <a href="#">Instructor 1</a>
           <a href="#">Instructor 2</a>
         </div>
          </div>
           <div class="dropdown">
         <button class="dropBtn">Courses  <IoIosArrowDown/></button>
         <div class="dropdown-content">
           <a href="#">Online Courses</a>
           <a href="#">Popular </a>
         </div>
          </div>
           <div class="dropdown">
         <button class="dropBtn">Blog  <IoIosArrowDown/></button>
         <div class="dropdown-content">
           <a href="#">News</a>
           <a href="#">Recent Blogs</a>
         </div>
          </div>
          <div className="search">
          <FiSearch className='search-icon'/>
            <input type="search" name="" id="" placeholder='Search Courses' />
          </div>
          <div >
          <TiUserOutline className="User"/>
          </div>
          <div >
          <RiShoppingBagLine className="cart"/>
          </div>
          </div>
       </div>
     </div>
     {/* mobile device menu */}
      <div className='d-block d-md-none fixed-top'>
       <div className="d-flex justify-content-between align-items-center
        py-2 bg-light text-dark px-3">
       <a class="text-dark" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
       <HiMenuAlt1 className='fs-1 '/>
     </a>
       <h2 className='pt-2'>  <span className='e'>E</span><span className="learn">-learning</span></h2>
       <FaUserCircle className='fs-1 '/>
       </div>


<div class="offcanvas offcanvas-start text-dark" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h3 class="offcanvas-title" id="offcanvasExampleLabel">
      <span className='e'>E</span><span className="learn">-learning</span> </h3>
    <button type="button"
     class="btn-close text-reset"
      data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body"> 
  <div class="dropdown mb-3">
         <button class="logo ">Categories <IoIosArrowDown/></button>
         <div class="dropdown-content">
           <a href="#">Category 1</a>
           <a href="#">Category 2</a>
           <a href="#">Category 3</a>
         </div>
   </div>
 <div className="mb-menu">
 
 <li>Home</li>
 <li>Pages</li>
 <li>Instructor</li>
 <li>Courses</li>
 <li>Blogs</li>

 </div>
  </div>
</div>

      </div>
     </div>
    </div>
  );
};

export default Navbar;