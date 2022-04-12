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
         <img src="https://media.istockphoto.com/photos/elearning-education-concept-learning-online-picture-id1290864946?b=1&k=20&m=1290864946&s=170667a&w=0&h=zZq7rG5McSptSIpEm9f8iTGd3Mrdkcslakr91T7qTYM=" class="card-img-top" alt="..."/>
         <div class="card-body">
          <p className='sub-title m-0 pb-1'><small>EDUCATION- JAN 21,2022</small></p>
         <h5 class="latest-title fw-bold">Educational Technology & Mobile Learning</h5>
         <p class="latest-text">Dramatically supply transparent deliverable before & you backward comp internal.</p>
         </div>
       </div>

        </div>
        <div className="col-lg-4">
         <div class="card" >
         <img src="https://media.istockphoto.com/photos/elearning-education-concept-learning-online-picture-id1290864946?b=1&k=20&m=1290864946&s=170667a&w=0&h=zZq7rG5McSptSIpEm9f8iTGd3Mrdkcslakr91T7qTYM=" class="card-img-top" alt="..."/>
         <div class="card-body">
          <p className='sub-title m-0 pb-1'><small>EDUCATION- JAN 21,2022</small></p>
         <h5 class="latest-title fw-bold">Educational Technology & Mobile Learning</h5>
         <p class="latest-text">Dramatically supply transparent deliverable before & you backward comp internal.</p>
         </div>
       </div>

        </div>
        <div className="col-lg-4">
         <div class="card" >
         <img src="https://media.istockphoto.com/photos/elearning-education-concept-learning-online-picture-id1290864946?b=1&k=20&m=1290864946&s=170667a&w=0&h=zZq7rG5McSptSIpEm9f8iTGd3Mrdkcslakr91T7qTYM=" class="card-img-top" alt="..."/>
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