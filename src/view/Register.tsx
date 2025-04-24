/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState } from "react";
import TextField from "../components/TextField";
import Button from "../components/Button";
import Cookies from "universal-cookie";
import { Navigate, useNavigate } from "react-router-dom";
import { PropsUsers } from "./Login";

function Register() {
  const cookie = new Cookies();
  const nav = useNavigate();
  const token = cookie.get("token");
  const user: PropsUsers[] | undefined = cookie.get("users");
  const [users, setUsers] = useState<PropsUsers[]>(user ?? []);
  const refInputName = useRef<Pick<HTMLInputElement, "value">>({
    value: "",
  });
  const refInputEmail = useRef<Pick<HTMLInputElement, "value">>({
    value: "",
  });
  const refInputPassword = useRef<Pick<HTMLInputElement, "value">>({
    value: "",
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userRegister = users?.find(
        (item) => item.email === refInputEmail.current.value
      );
      if (userRegister) {
        return alert(`${userRegister.email}, is already exist`);
      }
      const clone = [...users];
      clone.push({
        email: refInputEmail.current.value,
        name: refInputName.current.value,
        password: refInputPassword.current.value,
        id: new Date().getTime(),
      });
      setUsers(clone);
      cookie.set("users", clone, { path: "/" });
      nav("/login", { replace: true });
    } catch (error) {
      console.log(error);
    } finally {
      refInputName.current.value = "";
      refInputEmail.current.value = "";
      refInputPassword.current.value = "";
    }
  };

  if (token) return <Navigate to="/" replace />;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100dvh",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "300px",
          border: "grey solid 1px",
          padding: "40px 20px",
          borderRadius: "5px",
        }}
      >
        <h1>Register</h1>
        <div style={{ display: "grid" }}>
          <label>Name</label>
          <TextField
            onChange={(i) => (refInputName.current.value = i.target.value)}
            ref={refInputName as any}
          />
        </div>
        <div style={{ display: "grid", margin: "10px 0px" }}>
          <label>Email</label>
          <TextField
            onChange={(i) => (refInputEmail.current.value = i.target.value)}
            ref={refInputEmail as any}
            type="email"
          />
        </div>
        <div style={{ display: "grid", margin: "10px 0px" }}>
          <label>Password</label>
          <TextField
            onChange={(i) => (refInputPassword.current.value = i.target.value)}
            ref={refInputPassword as any}
            type="password"
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button>Register</Button>
          <a
            onClick={() => nav("/login")}
            style={{
              color: "blue",
              cursor: "pointer",
            }}
          >
            Login here!
          </a>
        </div>
      </form>
    </div>
  );
}

export default Register;
