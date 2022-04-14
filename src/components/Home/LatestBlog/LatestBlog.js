import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import './LatestBlog.css'
const LatestBlog = () => {
  const [blogs,setBlogs]=useState([]);
  useEffect(()=>{
    fetch('https://secure-sea-90788.herokuapp.com/all-blogs')
    .then(response=>response.json())
    .then(data=>setBlogs(data.slice(0,3)))
  },[])
  return (
    <div className='latest-section'>
     <div className="container">
       <div className="row g-4">
         <h2 className='text-center blogs-title'><b>Latest Blogs & News</b></h2>
       {blogs?.map(blog=>(
          <div key={blog?._id} className="col-lg-4 col-md-6 col-12">
          <div className="card shadow" >
          <img src={blog?.img} className="card-img-top" alt="..."/>
          <div className="card-body">
           <p className='sub-title m-0 pb-1'><small>EDUCATION- JAN 21,2022</small></p>
          <h5 className="latest-title fw-bold">Educational Technology & Mobile Learning</h5>
          <p className="latest-text">Dramatically supply transparent deliverable before & you backward comp internal.</p>
          </div>
        </div>
 
         </div>
       ))}
       </div>
        <div className="row">
          <div className="col-lg-2 mx-auto">
          <button className='all-courses'>
            <Link to='/news-blogs'>Load More</Link>
          </button>
          </div>
        </div>
     </div>
    </div>
  );
};

export default LatestBlog;