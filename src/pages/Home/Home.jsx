import Banner from "../../components/Banner/Banner";
import Books from "../../components/Books/Books";


const Home = () => {
    return (
        <div className="max-w-7xl mx-auto lg:px-10">
            <Banner></Banner>
            
            <Books></Books>
        </div>
    );
};

export default Home;