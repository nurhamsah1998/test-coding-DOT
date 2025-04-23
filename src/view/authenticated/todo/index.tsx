/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from "react";
import Cookies from "universal-cookie";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

export type PropTodo = {
  name?: string;
  id?: number;
  isDone?: false;
  createdAt: string;
};
function Todo() {
  const cookie = new Cookies();
  const todoCookies = cookie.get("todo");
  const [todo, setTodo] = useState<PropTodo[]>(todoCookies ?? []);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const refInput = useRef<Pick<HTMLInputElement, "value">>({ value: "" });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await new Promise((resolved) => {
        setTimeout(() => {
          resolved("success");
        }, 2000);
      });
      if (!refInput.current.value) {
        return alert(`Input is required!!`);
      }
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
    <div
      style={{
        display: "flex",
        gap: "20px",
      }}
    >
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
