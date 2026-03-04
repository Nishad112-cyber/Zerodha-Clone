import React from 'react';
import Award from './Award';
import Hero from './Hero';
import Statats from './Statats';
import Pricing from './Pricing';
import Education from './Educations';
import OpenAccount from '../OpenAccount';
import Footer from '../Footer';
import Navbar from '../Navbar';

function Homepage() {
    return (
        <>
      
        <Hero/>
        <Award/>
        <Statats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
     
        </>
      );
}

export default Homepage;