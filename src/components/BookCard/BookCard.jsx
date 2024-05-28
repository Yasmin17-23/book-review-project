
import PropTypes from 'prop-types';
import { CiStar } from "react-icons/ci";

const BookCard = ({ book }) => {
    const { bookId, bookName, image, author, category, rating, tags } = book;

    return (
        <div className="card bg-base-100 shadow-none border border-[#13131326] p-4">
            <div className="bg-[#F3F3F3] py-4  rounded-lg" >
                <figure><img src={image} alt="Shoes" /></figure>
            </div>
            <div className="card-body">
                <div  className='flex justify-between items-center -ml-6'>
                    {
                        tags.map((tag, idx) => 
                            <p className='bg-[#F3F3F3] rounded-full mr-2 p-3 text-[13px] text-[#23BE0A]'
                         key={idx}>{tag}</p>

                        )
                    }
                </div>    
                 
                  <div className='flex flex-col items-start -pl-6'>
                  <h2 className="card-title -ml-4 text-lg font-bold my-3">{bookName}</h2>
                   <p className='-ml-4 text-[14px] text-[#131313CC]'><span>By:</span> {author}</p>
                  </div>
                   <hr className='border-dashed border-x-2 my-4 -ml-4'/>
                <div className="card-actions ">
                   <div className='flex justify-between items-center gap-20 text-[#131313CC] text-[14px]'>
                        <p className='mr-26'>{category}</p>
                        <div className='flex justify-between items-center gap-2'>
                            <p>{rating}</p>
                            <CiStar></CiStar>
                       </div>
                   </div>
                </div>
            </div>
        </div>
    );
};

BookCard.propTypes = {
    book: PropTypes.object,
}

export default BookCard;