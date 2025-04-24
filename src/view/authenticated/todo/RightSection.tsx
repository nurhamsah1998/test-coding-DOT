/* eslint-disable @typescript-eslint/no-explicit-any */
import Cookies from "universal-cookie";
import { PropTodo } from ".";
import CardTodo from "../../../components/CardTodo";
import { useMemo } from "react";
import { PropsUsers } from "../../Login";

function RightSection({
  todo,
  setTodo = () => {},
}: {
  todo: PropTodo[];
  setTodo: React.Dispatch<React.SetStateAction<PropTodo[]>>;
}) {
  const cookie = new Cookies();
  const token: PropsUsers | undefined = cookie.get("token");
  const handleChangeCheckBox = (checked: boolean, selected: PropTodo) => {
    setTodo((prev: PropTodo[]) => {
      for (let index = 0; index < prev.length; index++) {
        if (prev[index].id === selected.id) {
          (prev[index].isDone as any) = checked;
        }
      }
      cookie.set("todo", prev, { path: "/" });
      return prev;
    });
  };
  const handleDelete = (selected: PropTodo) => {
    const isDeleteConfirm = confirm(
      `Are you sure want to delete ${selected.name}`
    );
    if (isDeleteConfirm) {
      setTodo((prev: PropTodo[]) => {
        prev = prev.filter((td) => td.id !== selected.id);
        cookie.set("todo", prev, { path: "/" });
        return prev;
      });
    }
  };
  const dataRebuild = useMemo(() => {
    const result = todo.filter((item) => item.email === token?.email);
    return result.reverse();
  }, [todo, token]);

  return (
    <div
      style={{
        border: "#000 solid 2px",
        flex: 2,
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        height: "calc(100dvh - 160px)",
        overflowY: "auto",
        borderRadius: "10px",
      }}
    >
      {dataRebuild?.length !== 0 ? (
        dataRebuild.map((item: PropTodo) => (
          <CardTodo
            handleDelete={() => handleDelete(item)}
            key={item.id}
            onChangeCheckbox={(i) =>
              handleChangeCheckBox(i.target.checked, item)
            }
            item={item}
          />
        ))
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            color: "gray",
          }}
        >
          <h1>Horrey! you dont have any todo</h1>
        </div>
      )}
    </div>
  );
}

export default RightSection;
