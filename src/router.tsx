import { Navigate, useRoutes } from "react-router-dom";
import LoginPage from "./pages/login.page";
import NotFound from "./pages/not-found";
import Drawer from "./components/Drawer";
import RegisterPage from "./pages/register.page";
import TodolistPage from "./pages/todo.page";
import CartPage from "./pages/cart.page";
import ProductDetailPage from "./pages/product-detail.page";
import HomeProductPage from "./pages/home-product.page";

function Router() {
  return useRoutes([
    {
      element: <Drawer />,
      path: "/",
      children: [
        {
          element: <HomeProductPage />,
          index: true,
        },
        {
          element: <ProductDetailPage />,
          path: "/product/:id",
        },
        {
          element: <CartPage />,
          path: "/cart",
        },
        {
          element: <TodolistPage />,
          path: "/todo",
        },
      ],
    },
    {
      element: <LoginPage />,
      path: "/login",
    },
    {
      element: <RegisterPage />,
      path: "/register",
    },
    {
      element: <NotFound />,
      path: "/404",
    },
    {
      element: <Navigate to="/404" replace />,
      path: "*",
    },
  ]);
}

export default Router;
