import SignIn from "./components/SignIn";
import Menu from "./components/Menu";
import Upload from "./components/Upload";
import Uploading from "./components/Uploading";
import Uploaded from "./components/Uploaded";
import UploadFileTable from "./components/UploadFileTable";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainContainer from "./components/MainContainer";



function App() {
  return (
    
      <div>
        <RouterProvider router={appRouter} />
      </div>
    
  );
}


export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
    
   
  },
  {
     path: "/upload",
    element: <MainContainer/>,

  },
  {
    path: "/table",
   element: <UploadFileTable/>,

 }
]);


export default App;