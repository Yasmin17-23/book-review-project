
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineUsers } from "react-icons/hi2";
import { LuFileBarChart } from "react-icons/lu";

const CardStyle = ({ list }) => {
    const { bookName, image, author, category, rating, tags = [],  totalPages, publisher,
        yearOfPublishing } = list || {};
    return (
        <div className="border-2 border-[#13131326] rounded-xl mb-3 p-4 flex justify-start items-center">
            <div className="bg-[#1313130D] rounded-xl p-5 mr-4">
                <img src={image} alt="" />
            </div>
            <div className="flex flex-col justify-start items-start">
               <h1 className="text-2xl text-[#131313] font-bold">{bookName}</h1>
               <p className="py-2 text-[14px] text-[#131313CC] font-medium">By: {author}</p>
               <div className="flex justify-between items-center ">
                  <p className="text-[#131313] font-bold mr-4">Tag</p>
                 {
                    tags.map((tag, index) => 
                        <p className='bg-[#F3F3F3] rounded-full mr-4 p-3 
                        text-[13px] text-[#23BE0A]'
                        key={index}>#{tag}</p>
                    )
                 }
                 <div className="flex justify-between items-center ml-6">
                   <IoLocationOutline className="text-[#424242] mr-2"></IoLocationOutline>
                   <p className="text-[14px] text-[#131313CC] space-x-2"> Year of Publishing: {yearOfPublishing}</p>
                 </div>
               </div>
               <div className="flex justify-between items-center mt-2">
                   <div className="flex justify-between items-center">
                     <HiOutlineUsers className="text-[#13131399] mr-2"/>
                     <p className="text-[13px] text-[#13131399] mr-4">Publisher: {publisher}</p>
                   </div>
                   <div className="flex justify-between items-center">
                     <LuFileBarChart className="text-[#13131399]"/>
                     <p className="text-[13px] text-[#13131399]"><span className="mr-2">Page</span> {totalPages}</p>
                   </div>
               </div>
               <div className="divider my-2"></div>
               <div className="flex justify-between items-center">
                  <button className="bg-[#328EFF26] text-[#328EFF] text-[13px] py-3 px-4 rounded-full mr-2">
                    <span className="mr-1">Category:</span> {category}
                </button>
                <button className="bg-[#FFAC3326] text-[#FFAC33] text-[13px] py-3 px-4 rounded-full mr-2">
                    <span className="mr-1">Rating</span> {rating}
                </button>
                <button className="bg-[#23BE0A] text-white text-[13px] py-3 px-4 rounded-full">
                    View Details
                </button>
                
               </div>
            </div>
        </div>
    );
};

export default CardStyle;