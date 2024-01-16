import React from 'react'
import './App.css'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from './components/RootLayout';
import Home from './pages/Home';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path='/' element={<Home/>}/>
      </Route>
    )
  );

  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App