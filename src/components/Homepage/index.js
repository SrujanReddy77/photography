import React from 'react';
import Navbar from './Navbar';
import Slideshow from './Slideshow';
import Event from './Events';
import Testimonals from './Testimonals';

const homepage = () => (
    <div>
        <Navbar />
        <Slideshow />
        <Event />
        <Testimonals />
    </div>
);

export default homepage;