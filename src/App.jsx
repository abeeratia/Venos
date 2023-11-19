import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Component/Layout/Layout'
import Home from './Component/Home/Home'
import About from './Component/About/About'
import Servises from './Component/Servises/Servises'
import Ourview from './Component/Ourview/Ourview'
import Ourworks from './Component/Ourworks/Ourworks'
import Contactus from './Component/Contactus/Contactus'
import Content from './Component/Content/Content'


export default function App() {




  const root= createBrowserRouter([
    {path:'/'  , element:<Layout/> ,children:[
 
     {index:true  , element:<Home/>},
     {path:'/Home'  , element:<Home/>},
     {path:'/About'  , element:<About/>},
     {path:'/Servises'  , element:<Servises/>},
     {path:'/Ourview'  , element:<Ourview/>},
     {path:'/Ourworks'  , element:<Ourworks/>},
     {path:'/Contactus'  , element:<Contactus/>},
     {path:'/Content'  , element:<Content/>},
     {path:'*', element: <div className=' w-50 m-auto d-flex vh-100 justify-content-center align-items-center'>
     <h2 className='fs-1 text-danger'>Not Found The Page</h2>
  </div>}
    ]},
    
 ])     
 
 

 
   return <>
    <RouterProvider router = {root}/>
  
 
  </>
   
 }
 
 

