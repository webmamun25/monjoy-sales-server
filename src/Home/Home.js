import React from 'react';
import Banner from '../Shared/Banner';
import Footer from '../Shared/Footer';
import Menubar from '../Shared/Menubar';
import './Home.css'
const Home = () => {
    return (
        <div>
           <Menubar></Menubar>
           <Banner></Banner>
           <Footer></Footer>
        </div>
    );
};

export default Home;