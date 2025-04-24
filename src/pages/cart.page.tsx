import CartView from "../view/authenticated/cart";
import Cookies from "universal-cookie";
import { Navigate } from "react-router-dom";

function CartPage() {
  const cookie = new Cookies();
  const token = cookie.get("token");
  if (!token) return <Navigate to="/login" replace />;
  return (
    <div>
      <CartView />
    </div>
  );
}

export default CartPage;
