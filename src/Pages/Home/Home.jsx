import AboutSection from "./AboutSection";
import Banner from "./Banner";
import FeaturedCar from "./FeaturedCar";
import Newsletter from "./Newsletter";
import Testimonial from "./Testimonial";
import TopBidListings from "./TopBidListings";
import UserActivity from "./UserActivity";



const Home = () => {


    return (
        <div>
            <Banner />
            <UserActivity />
            <AboutSection />
            <FeaturedCar />
            <TopBidListings />
            <Newsletter />
        </div>
    );
};

export default Home;