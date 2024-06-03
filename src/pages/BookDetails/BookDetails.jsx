
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useBooksData from "../../Hooks/useBooksData";
import { saveToLocalStorage, saveToLocalStorage2 } from "../../utilis/localStorage";


const BookDetails = () => {
    const [singleBook, setSingleBook] = useState({});
    const { data } = useBooksData();
    const { bookId } = useParams();
    //console.log(bookId);

    const handleReadBook = () => {
       saveToLocalStorage(singleBook);
    }
    
    const handleWishlistBook = () => {
        saveToLocalStorage2(singleBook);
    }
    useEffect(() => {
        const singleBook = data.find((book) => book.bookId === bookId);
        //console.log(singleBook);
        setSingleBook(singleBook);
    }, [data, bookId])
    //console.log(singleBook)

    const { bookName, image, author, category, rating,  tags = [], review, totalPages, publisher, 
        yearOfPublishing } = singleBook || {};
    return (
        <div className="hero max-w-7xl mx-auto lg:px-10 ">
            <div className="hero-content flex-col lg:flex-row ">
                <div className="bg-[#1313130D] py-8 flex justify-center items-center rounded-xl mr-4 flex-1">
                    <img src={image} className=" w-70 h-[420px]" />
                </div>
                <div className="flex flex-col justify-center items-start flex-1">
                    <h1 className="text-4xl font-bold text-[#131313]">
                        {bookName}
                    </h1>
                    <p className="py-3 text-md font-medium text-[#131313CC]">By: {author}</p>
                    <div className="divider my-2"></div>
                    <p className="text-md font-medium text-[#131313CC]">{category}</p>
                    <div className="divider my-2"></div>
                    <div>
                        <p className="text-[14px] text-[#131313B3] mb-4"><span className="font-bold text-[#131313] mr-2">Review:</span>{review}</p>
                    </div>
                    <div className='flex justify-between items-center'>
                       <p className="font-bold text-[#131313] mr-4">Tag</p>
                       {
                        tags.map((tag, index) => <a className='bg-[#F3F3F3] rounded-full mr-2 px-4  py-3
                                                text-[13px] text-[#23BE0A]' key={index}>#{tag}</a>
                        )
                       }
                    </div>
                 
                    <div className="divider my-2"></div>
                    <div>
                        <div className="pb-4">
                            <table className="">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th></th>      
                                    </tr>
                                </thead>
                                <tbody>
                                 
                                    <tr >  
                                       <td className="text-[13px] text-[#131313B3] ">Number of Pages: </td> 
                                       <td className="text-[14px] font-semibold text-[#131313] pl-4">{totalPages}</td> 
                                    </tr>
                                    <tr>  
                                       <td className="text-[13px] text-[#131313B3]">Publisher: </td> 
                                       <td className="text-[14px] font-semibold text-[#131313] pl-4">{publisher}</td> 
                                    </tr>
                                   
                                    <tr>  
                                       <td className="text-[13px] text-[#131313B3] ">Year of Publishing:</td> 
                                       <td className="text-[14px] font-semibold text-[#131313] pl-4">{yearOfPublishing}</td> 
                                    </tr>
                                   
                                    <tr>  
                                       <td className="text-[13px] text-[#131313B3]">Rating:</td> 
                                       <td className="text-[14px] font-semibold text-[#131313] pl-4">{rating}</td> 
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                     
                        <button onClick={() => handleReadBook(singleBook)}
                        className="btn bg-transparent hover:bg-[#23BE0A] hover:text-white
                       border-[#1313134D] mr-2 px-8">Read</button>
                      
                      <button onClick={() => handleWishlistBook(singleBook)}
                      className="btn bg-[#50B1C9] border-none 
                      hover:bg-[#518997] px-8 text-white hover:text-black">Wishlist</button>
                    </div>
                   </div>
                </div>   
        </div>
    );
};

export default BookDetails;