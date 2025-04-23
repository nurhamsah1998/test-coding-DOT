import Button from "./Button";
import { PropTodo } from "../view/authenticated/todo";

function CardTodo({
  item,
  onChangeCheckbox = () => {},
  handleDelete = () => {},
}: {
  item: PropTodo;
  onChangeCheckbox: (prop: React.ChangeEvent<HTMLInputElement>) => void;
  handleDelete: () => void;
}) {
  console.log("RE_RENDER");
  return (
    <div
      style={{
        backgroundColor: "#f3f3f3",
        display: "flex",
        alignItems: "center",
        gap: "20px",
        padding: "10px",
      }}
    >
      <div>
        <input
          defaultChecked={item.isDone}
          onChange={onChangeCheckbox}
          type="checkbox"
          style={{
            width: "40px",
            height: "40px",
          }}
        />
      </div>
      <div style={{ width: "100%" }}>
        <div>
          <span
            style={{
              fontSize: "13px",
              color: "gray",
            }}
          >
            todo name :{" "}
          </span>
          <h2
            style={{
              marginTop: "-7px",
            }}
          >
            {item?.name}
          </h2>
        </div>
        <div
          style={{
            marginTop: "10px",
            display: "flex",
            gap: "10px",
          }}
        >
          <Button colorTheme="error" onClick={handleDelete}>
            Delete todo
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
          }}
        >
          <span
            style={{
              fontSize: "14px",
              color: "gray",
            }}
          >
            {item.createdAt || "-"}{" "}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CardTodo;
