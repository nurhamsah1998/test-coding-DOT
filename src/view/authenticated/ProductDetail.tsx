/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import NotFound from "../../pages/not-found";
import Cookies from "universal-cookie";
import { PropTodo } from "./todo";
import Button from "../../components/Button";
import "./todo.style.css";
import { useCart } from "../../hooks/useCart";
import { PropsUsers } from "../Login";

function ProductDetail() {
  const { id } = useParams();
  const cookie = new Cookies();
  const productList: PropTodo[] | undefined = cookie.get("todo");
  const token: PropsUsers | undefined = cookie.get("token");
  /// CART
  const { cart, setCart } = useCart();
  const productSelected = productList?.find((item) => item.id == id);
  const isAlreadyInCart = cart?.find((item) => item.id == id);
  const handleClickCart = () => {
    if (!token?.email) return;
    const clone = [...(cart as any)];
    clone.push(productSelected || {});
    setCart(clone);
    cookie.set("cart", clone, { path: "/" });
  };
  if (!productSelected) return <NotFound />;
  return (
    <div className="container-detail-product">
      <title>{productSelected?.name || "-s"}</title>
      <div
        style={{
          flex: 1,
        }}
      >
        <img
          style={{
            width: "300px",
            height: "300px",
            borderRadius: "7px",
          }}
          src="https://images.pexels.com/photos/1484678/pexels-photo-1484678.jpeg?auto=compress&cs=tinysrgb&w=640&h=960&dpr=1"
        />
      </div>
      <div
        style={{
          flex: 2,
        }}
      >
        <div>
          <span className="small-text">Product name</span>
          <h1
            style={{
              lineHeight: "14px",
            }}
          >
            {productSelected.name}
          </h1>
        </div>
        <div
          style={{
            marginTop: "20px",
          }}
        >
          <span className="small-text">Price</span>
          <h1
            style={{
              lineHeight: "14px",
            }}
          >
            {productSelected.name}
          </h1>
        </div>
        <div
          style={{
            marginTop: "20px",
          }}
        >
          <span className="small-text">Desc</span>
          <h1
            style={{
              lineHeight: "14px",
            }}
          >
            {productSelected.email}
          </h1>
        </div>
        {token?.email && (
          <div
            style={{
              marginTop: "30px",
            }}
          >
            <Button
              isLoading={Boolean(isAlreadyInCart)}
              onClick={handleClickCart}
              colorTheme="success"
            >
              Add to cart
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetail;
