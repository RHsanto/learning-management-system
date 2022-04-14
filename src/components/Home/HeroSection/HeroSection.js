import React from 'react';
import Hero from '../../../image/sada-removebg-preview.png'
import { BsStarFill } from "react-icons/bs";
import './Herosection.css'
const HeroSection = () => {
  return (
    <div className='hero-section'>
     <div className="container ">
      <div className="row banner">
        <div className="col-lg-6 banner-info">
          <p>Learn New Skills & Popular Courses</p>
          <h1>For Every Student,<br/> Every <span>Classroom</span>.</h1>
     <p><small>Dramatically supply transparent deliverable before backward <br/> comp internal 
            "organic" sources. Competently leverage other.</small></p>
            <button className=" global-btn ">Explore Courses</button>
        </div>
        <div className="col-lg-6 hero-img ">
          <img src={Hero} alt="" />
          <div className="text-1">
            <h5 className='sub-title'><b>235K</b></h5>
            <p><small>Worldwide Students</small></p>
          </div>
          <div className="text-2">
            <h5 ><b>4.7<BsStarFill className='star'/></b></h5>
            <p><small>Worldwide Students</small></p>
          </div>
          <div className="text-3">
            <h5><b>3.5K</b></h5>
            <p><small>Free Pro Courses</small></p>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
};

export default HeroSection;