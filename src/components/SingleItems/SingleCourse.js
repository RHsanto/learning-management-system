import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Single.css'
import Man from '../../image/man-1.jpg'
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { RiPlayCircleLine } from "react-icons/ri";
import { TiUser } from "react-icons/ti";
import { FcHome } from "react-icons/fc";
import { GrLanguage } from "react-icons/gr";

const SingleCourse = () => {
  const id =useParams();

  const [courses,setCourses] = useState([]);
  useEffect(()=>{
    fetch(`http://localhost:8000/all-popCourse/${id?.id}`)
    .then(res=>res.json())
    .then(data=>setCourses(data))
    
  },[id])

  console.log(id.id);
  return (
    <div>
     <div className="container my-5">
       <div className="row d-flex  align-items-center">
         <div className="col-lg-6 ">
        <div className="imag-box px-3">
          <button>Design</button>
          <h3>{courses?.title}</h3>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="teacher">
            <img  src={Man} alt="" />
            </div>
            <div className='re-icons  '>
              <ul className='d-flex gap-2 fs-5 '>
              <li><BsStarFill/></li>
              <li><BsStarFill/></li>
              <li><BsStarFill/></li>
              <li><BsStarFill/></li>
              <li><BsStarHalf/></li>
              </ul>
             </div>
          </div>
        <img src={courses?.img} alt="" />
        <p className='mt-4 lh-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde temporibus ducimus aut soluta commodi perferendis delectus ipsam distinctio ipsa iusto iure autem qui quidem, inventore, possimus minus molestiae animi non eum est praesentium? Nisi, est. Eligendi, veritatis beatae neque voluptate, 
          quasi nisi odit perspiciatis, cumque ducimus cum molestias officiis eum!</p>
        </div>
         </div>
         <div className="col-lg-4">
          <div className="single-info shadow p-5">
           <h3><b>${courses?.price}</b></h3>
           <ul>
             <li><FcHome/> Instructor: Fahad</li>
             <li><RiPlayCircleLine/> {courses?.class}: Class</li>
             <li><TiUser/> {courses?.students}: Students</li>
             <li><GrLanguage/> Language: English/Bangla</li>
             <li>Duration: 12h 20m 20s</li>
           </ul>
          </div>
         </div>
       </div>
     </div>
    </div>
  );
};

export default SingleCourse;