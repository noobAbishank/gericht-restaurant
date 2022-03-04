import React from 'react';

import './Newsletter.css';
import SubHeading from '../SubHeading/SubHeading';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Book A Table" />
      <h1 className="headtext__cormorant">Login To Our Website</h1>
      <p className="p__opensans">And never miss latest Updates!</p>
    </div>

    <div className='app__newsletter-input flex__center'>
      <input type="email" placeholder='Enter your e-mail address' />
      <button type='button' className='custom__button'>Login</button>
    </div>

  </div>
);

export default Newsletter;
