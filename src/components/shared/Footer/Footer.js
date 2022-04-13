import React from 'react';
import './Footer.css'
import { RiFacebookCircleLine } from "react-icons/ri";
import { AiOutlineYoutube } from "react-icons/ai";
import { RiBasketballLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  return (
    <div >
      <footer >
       <div className="container fot">
         <div className="row">
           <div className="col-lg-3">
            <div className="fot-1">
            <h5>About</h5>
               <li>About us</li>
               <li>Blog</li>
               <li>Careers</li>
               <li>Jobs</li>
               <li>In Press</li>
            </div>
           </div>
           <div className="col-lg-3">
           <div className="fot-2">
            <h5>Quick Links</h5>
               <li>Refund Policy</li>
               <li>Documentation</li>
               <li>Chat online</li>
               <li>Order Cancel</li>
               <li>Privacy Policy</li>
            </div>
           </div>
           <div className="col-lg-2">
           <div className="fot-3">
            <h5>Support</h5>
               <li>Contact us</li>
               <li>Online Chat</li>
               <li>Whatsapp</li>
               <li>Telegram</li>
               <li>Ticketing</li>
            </div>
           </div>
           <div className="col-lg-4">
           <div className="fot-4">
            <h5>Subscribe For Newsletter</h5>
            <p>Be the first one to know about discounts,offers and events.
             Unsubscribe whenever you like.</p>
            <div className="fot-search d-flex">
            <input type="email" name="" id="" placeholder='&#9993; Enter your email' />
            <button type="submit">Subscribe Now</button>
            </div>
              <div className="fot-icon d-flex">
              <li><RiFacebookCircleLine/></li>
               <li><AiOutlineYoutube/></li>
               <li><RiBasketballLine/></li>
               <li><FaWhatsapp/></li>
              </div>
            </div>
           </div>
         </div>
       </div>
         <hr className='bg-light'/>
          <div className="container">
   <p className='text-end mb-0 py-4 text-light'>Copyright
    &copy;Rakibul Hasan 2022, All Rights Reserved</p>
            </div>  
   
      </footer>
    </div>
  );
};

export default Footer;