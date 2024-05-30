
import {  useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useBooksData from "../../Hooks/useBooksData";


const BookDetails = () => {
    const [singleBook, setSingleBook] = useState({});
    const { data, loading } = useBooksData();
    const { bookId } = useParams();
    console.log(bookId);

    useEffect(() => {
        const singleBook = data.find((book) => book.bookId === bookId);
        console.log(singleBook);
        setSingleBook(singleBook);
    }, [data, bookId])
    console.log(singleBook)

    const { bookName, image, author, category, rating,  tags = [], review, totalPages, publisher, 
        yearOfPublishing } = singleBook || {};
    return (
        <div className="hero max-w-7xl mx-auto lg:px-10">
            <div className="hero-content flex-col lg:flex-row ">
                <div className="bg-[#1313130D] py-4 flex justify-center items-center rounded-xl mr-6 flex-1">
                    <img src={image} className=" w-70 h-[400px]" />
                </div>
                <div className="flex flex-col justify-center items-start flex-1">
                    <h1 className="text-5xl font-bold">
                        {bookName}
                    </h1>
                    <p className="py-6">By: {author}</p>
                    <div className="divider"></div>
                    <p>{category}</p>
                    <div className="divider"></div>
                    <div>
                        <p><span>Review:</span>{review}</p>
                    </div>
                    <div className='flex justify-between items-center -ml-6'>
                       {
                        tags.map((tag, index) => <a className='bg-[#F3F3F3] rounded-full mr-2 p-3 
                                                text-[13px] text-[#23BE0A]' key={index}>{tag}</a>
                        )
                       }
                    </div>
                 
                    <div className="divider"></div>
                    <div>
                        <div className="">
                            <table className="">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th></th>      
                                    </tr>
                                </thead>
                                <tbody>
                                 
                                    <tr>  
                                       <td>Number of Pages: </td> 
                                       <td>{totalPages}</td> 
                                    </tr>
                                    <tr>  
                                       <td>Publisher: </td> 
                                       <td>{publisher}</td> 
                                    </tr>
                                   
                                    <tr>  
                                       <td>Year of Publishing:</td> 
                                       <td>{yearOfPublishing}</td> 
                                    </tr>
                                   
                                    <tr>  
                                       <td>Rating:</td> 
                                       <td>{rating}</td> 
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="">
                      <button className="btn bg-transparent hover:bg-[#23BE0A] hover:text-white
                       border-[#1313134D] mr-2 px-8">Read</button>
                      <button className="btn bg-[#50B1C9] border-none 
                      hover:bg-[#518997] px-8 text-white hover:text-black">Wishlist</button>
                    </div>
                   </div>
                </div>   
        </div>
    );
};

export default BookDetails;