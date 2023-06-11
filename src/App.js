import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Korzinka, Login, NotFound, Oplata, Single } from "./pages";
// import { addPizza } from "./pages";
import { Pustoy } from "./pages/pustaya/Pustoy";
// import { addPizza } from "./pages/addNewPizza/addPizza";
import { AddPizza } from "./pages/addNewPizza/AddPizza";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/korzinka",
      element: <Korzinka />,
    },
    {
      path: "/pustoy",
      element: <Pustoy />,
    },
    {
      path: "/oplata",
      element: <Oplata />,
    },
    {
      path: "/new",
      element: <AddPizza />,
    },
    {
      path: "/single/:id",
      element: <Single />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} fallbackElement={<h3>loading</h3>} />;
}

export default App;
