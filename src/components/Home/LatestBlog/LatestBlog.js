import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './LatestBlog.css'
const LatestBlog = () => {
  const [blogs,setBlogs]=useState([]);
  useEffect(()=>{
    fetch('./blogs.json')
    .then(response=>response.json())
    .then(data=>setBlogs(data.slice(0,3)))
  },[])
  return (
    <div className='latest-section'>
     <div className="container">
       <div className="row g-4">
         <h2 className='text-center blogs-title'><b>Latest Blogs & News</b></h2>
       {blogs?.map(blog=>(
          <div className="col-lg-4 col-md-6 col-12">
          <div class="card shadow" >
          <img src={blog?.img} class="card-img-top" alt="..."/>
          <div class="card-body">
           <p className='sub-title m-0 pb-1'><small>EDUCATION- JAN 21,2022</small></p>
          <h5 class="latest-title fw-bold">Educational Technology & Mobile Learning</h5>
          <p class="latest-text">Dramatically supply transparent deliverable before & you backward comp internal.</p>
          </div>
        </div>
 
         </div>
       ))}
       </div>
        <div className="row">
          <div className="col-lg-2 mx-auto">
          <button className='all-courses'>Load More</button>
          </div>
        </div>
     </div>
    </div>
  );
};

export default LatestBlog;