import React from 'react';
import './SuitableCourse.css'
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";

const SuitableCourse = () => {
  return (
    <div className='SuitableCourse'>
     <div className="container">
       <div className="row">
         <div className="col-lg-4 review">
           <div className="review-card">
             <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          <div className="re-body shadow">
            <div className="d-flex justify-content-between">
              <div></div>
              <div className='re-icons me-2 '>
                <ul className='d-flex gap-1 '>
                <li><BsStarFill/></li>
                <li><BsStarFill/></li>
                <li><BsStarFill/></li>
                <li><BsStarFill/></li>
                <li><BsStarHalf/></li>
              </ul></div>
            </div>
               <p>Dramatically supply transparent deliverables before & can
                backward comp internet or "organic" sources.</p>
              <h5><b>AK Khalid</b> </h5>
             <p>SX-Instructor</p>
          </div>
           </div>
         </div>
       </div>
     </div>
    </div>
  );
};

export default SuitableCourse;