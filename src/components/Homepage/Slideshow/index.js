import React from 'react';
import Simg1 from '../../../assests/images/children817365.jpg';
import Simg2 from '../../../assests/images/hijab3064633.jpg';
import Simg3 from '../../../assests/images/legs434918.jpg';
import Simg4 from '../../../assests/images/people2565128.jpg';
import Simg5 from '../../../assests/images/1.jpg';

class Slideshow extends React.Component{
    
    render(){
        return (
             <div>
                <section id="slider">
                    <div className="middle1">
                        <a className="btn" href="#">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a className="btn" href="#">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a className="btn" href="#">
                            <i className="fab fa-google"></i>
                        </a>
                        <a className="btn" href="#">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                   <input type="radio" name="slider" id="s1" />
                   <input type="radio" name="slider" id="s2" />
                   <input type="radio" name="slider" id="s3" />
                   <input type="radio" name="slider" id="s4" />
                   <input type="radio" name="slider" id="s5" />
                   <label htmlFor="s1" id="slide1"><img src={Simg1} alt=""/></label>
                   <label htmlFor="s2" id="slide2"><img src={Simg5} alt=""/></label>
                   <label htmlFor="s3" id="slide3"><img src={Simg3} alt=""/></label>
                   <label htmlFor="s4" id="slide4"><img src={Simg4} alt=""/></label>
                   <label htmlFor="s5" id="slide5"><img src={Simg2} alt=""/></label>
                </section>
             </div>
        );
    }
}

export default Slideshow;