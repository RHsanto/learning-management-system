/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './PopularCourses.css'
import { IoIosArrowDown } from "react-icons/io";
import { RiPlayCircleLine } from "react-icons/ri";
import { TiUser } from "react-icons/ti";
import { BsStarHalf } from "react-icons/bs";
import Man from '../../../image/m-1.PNG'
const PopularCourses = () => {
  return (
    <div className='popular-courses my-5'>
     <div className="container">
       <div className="row">
         <div className="d-flex justify-content-between">
           <div className="title">
             <h2 className='fw-bold'>Explore Popular Courses</h2>
           </div>
           <div className="drop">
             <b>Sort by</b> 
             <div class="dropdown ">
             <button class="dropbtn">All category <IoIosArrowDown/></button>
              <div class="dropdown-content">
                <a href="#">Design</a>
                <a href="#">Development</a>
                <a href="#">Video graphy</a>
              </div>
            </div>
           </div>
         </div>
         <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col">
    <div class="card p-card">
      <img src="https://images.unsplash.com/photo-1599128398046-06108ed53e3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fGxhcHRvcHxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60" alt="..."/>
      <div class="card-body">
        {/* here title & user */}
       <div className="d-flex align-items-center gap-2 ">
         <div className="man">
           <img src={Man} alt="" />
         </div>
          <h6 class="card-title fw-bold">The Complete 2022 Web Development Camp</h6></div>
      </div>
      {/* here count info */}
      <div className="p-count d-flex  justify-content-between">
        <div className="class d-flex gap-1">
          <div class='icon'><RiPlayCircleLine/></div>
          <p>35 Classes</p>
        </div>
        <div className="students d-flex gap-1">
          <div class='icon'><TiUser/></div>
          <p>291 Students</p>
        </div>
        <div className="ratings d-flex gap-1">
          <div class='icon'><BsStarHalf/></div>
          <p>4.5</p>
        </div>
      </div>
      {/* here all button */}

      <div className=' d-flex px-4 py-3 justify-content-between'>
       <div className="p-button d-flex gap-2">
       <button>Design</button>
        <button >Development</button>
       </div>
        <div className="dolar">
         <b> $24.91</b>
        </div>
      </div>
    </div>
  </div>
</div>

       </div>
     </div>
    </div>
  );
};

export default PopularCourses;