import { useEffect } from "react";
import HomeSlider from '../components/sliders/HomeSlider';
import { useDispatch, useSelector } from "react-redux";
import { getSliders } from "../redux/apiCalls";

const Home = () => {

    const dispatch = useDispatch();
    const sliders = useSelector((state) => state.slider.sliders);

    useEffect(() => {
        console.log('home useEffect');
        getSliders(dispatch);
    }, [dispatch]);

    return (
        <main>
            <section id="home" className="section">
                <div className="container">
                    <HomeSlider homeData={sliders}/>
                </div>
            </section>
        </main>
    );
};

export default Home;;