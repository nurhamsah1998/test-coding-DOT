import { useRef, useState } from "react";
import Cookies from "universal-cookie";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import { PropsUsers } from "../../Login";
import "./todo.style.css";

export type PropTodo = {
  name?: string;
  id?: number;
  isDone?: false;
  createdAt?: string;
  email?: string | undefined;
};
function Todo() {
  const cookie = new Cookies();
  const todoCookies = cookie.get("todo");
  const token: PropsUsers | undefined = cookie.get("token");
  const [todo, setTodo] = useState<PropTodo[]>(todoCookies ?? []);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const refInput = useRef<Pick<HTMLInputElement, "value">>({ value: "" });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (!refInput.current.value) {
        return alert(`Input is required!!`);
      }
      await new Promise((resolved) => {
        setTimeout(() => {
          resolved("success");
        }, 2000);
      });
      const clone = [...todo];
      let isSameName = false;
      for (let index = 0; index < clone.length; index++) {
        if (
          clone[index].name?.toLowerCase() ===
          refInput.current.value?.toLowerCase()
        ) {
          alert(`${refInput.current.value} Already exist! try something else!`);
          isSameName = true;
          break;
        }
      }
      if (isSameName) return;
      clone.push({
        name: refInput.current.value,
        id: new Date().getTime(),
        isDone: false,
        createdAt: new Date().toLocaleString(),
        email: token?.email,
      });
      setTodo(clone);
      refInput.current.value = "";
      cookie.set("todo", clone, { path: "/" });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="todo-container">
      <LeftSection
        isLoading={isLoading}
        refInput={refInput}
        handleSubmit={handleSubmit}
      />
      <RightSection todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default Todo;
