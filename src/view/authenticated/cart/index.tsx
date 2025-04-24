import CardProduct from "../homeProduct/CardProduct";
import { useCart } from "../../../hooks/useCart";
import Button from "../../../components/Button";
import Cookies from "universal-cookie";

function CartView() {
  const cookie = new Cookies();
  const { cart, setCart } = useCart();
  const handleDeleteAllCart = () => {
    const isDeleteConfirm = confirm(
      `Are you sure want to delete all this cart?`
    );
    if (isDeleteConfirm) {
      setCart([]);
      cookie.remove("cart", { path: "/" });
    }
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h1>My Cart List</h1>
        {cart?.length !== 0 && (
          <Button onClick={handleDeleteAllCart} colorTheme="error">
            Delete All
          </Button>
        )}
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {cart?.length !== 0 ? (
          cart?.map((item, index) => (
            <CardProduct disabledOnlick key={index} item={item} />
          ))
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              width: "100%",
              marginTop: "20px",
              color: "gray",
            }}
          >
            <h1>you dont have any product</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartView;
