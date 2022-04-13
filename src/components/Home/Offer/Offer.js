import React from 'react';
import { AiOutlineUser } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { MdOutlineDateRange } from "react-icons/md";
import { FaRegPaperPlane } from "react-icons/fa";

const Offer = () => {
  return (
    <div className='offer-section pb-5 pt-4'>
     <div className="container">
       <div className="row py-5 g-4">
        <div className="text-center offer-info py-5">
        <p className='sub-title fw-bold'>What We Offer</p>
         <h2 className='fw-bold'>For Your Future Learning.</h2>
        </div>
         <div className="col-lg-3 col-md-6 col-12">
         <div className="l-card  p-4 rounded bg-light">
         <li className='l-card-icon'> <p className='icons'><FaRegPaperPlane /></p></li>
         <h5 className='fw-bold'>Online Courses</h5>
         <p>Interactively provide access world class materials
            for unique catalysts for change my ocardinat.</p>
         </div>
         </div>
         <div className="col-lg-3 col-md-6 col-12">
         <div className="l-card  p-4 rounded bg-light">
           <li className='l-card-icon'> <p className='icons'><AiOutlineUser /></p></li>
         <h5 className='fw-bold'>Expert Trainer</h5>
         <p>Interactively provide access world class materials
            for unique catalysts for change my ocardinat.</p>
         </div>
         </div>
         <div className="col-lg-3 col-md-6 col-12">
         <div className="l-card  p-4 rounded bg-light">
         <li className='l-card-icon'> <p className='icons'><CgFileDocument /></p></li>
         <h5 className='fw-bold'>Get Certificate</h5>
         <p>Interactively provide access world class materials
            for unique catalysts for change my ocardinat.</p>
         </div>
         </div>
         <div className="col-lg-3 col-md-6 col-12">
         <div className="l-card  p-4 rounded bg-light">
         <li className='l-card-icon'> <p className='icons'><MdOutlineDateRange /></p></li>
         <h5 className='fw-bold'>Life Time Access</h5>
         <p>Interactively provide access world class materials
            for unique catalysts for change my ocardinat.</p>
         </div>
         </div>
       
       </div>
     </div>
    </div>
  );
};

export default Offer;