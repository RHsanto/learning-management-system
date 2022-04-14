import React from 'react';
import './Instructor.css'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import Slider from "react-slick";
import { useState } from 'react';
import { useEffect } from 'react';
const InsTWo = () => {

  const [instructors,setInstructors]=useState([])
  useEffect(()=>{
    fetch('http://localhost:8000/all-instructor')
    .then(res=>res.json())
    .then(data=>setInstructors(data))
  },[])
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    
  };
  
  return (
    <div className='instructor-section mx-3'>
      <div className="container">
        <div className="">
        <div className="pb-3">
             <h2 >Our Expert Instructor</h2>
           </div>
  
        <div className='my-5 '>
        <Slider {...settings}>
          {instructors.map(data=>(
               <div key={data?._id} className='sliders'>  
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
      
       
      
        </Slider>
      </div>
        </div>
      </div>
    </div>
  );
};

export default InsTWo;