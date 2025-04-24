/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef } from "react";
import TextField from "../components/TextField";
import Button from "../components/Button";
import Cookies from "universal-cookie";
import { Navigate, useNavigate } from "react-router-dom";

export type PropsUsers = {
  email: string;
  name: string;
  password: string;
  id: any;
};
function Login() {
  const cookie = new Cookies();
  const nav = useNavigate();
  const token = cookie.get("token");
  const user: PropsUsers[] | undefined = cookie.get("users");
  const refInputEmail = useRef<Pick<HTMLInputElement, "value">>({
    value: "",
  });
  const refInputPassword = useRef<Pick<HTMLInputElement, "value">>({
    value: "",
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userLogin = user?.find(
        (item) => item.email === refInputEmail.current.value
      );
      if (
        !userLogin ||
        userLogin.password?.toLowerCase() !==
          refInputPassword.current.value?.toLowerCase()
      ) {
        return alert("Error login credential");
      }
      refInputEmail.current.value = "";
      cookie.set("token", userLogin, { path: "/" });
      nav("/todo", { replace: true });
    } catch (error) {
      console.log(error);
    } finally {
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
        <h1>Login</h1>
        <div style={{ display: "grid" }}>
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
          <Button>Login</Button>
          <a
            onClick={() => nav("/register")}
            style={{
              color: "blue",
              cursor: "pointer",
            }}
          >
            Register here!
          </a>
        </div>
      </form>
    </div>
  );
}

export default Login;
