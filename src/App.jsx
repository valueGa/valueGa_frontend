import { RouterProvider } from "react-router-dom";
import "./App.css";
import MainRouter from "~/routers/main-router.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="w-full h-full">
      <RouterProvider router={MainRouter}></RouterProvider>
    </div>
  );
}

export default App;
