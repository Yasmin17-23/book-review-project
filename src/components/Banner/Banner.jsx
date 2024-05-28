import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="hero  bg-base-200 rounded-xl">
            <div className="hero-content flex-col  lg:flex-row-reverse">
                <img src="/public/images/banner.png" className="w-60 rounded-lg max-w-md" />
                <div className="w-[700px]">
                    
                    <h1 className="text-4xl font-bold mb-10">
                        Books to freshen <br /> up your bookshelf
                    </h1>  
                   <Link>
                      <button className="btn bg-[#23BE0A] text-white px-6">View The List</button>
                   </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;