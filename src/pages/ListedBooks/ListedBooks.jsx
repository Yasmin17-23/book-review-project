import { Link, Outlet} from "react-router-dom";

import { useState } from "react";





const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0);
    
    return (
        <div className="max-w-7xl mx-auto lg:px-10">
            <div className="bg-[#1313130D] rounded-lg py-4">
                <h2 className="text-2xl font-bold text-[#131313] text-center">Books</h2>
            </div>
            
            {/*read and wishlist tabs*/}
            <div className="flex items-center mt-8  overflow-x-auto overflow-y-hidden 
            sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
                <Link to='' onClick={() => setTabIndex(0)}
                    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 
                        'border border-b-0' : 'border-b'}  rounded-t-lg dark:border-gray-600
                         dark:text-gray-900`}>
                  
                    <span className="text-[14px] text-[#131313CC]">Read Books</span>
                </Link>
                <Link to={`wishlist`}  onClick={() => setTabIndex(1)}
                className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 
                'border border-b-0' : 'border-b'}  rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                   
                    <span className="text-[14px] text-[#13131380]">Wishlist Books</span>
                </Link>
                
            </div>  
          <Outlet></Outlet>
        </div>
    );
};


export default ListedBooks;