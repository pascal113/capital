import React from 'react';
import HomeSlider from '../components/sliders/HomeSlider';
import homeData from '../data/homeData';

const Home = () => {

    return (
        <main>
            <section id="home" className="section">
                <div className="container">
                    <HomeSlider homeData={homeData}/>
                </div>
            </section>
        </main>
    );
};

export default Home;;