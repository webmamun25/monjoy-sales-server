import React from 'react';
import Categories from '../Pages/Categories/Categories';

import Ratingpage from '../Pages/Ratingus/Ratingpage/Ratingpage';
import Banner from '../Shared/Banner';
import Footer from '../Shared/Footer';
import Menubar from '../Shared/Menubar';
import './Home.css'
const Home = () => {
    return (
        <div>
           <Menubar></Menubar>
           <Banner></Banner>
           <Categories></Categories>
           <Ratingpage></Ratingpage>
           <Footer></Footer>
        </div>
    );
};

export default Home;