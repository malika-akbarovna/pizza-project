import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  AddPizza,
  Home,
  Korzinka,
  NotFound,
  Oplata,
  SingIn,
  Single,
  SingUp,
} from "./pages";
import { Pustoy } from "./pages/pustaya/Pustoy";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
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
      path: "/singin",
      element: <SingIn />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} fallbackElement={<h3>loading</h3>} />;
}

export default App;
