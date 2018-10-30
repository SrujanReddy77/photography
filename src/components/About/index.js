import React from 'react';
import Sparkler from '../../assests/sparkler.jpg';


const about = () => {
    return (
        <div className="About">
            <img src={Sparkler} alt="" />
            <div className="aline"></div>
            <h1>ABOUT US</h1>
            <p>Finding a photographer was one of the most important decisions we had to make for our wedding, and we could not have chosen a better one! 
                Matt and his assistants were amazing to work with and the photos that followed,
                just as amazing. We have had compliments galore about our pictures and
                I credit that all to Matt. Words can barely describe how happy we are with our shots 
                and our decision to go with MMP. You will NOT be disappointed!
            </p>
        </div>
    )
}

export default about;