import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Category from "../Category/Category";
import Main from "../Layout/Main";
import News from "../News/News";
import Home from './../Home/Home';



export  const routes = createBrowserRouter([

   {
    path : '/',

    element: <Main></Main>,

    children :[

       
      {
         path : '/',

         element: <Home></Home>,
      },

      {
         path : '/category/:id',

         element: <Category></Category> ,
      },

      
      {
         path : '/news/:id',

         element: <News></News>,
      },


     
       


    ]
   }


]);

