import React from 'react';
import Timg1 from '../../../assests/Timg1.png';
import Timg2 from '../../../assests/TImg2.jpg';
import Timg3 from '../../../assests/Timg3.jpeg';

const Testimonals = () => (
   <div className="testimonal">
       <h1>OUR TESTIMONALS</h1>
       <div>
         <img className="profile" src={Timg1} alt="" />
         <p className="rev">We are so in love with the perfection he has made.</p>
       </div>
       <div>
        <img  className="profile" src={Timg2} alt="" />
        <p className="rev">We can't recommend him highly enough.</p>
       </div>
       <div>
        <img className="profile" src={Timg3} alt="" />
        <p className="rev">We just couldn't be happier with the beautiful service.</p>
       </div>
   </div>
);

export default Testimonals;