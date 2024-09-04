import React from 'react';
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import App from './routes/App/app';
import EditProducts from './routes/editProducts/editproducts'
import PostProducts from './routes/postProducts/postproducts'


const router = createBrowserRouter([
    {
        path : '/',
        element : <App />
    },
    {
        path : '/post',
        element : <PostProducts />
    },
    {
        path : '/edit',
        element : <EditProducts />
    },

])

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
    <RouterProvider router={router}/>
   </React.StrictMode>,
);