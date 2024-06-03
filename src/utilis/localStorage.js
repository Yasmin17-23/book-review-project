import { toast } from "react-toastify";

export const saveToLocalStorage = (book) => {
    const storedBook = JSON.parse(localStorage.getItem('book-list')) || [];
   
    const existBook = storedBook.find((item) => item.bookId === book.bookId);
    
    if(!existBook){
        storedBook.push(book);
        localStorage.setItem("book-list", JSON.stringify(storedBook));
        toast.success('Books Added  to Read List successfully');
        
    }
    
    else {
        toast.error('You have Already Read this Books');
       
     }
    
     
}
export const saveToLocalStorage2 = (book) => {
    const storedBook = JSON.parse(localStorage.getItem('book-list')) || [];
   
    const findBook = storedBook.find((item) => item.bookId == book.bookId);
    
    if(!findBook){
        storedBook.push(book);
        localStorage.setItem("book-list", JSON.stringify(storedBook));
        toast.success('Books Added  to Wish List successfully');
        
    }
    
    else {
        toast.error('You have Already Read this Books');
       
     }
    
     
}

export const getFromLocalStorage = () => {
    const book = JSON.parse(localStorage.getItem('book-list')) || [];
    return book;
}