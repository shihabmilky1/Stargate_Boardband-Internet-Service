import React from 'react';
import Contact from '../Contact/Contact';
import WifiArea from '../WifiArea/WifiArea';
import AboutUs from '../About/AboutUs';
import Features from '../Features/Features';
import Header from '../Header/Header';
import OurQuality from '../OurQuality/OurQuality';
import Pricing from '../Pricing/Pricing';
import Testimonial from '../Testimonial/Testimonial';
import Footer from '../../Shared/Footer/Footer/Footer';

const Home = () => {
    return (
        <main>
            <Header></Header>
            <Features></Features>
            <AboutUs></AboutUs>
            <OurQuality></OurQuality>
            <Pricing></Pricing>
            <WifiArea></WifiArea>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
        </main>
    );
};

export default Home;