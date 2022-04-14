import React, { useEffect, useState } from 'react';
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
const AllReviews = () => {
  const [reviews,setReviews]=useState([])
  useEffect(()=>{
    fetch('http://localhost:8000/all-Reviews')
    .then(res=>res.json())
    .then(data=>setReviews(data))
  },[])
  return (
    <div >
    <div className="container">
    <h1 className='fw-bold text-center my-5'> <span className="sub-title">4700+</span> Happy Students</h1>
     <div className='my-5 row'>
        {reviews.map(data=>(
       <div className="review-card mb-5 col-lg-4 col-md-6 col-12">
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
    </div>
    </div>
  </div>
  );
};

export default AllReviews;