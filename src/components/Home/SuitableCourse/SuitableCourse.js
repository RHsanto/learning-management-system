import React from 'react';
import './SuitableCourse.css'
import learning from '../../../image/learning-2.png'
import teaching from '../../../image/madam-3.png'

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
         <div className="d-flex sui-card shadow">
           <div className="sui-info">
             <h4><b>Do You Want to <span className='sub-title'> Learn </span>here?</b></h4>
             <p>Dramatically supply transparent  deliverables before & you.</p>
             <button>Join Now</button>
           </div>
           <div className="sui-img">
           <img src={learning} alt="" />
           </div>
         </div>

       </div>
       <div className="col-lg-6">
         <div className="d-flex sui-card shadow">
          <div className="sui-info">
             <h4><b>Do You Want to  <span className='sub-title'> Teach</span> here?</b></h4>
             <p>Dramatically supply transparent deliverables before & you.</p>
             <button>Join Now</button>
          </div>
          <div className="sui-img">
            <img src={teaching} alt="" />
          </div>
         </div>
     
       </div>
     </div>
       </div>
     </div>
    </div>
  );
};

export default SuitableCourse;