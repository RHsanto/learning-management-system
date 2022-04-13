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
import InsTWo from './Instructor/InsTwo';
import MBReviews from './Reviews/MBReviews';
import Footer from '../shared/Footer/Footer';
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
      <div className='d-none d-md-block'>
      <Instructor/>
      </div>
      <div className='d-block d-md-none'>
      <InsTWo/>
      </div>
      
      <SuitableCourse/>
      <div className='d-none d-md-block'>
      <Reviews/>
      </div>
      <div className='d-block d-md-none'>
      <MBReviews/>
      </div>
      <LatestBlog/>
      <Supporters/>
      <Footer/>
    </div>
  );
};

export default Home;