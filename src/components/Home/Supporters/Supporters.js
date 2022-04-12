import React from 'react';
import key1 from '../../../image/key-1-removebg-preview.png'
import key2 from '../../../image/key-2-removebg-preview (1).png'
import key3 from '../../../image/key-3-removebg-preview.png'
import key4 from '../../../image/key-4-removebg-preview.png'
import key5 from '../../../image/key-5-removebg-preview.png'
import './Supporters.css'
const Supporters = () => {
  return (
    <div className='supporters-section'>
    <div className="container">
    <h2 className='text-center fw-bold'>Our Key Supporters</h2>
    <div className="our-keys">
      <div className="key">
        <img src={key1} alt="" />
      </div>
      <div className="key">
      <img src={key2} alt="" />
      </div>
      <div className="key">
      <img src={key3} alt="" />
      </div>
      <div className="key">
      <img src={key4} alt="" />
      </div>
      <div className="key">
      <img src={key5} alt="" />
      </div>
    </div>
    </div>
    </div>
  );
};

export default Supporters;