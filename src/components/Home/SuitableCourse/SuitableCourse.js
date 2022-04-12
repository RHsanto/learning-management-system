import React from 'react';
import './SuitableCourse.css'


const SuitableCourse = () => {
  return (
    <div className='SuitableCourse'>
     <div className="container">
       <div className="row">
       <div className=" text-center">
         <p className='sub-title'>Join With Us</p>
         <h1 className='fw-bold'>Which One is Suitable For You</h1>
       </div>
     <div className="row sui-banner g-4">
     <div className="col-lg-6">
         <div className="d-flex sui-card">
           <div className="sui-info">
             <h4><b>Do You Want to <br /><span className='sub-title'> Learn </span>here?</b></h4>
             <p>Dramatically supply transpa <br /> deliverables before & you.</p>
             <button>Join Now</button>
           </div>
         </div>
         <div className="sui-img"></div>
       </div>
       <div className="col-lg-6">
         <div className="d-flex sui-card">
         <div className="sui-info">
             <h4><b>Do You Want to <br /> <span className='sub-title'> Teach</span> here?</b></h4>
             <p>Dramatically supply transpa <br /> deliverables before & you.</p>
             <button>Join Now</button>
          </div>
          <div className="sui-img"></div>
         </div>
     
       </div>
     </div>
       </div>
     </div>
    </div>
  );
};

export default SuitableCourse;