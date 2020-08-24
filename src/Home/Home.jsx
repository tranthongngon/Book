import React, { Component } from 'react';
import Banner from './Banner/Banner';
import Card from './Card/Card';
import Categories from './Categories/Categories';
import Authors from './Author/Authors';
import BannerVideo from './BannerVideo/BannerVideo';
import Footer from './Footer/Footer';

class Home extends Component {
    render() {
        return (
            <div>
                <Banner/>
                <Card/>
                <Categories/>
                <Authors/>
                <BannerVideo/>
                <Footer/>  
            </div>
        );
    }
}

export default Home;