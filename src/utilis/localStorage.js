
export const saveToLocalStorage = (book) => {
    const storedBook = JSON.parse(localStorage.getItem('book-list')) || [];
    const existBook = storedBook.find((item) => item.bookId === book.bookId);

    if(!existBook){
        storedBook.push(book);
        localStorage.setItem("book-list", JSON.stringify(storedBook));
        alert('added successfully local storage');
    }
    else{
        alert('book already exist');
    }
}

export const getFromLocalStorage = () => {
    const book = JSON.parse(localStorage.getItem('book-list')) || [];
    return book;
}