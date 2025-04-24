import { PropTodo } from "../todo";
import { useNavigate } from "react-router-dom";

function CardProduct({
  item,
  disabledOnlick,
}: {
  item: PropTodo;
  disabledOnlick?: boolean;
}) {
  const nav = useNavigate();
  return (
    <div
      style={{
        backgroundColor: "#cbcbcb",
        padding: "10px",
        borderRadius: "7px",
        cursor: !disabledOnlick ? "pointer" : "auto",
      }}
      onClick={() => !disabledOnlick && nav(`product/${item.id}`)}
    >
      <div style={{ display: "grid" }}>
        <span
          style={{
            fontSize: "12px",
          }}
        >
          Product name :
        </span>
        <span
          style={{
            fontSize: "16px",
          }}
        >
          {item.name}
        </span>
      </div>
      <div
        style={{
          marginTop: "20px",
        }}
      >
        <span
          style={{
            fontSize: "12px",
          }}
        >
          Price :
        </span>
        <h6
          style={{
            fontSize: "14px",
          }}
        >
          {item.id}
        </h6>
      </div>
    </div>
  );
}

export default CardProduct;
