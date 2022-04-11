import React from 'react';
import Navbar from '../../shared/Navbar/Navbar'
import './Herosection.css'
import Hero from '../../../image/hero.png'
const HeroSection = () => {
  return (
    <div className='hero-section'>
      <Navbar/>
     <div className="container">
      <div className="row banner">
        <div className="col-lg-6 banner-info">
          <p>Learn New Skills & Popular Courses</p>
          <h1>For Every Student,<br/> Every <span>Classroom</span>.</h1>
     <p><small>Dramatically supply transparent deliverable before backward <br/> comp internal 
            "organic" sources. Competently leverage other.</small></p>
            <button class=" button">Explore Courses</button>
        </div>
        <div className="col-lg-4 hero-img">
          <img src={Hero} alt="" />
        </div>
      </div>
     </div>
    </div>
  );
};

export default HeroSection;