import React from 'react';

import Landing from './Landing'
import About from './About'
import Testimonials from './Testimonials'
import Contact from './Contact'

export default (props) => {
    return (
        <>
            <Landing />
            <About />
            <Testimonials />
            <Contact />
        </>
    );
}