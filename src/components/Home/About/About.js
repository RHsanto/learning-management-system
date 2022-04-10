import React from 'react';
import './About.css'
const About = () => {
  return (
    <div className='about-section'>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img src="https://images.unsplash.com/photo-1521312706689-fbd93fd5af46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMxfHxsYXB0b3AlMjB3aXRoJTIwbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          </div>
          <div className="col-lg-4">
            <div className="about-info">
              <p>About Our Courses</p>
              <h1>Explore Thousands of Creative Classes</h1>
              <p><small>Dramatically supply transparent deliverables beforese backward comp internal
               or "organic" sources. Comp transparent leverage other. </small></p>
               <button className='button'> Explore Courses</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;