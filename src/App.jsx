import { RouterProvider } from "react-router-dom";
import "./App.css";
import MainRouter from "~/routers/main-router.jsx";

function App() {
  return <RouterProvider router={MainRouter}></RouterProvider>;
}

export default App;
