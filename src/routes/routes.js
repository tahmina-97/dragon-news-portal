import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Category from "../pages/Category/Category";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import News from "../pages/News/News";
import TermsAndConditions from "../pages/Terms/TermsAndConditions";
import PrivateRoute from "./PrivateRoute/PrivateRoute";


export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            {
                path: '/',
                loader: () => fetch('https://dragon-news-server-khaki.vercel.app/news'),
                element: <Home></Home>
            },

            {
                path: '/category/:id',
                loader: ({ params }) => fetch(`https://dragon-news-server-khaki.vercel.app/category/${params.id}`),
                element: <Category></Category>
            },
            {
                path: '/news/:id',
                loader: ({ params }) => fetch(`https://dragon-news-server-khaki.vercel.app/news/${params.id}`),
                element: <PrivateRoute><News></News></PrivateRoute>
            },

            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <TermsAndConditions></TermsAndConditions>
            },
        ]
    }
])
