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
    element: <Upload/>,

  }
]);


export default App;