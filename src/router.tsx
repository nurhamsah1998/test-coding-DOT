import { Navigate, useRoutes } from "react-router-dom";
import LoginPage from "./pages/login.page";
import NotFound from "./pages/not-found";
import Drawer from "./components/Drawer";
import Home from "./view/authenticated/Home";
import ProductDetail from "./view/authenticated/ProductDetail";
import RegisterPage from "./pages/register.page";
import TodolistPage from "./pages/todo.page";

function Router() {
  return useRoutes([
    {
      element: <Drawer />,
      path: "/",
      children: [
        {
          element: <Home />,
          index: true,
        },
        {
          element: <ProductDetail />,
          path: "/product/:id",
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
