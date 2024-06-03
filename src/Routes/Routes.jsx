
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home";
import ListedBooks from '../pages/ListedBooks/ListedBooks'
import ReadPages from '../pages/ReadPages/ReadPages'
//import BookDetails from "../pages/BookDetails/BookDetails";
//import BookDetail from "../components/BookDetail/BookDetail";
import BookDetails from "../pages/BookDetails/BookDetails";
import ReadBooks from "../components/ReadBooks/ReadBooks";
import WishlistBooks from "../components/WishlistBooks/WishlistBooks";
import ErrorPages from "../pages/ErrorPages/ErrorPages";
import TopBooks from "../pages/TopBooks/TopBooks";
import Arrivals from "../pages/Arrivals/Arrivals";



const router = createBrowserRouter([
    {
      path: '/',
      element: <Root></Root>,
      errorElement: <ErrorPages></ErrorPages>,
      children: [
         {
            path: '/',
            element: <Home></Home>
         },
         {
            path: '/listedbooks',
            element: <ListedBooks></ListedBooks>, 
            children: [
               {
                  index: true,
                  element: <ReadBooks></ReadBooks>
               },
               {
                  path: 'wishlist',
                  element: <WishlistBooks></WishlistBooks>
               },
            ],  
         },
         {
            path: '/readpages',
            element: <ReadPages></ReadPages>
         },
         {
            path: '/topbooks',
            element: <TopBooks></TopBooks>
         },
         {
            path: '/arrivals',
            element: <Arrivals></Arrivals>
         },
         {
            path: '/book-details/:bookId',
            element: <BookDetails></BookDetails>,
            //loader: () => fetch('/public/data.json'),
          
         },
         
      ]
    },
  ]);

export default router;
