import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import PageHome from "./pages/Home";
import PageBasket from "./pages/Basket";
import Sneaker from "./pages/Sneaker";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/SneakMaxV2/",
          element: <PageHome  />,
        },
        {
          path: "/SneakMaxV2/basket/",
          element: <PageBasket />,
        },
        {
          path: "/SneakMaxV2/sneakers/:id",
          element: <Sneaker />,
        },
      ],
    },
  ]);
  
  export default router;
