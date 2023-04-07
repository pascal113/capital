import React from 'react';
import HeroSlider from '../components/sliders/HeroSlider';

const Home = () => {

    return (
        <main>
            <section id="featured" className="section">
                <div className="container">
                    <HeroSlider />
                </div>
            </section>
        </main>
    );
};

export default Home;;