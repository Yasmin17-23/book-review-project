import Banner from "../../components/Banner/Banner";
import Books from "../../components/Books/Books";


const Home = () => {
    return (
        <div className="max-w-7xl mx-auto lg:px-10">
            <Banner></Banner>
            <h2>This is Home page</h2>
            <Books></Books>
        </div>
    );
};

export default Home;