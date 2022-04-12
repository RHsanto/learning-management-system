import React from 'react';
import './Instructor.css'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import Slider from "react-slick";
const Instructor = () => {

  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplaySpeed: 2000,
  //   pauseOnHover: true,
    
  // };
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className='instructor-section'>
      <div className="container">
        <div className="row">
        <div className="d-flex justify-content-between">
           <div className="title">
             <h2 className='fw-bold'>Our Expert Instructor</h2>
           </div>
           {/* <div className="d-flex gap-3 arrow">
             <div><IoIosArrowBack/></div>
             <div><IoIosArrowForward/></div>
           </div> */}
        </div>
        <div className='my-5 gap-4'>
        <Slider {...settings}>
          <div >  
            <div className="ex-card ">
             <img src="https://images.unsplash.com/photo-1597204081767-4c14a6b7cbec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTl8fG1hbnxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60" alt="img" />
             <h5>Devon lane</h5>
             <p>Instructor</p>
             <div className="social-icon">
               <li><FaFacebookF/></li>
               <li><FaTwitter/></li>
               <li><AiFillInstagram/></li>
               <li><BsYoutube/></li>
             </div>
           </div>
          </div>
          <div > 
            <div className="ex-card ">
             <img src="https://images.unsplash.com/photo-1597204081767-4c14a6b7cbec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTl8fG1hbnxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60" alt="img" />
             <h5>Devon lane</h5>
             <p>Instructor</p>
           </div>
          </div>
          <div> 
            <div className="ex-card ">
             <img src="https://images.unsplash.com/photo-1597204081767-4c14a6b7cbec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTl8fG1hbnxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60" alt="img" />
             <h5>Devon lane</h5>
             <p>Instructor</p>
           </div>
          </div>
          <div> 
            <div className="ex-card ">
             <img src="https://images.unsplash.com/photo-1597204081767-4c14a6b7cbec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTl8fG1hbnxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60" alt="img" />
             <h5>Devon lane</h5>
             <p>Instructor</p>
           </div>
          </div>
          <div> 
            <div className="ex-card ">
             <img src="https://images.unsplash.com/photo-1597204081767-4c14a6b7cbec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTl8fG1hbnxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60" alt="img" />
             <h5>Devon lane</h5>
             <p>Instructor</p>
           </div>
          </div>
          <div> 
            <div className="ex-card ">
             <img src="https://images.unsplash.com/photo-1597204081767-4c14a6b7cbec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTl8fG1hbnxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60" alt="img" />
             <h5>Devon lane</h5>
             <p>Instructor</p>
           </div>
          </div>
    
          
        </Slider>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;