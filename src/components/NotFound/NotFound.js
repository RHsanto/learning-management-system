import React from 'react';
import Error from '../../image/404.jpg'
const NotFound = () => {
  return (
    <div>
    <div className="container">
      <div className="row">
        <div className="col-7 mx-auto ">
        <img src={Error} alt="" className='w-100 my-5' />
        </div>
      </div>
    </div>
    </div>
  );
};

export default NotFound;