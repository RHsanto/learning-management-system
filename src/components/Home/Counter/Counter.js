import React from 'react';
import './Counter.css'
import { TiUser } from "react-icons/ti";
import { CgCalendarDates } from "react-icons/cg";
import { RiAppsLine } from "react-icons/ri";
import { TiStarOutline } from "react-icons/ti";
const Counter = () => {
  return (
    <div className='counter-section'>
     <div className="container">
       <div className="row g-3">  
         <div className="col-lg-3">
           <div className="counter">
             <div className="c-icon"><TiUser/></div>
             <div className="number">
               <h2>276K</h2>
             </div>
             <p>Worldwide Students</p>
           </div>
         </div>
         <div className="col-lg-3">
           <div className="counter">
             <div className="c-icon"><CgCalendarDates/></div>
             <div className="number">
               <h2>23+</h2>
             </div>
             <p> Years Experience</p>
           </div>
         </div>
         <div className="col-lg-3">
           <div className="counter">
             <div className="c-icon"><RiAppsLine/></div>
             <div className="number">
               <h2>735+</h2>
             </div>
             <p>Professional Courses </p>
           </div>
         </div>
         <div className="col-lg-3">
           <div className="counter">
             <div className="c-icon"><TiStarOutline/></div>
             <div className="number">
               <h2>4.7K+</h2>
             </div>
             <p>Beautiful Review</p>
           </div>
         </div>
       </div>
     </div>
    </div>
  );
};

export default Counter;