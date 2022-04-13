import React from 'react';
import './LatestBlog.css'
const LatestBlog = () => {
  return (
    <div className='latest-section'>
     <div className="container">
       <div className="row g-4">
         <h2 className='text-center blogs-title'><b>Latest Blogs & News</b></h2>
        <div className="col-lg-4">
         <div class="card" >
         <img src="https://images.unsplash.com/photo-1628243426757-b092ba839ff9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..."/>
         <div class="card-body">
          <p className='sub-title m-0 pb-1'><small>EDUCATION- JAN 21,2022</small></p>
         <h5 class="latest-title fw-bold">Educational Technology & Mobile Learning</h5>
         <p class="latest-text">Dramatically supply transparent deliverable before & you backward comp internal.</p>
         </div>
       </div>

        </div>
        <div className="col-lg-4">
         <div class="card" >
         <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="..."/>
         <div class="card-body">
          <p className='sub-title m-0 pb-1'><small>EDUCATION- JAN 21,2022</small></p>
         <h5 class="latest-title fw-bold">Educational Technology & Mobile Learning</h5>
         <p class="latest-text">Dramatically supply transparent deliverable before & you backward comp internal.</p>
         </div>
       </div>

        </div>
        <div className="col-lg-4">
         <div class="card" >
         <img src="https://images.unsplash.com/photo-1636202339022-7d67f7447e3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..."/>
         <div class="card-body">
          <p className='sub-title m-0 pb-1'><small>EDUCATION- JAN 21,2022</small></p>
         <h5 class="latest-title fw-bold">Educational Technology & Mobile Learning</h5>
         <p class="latest-text">Dramatically supply transparent deliverable before & you backward comp internal.</p>
         </div>
       </div>

        </div>

        <button className='all-courses mx-auto'>Load More</button>
       </div>
     </div>
    </div>
  );
};

export default LatestBlog;