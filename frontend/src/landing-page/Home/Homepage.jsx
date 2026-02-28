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
        <Navbar/>
        <Hero/>
        <Award/>
        <Statats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        <Footer/>
        </>
      );
}

export default Homepage;