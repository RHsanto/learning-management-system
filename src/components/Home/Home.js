import React from 'react';
import HeroSection from './HeroSection/HeroSection'
import Offer from './Offer/Offer'
import About from './About/About'
import Categories from './Categories/Categories'
import PopularCourses from './PopularCourses/PopularCourses'
import Online from './OnlineLearn/Online'
import Counter from './Counter/Counter'
import Supporters from './Supporters/Supporters';
import Instructor from './Instructor/Instructor';
import SuitableCourse from './SuitableCourse/SuitableCourse';
import Reviews from './Reviews/Reviews';
import LatestBlog from './LatestBlog/LatestBlog';
const Home = () => {
  return (
    <div>
  
     <HeroSection/>
     <Offer/>
     <About/>
     <Categories/>
      <PopularCourses/>
      <Online/>
      <Counter/>
      <Instructor/>
   
      {/* <div className='d-block d-md-none'>
      <InsTWo/>
      </div>   */}
      <SuitableCourse/>
    
      <Reviews/>

      {/* <div className='d-block d-md-none'>
      <MBReviews/>
      </div> */}
      <LatestBlog/>
      <Supporters/>
   
    </div>
  );
};

export default Home;