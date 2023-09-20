import React from "react";
import {createBrowserRouter,RouterProvider} from "react-router-dom";


import HomePage from "./components/HomePage";
import Conversation from "./components/Conversation";


const router=createBrowserRouter([
  {
    path:"/",
    element:<HomePage></HomePage>
  },
  {
    path:"/home/conversation",
    element:<Conversation></Conversation>
  }
]);
function App() {
  return (
   <main>
    <RouterProvider router={router}></RouterProvider>
   </main>
  );
}

export default App;
