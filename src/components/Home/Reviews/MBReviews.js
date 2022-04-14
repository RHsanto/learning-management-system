import React from 'react';
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import Slider from "react-slick";
import { useState } from 'react';
import { useEffect } from 'react';
import './Reviews.css'
const Reviews = () => {

  const [reviews,setReviews]=useState([])
  useEffect(()=>{
    fetch('http://localhost:8000/all-Reviews')
    .then(res=>res.json())
    .then(data=>setReviews(data))
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
    <div className='instructor-section my-5  mx-4'>
      <div className="container">
        <div className="">
        <div className="d-flex justify-content-between">
           <div className="mb-title">
             <h1 className='fw-bold'>4700+ Happy Students</h1>
           </div>
  
        </div>
        <div className='my-5 '>
        <Slider {...settings}>
          {reviews.map(data=>(
  <div key={data?._id} className="review-card mb-5">
  <img src={data?.img} alt="" />
  <div className="re-body  ">
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
    <p>{data?.reviews}</p>
   <h5><b>{data?.name}</b> </h5>
  <p>{data?.designation}</p>
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

export default Reviews;