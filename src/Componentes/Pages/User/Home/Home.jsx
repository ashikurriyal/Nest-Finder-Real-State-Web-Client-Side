import AdvertisementSection from "./AdvertisementSection";
import Banner from "./Banner/Banner";


const Home = () => {
    return (
        <div className="space-y-20">
            <Banner></Banner>
            <div className="lg:mx-32 mx-6 bg-red-300">
                <AdvertisementSection></AdvertisementSection>
            </div>
        </div>
    );
};

export default Home;