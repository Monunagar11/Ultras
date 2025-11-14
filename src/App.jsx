import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./components/layouts/AppLayout";
import Home from "../src/pages/Home";
import NewArrivals from "../src/pages/NewArrivals";
import Mens from "../src/pages/Mens";
import Womens from "../src/pages/Womens";
import Shop from "../src/pages/Shop";
import Contact from "../src/pages/Contact";
import Cart from "../src/pages/Cart";
import Product from "../src/pages/ProductDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/newarraivals",
          element: <NewArrivals />,
        },
        {
          path: "/mens",
          element: <Mens />
        },
        {
          path: "/womens",
          element: <Womens />
        },
        {
          path: "/shop",
          element: <Shop />
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path : "/cart",
          element : <Cart />
        },
        {
          path: "/product",
          element: <Product />,
        },
      ],
    },
  ]);
  return (

      <RouterProvider router={router} />
      
  );
}

export default App;
