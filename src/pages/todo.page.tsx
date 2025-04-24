import Todo from "../view/authenticated/todo";
import Cookies from "universal-cookie";
import { Navigate } from "react-router-dom";

function TodolistPage() {
  const cookie = new Cookies();
  const token = cookie.get("token");
  if (!token) return <Navigate to="/login" replace />;
  return (
    <div>
      <title>Todo</title>
      <Todo />
    </div>
  );
}

export default TodolistPage;
