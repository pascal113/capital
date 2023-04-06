import React from 'react';
import HeroSlider from '../components/sliders/HeroSlider';
import RelatedSlider from '../components/sliders/RelatedSlider';
import FeaturedSlider from '../components/sliders/FeaturedSlider';
import SectionsHead from '../components/common/SectionsHead';
import TopProducts from '../components/product/TopProducts';
import Services from '../components/common/Services';


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