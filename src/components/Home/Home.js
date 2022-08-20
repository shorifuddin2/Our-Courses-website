
import Banner from "./Banner";
import Course from "./Course";
import Features from "./Features";
import Header from "./Header";

import "./Home.css";



const Home = () => {
    return (
        <div>
            <Header />
            <Course/>
            <Features />
            <Banner/>
        </div>
    );
};

export default Home;