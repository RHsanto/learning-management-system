import React from 'react';
import './About.css'
import MiddleImg from '../../../image/tera.png'
import LittleImg from '../../../image/cut.PNG'
import headeMen from '../../../image/heade-man.avif'
const About = () => {
  return (
    <div className='about-section'>
      <div className="container">
        <div className="row about">
          <div className="col-lg-6 all-img">
           <div className="headphone">
           <img src={headeMen}
            alt="" />
           </div>
            <div className="mid-women">
              <img src={MiddleImg} alt="" srcSet="" />
            </div>
            <div className="little-women">
              <img src={LittleImg} alt="" srcSet="" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="about-info">
              <p className='sub-title fw-bold'>About Our Courses</p>
              <h2 className='fw-bold'>Explore Thousands of Creative Classes</h2>
              <p className='my-4 '><small>Dramatically supply transparent deliverables beforese backward comp internal
               or "organic" sources. Comp transparent leverage other. </small></p>
               <button className='global-btn'> Explore Courses</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;