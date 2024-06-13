import { useState } from "react";
import "./App.css";
import MainRouter from "./routers/main-router.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <RouterProvider router={MainRouter}></RouterProvider>

    // <h1 className="text-3xl font-bold underline ">
    //   Hello world!11111
    // </h1>
  );
}

export default App;
