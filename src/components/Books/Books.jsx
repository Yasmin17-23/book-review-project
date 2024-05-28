import useBooksData from "../../Hooks/useBooksData";
import BookCard from "../BookCard/BookCard";


const Books = () => {
    const { data, loading } = useBooksData();
    console.log(data)
    return (
       <div className="text-center my-14">
          <h2 className="text-3xl font-bold mb-10">Books</h2>
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {
                data.map((book) => <BookCard key={book.id} book = {book}></BookCard>)
            }
        </div>
       </div>
    );
};

export default Books;
