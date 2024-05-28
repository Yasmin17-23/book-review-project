
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home";
import ListedBooks from '../pages/ListedBooks/ListedBooks'
import ReadPages from '../pages/ReadPages/ReadPages'


const router = createBrowserRouter([
    {
      path: '/',
      element: <Root></Root>,
      children: [
         {
            path: '/',
            element: <Home></Home>
         },
         {
            path: '/listedbooks',
            element: <ListedBooks></ListedBooks>
         },
         {
            path: '/readpages',
            element: <ReadPages></ReadPages>
         }
      ]
    },
  ]);

export default router;
