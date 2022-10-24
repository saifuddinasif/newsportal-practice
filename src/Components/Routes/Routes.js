import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Category from "../Category/Category";
import Main from "../Layout/Main";
import News from "../News/News";
import Profile from "../Profile/Profile";
import TermsCon from "../Register/Terms and Con/TermsCon";
import Home from './../Home/Home';
import Login from './../Login/Login';
import Register from './../Register/Register';
import PrivateRoutes from "./PrivateRoute/PrivateRoutes";



export  const routes = createBrowserRouter([

   {
    path : '/',

    element: <Main></Main>,

    children :[

       
      {
         path : '/',
         element: <Home></Home>,
         loader: () => fetch(`http://localhost:5100/news`)
      },

      {
         path : '/category/:id',
         
         element: <Category></Category> ,

         loader: ({params}) => fetch(`http://localhost:5100/category/${params.id}`)
      },

      
      {
         path : '/news/:id',

         element:<PrivateRoutes> <News></News></PrivateRoutes>,

         loader : ({params}) => fetch(`http://localhost:5100/news/${params.id}`)
      },


      {

         path : '/login',

         element: <Login></Login>,
     
      },

      {

         path : '/register',

         element: <Register></Register>,
     
      },

      {

         path : '/profile',

         element: <Profile></Profile>,
     
      },
      {

         path : '/terms',

         element: <TermsCon></TermsCon>
     
      },

     
       


    ]
   }


]);

