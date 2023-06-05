import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Korzinka, NotFound, Single } from "./pages";
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
