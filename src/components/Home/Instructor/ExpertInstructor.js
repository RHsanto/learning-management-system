import React, { useEffect, useState } from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
const ExpertInstructor = () => {
  const [instructors,setInstructors]=useState([])
  useEffect(()=>{
    fetch('http://localhost:8000/all-instructor')
    .then(res=>res.json())
    .then(data=>setInstructors(data))
  },[])
  return (
    <div className='instructor-section '>
      <div className="container ">
        <div >
        <h1 className='fw-bold text-center my-5'>Our Expert Instructor</h1>
        <div className='row'>
          {instructors.map(data=>(
  <div key={data?._id} className='sliders col-lg-4 col-md-6 col-12'>  
  <div className="ex-card ">
   <img src={data?.img} alt="img" />
   <h5>{data?.name}</h5>
   <p>{data?.designation}</p>
   <div className="social-icon">
     <li><FaFacebookF/></li>
     <li><FaTwitter/></li>
     <li><AiFillInstagram/></li>
     <li><BsYoutube/></li>
   </div>
 </div>
  </div>
          ))}
      
      </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertInstructor;