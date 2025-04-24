import { useState } from "react";
import { PropTodo } from "../todo";
import Cookies from "universal-cookie";
import CardProduct from "./CardProduct";

function HomeProduct() {
  const cookie = new Cookies();
  const todoCookies = cookie.get("todo");
  const [product] = useState<PropTodo[]>(todoCookies ?? []);
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {product?.length !== 0 ? (
          product.map((item, index) => <CardProduct key={index} item={item} />)
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
            <h1>Sorry we dont have any product</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomeProduct;
