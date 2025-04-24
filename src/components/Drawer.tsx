import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Cookies from "universal-cookie";
import { PropsUsers } from "../view/Login";
import Button from "./Button";
import "./components.style.css";
import { useState } from "react";
import NavLink from "./NavLink";

function Drawer() {
  const cookie = new Cookies();
  const token: PropsUsers | undefined = cookie.get("token");
  const nav = useNavigate();
  const [show, setShow] = useState<boolean>(false);
  const handleLogOut = () => {
    const isDeleteConfirm = confirm(`Are you sure want to logout ?`);
    if (isDeleteConfirm) {
      cookie.remove("token", { path: "/" });
      setShow(false);
      nav("/");
    }
  };

  return (
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#000",
          color: "#fff",
          padding: "20px",
        }}
      >
        <h4>
          {token?.email ? "Hello, " : "Test Code DOT"}
          {token?.name}
        </h4>
        <div
          className="nav-mobile"
          style={{
            width: show ? "200px" : "0px",
            padding: show ? "20px" : "0px",
          }}
        >
          <Button onClick={() => setShow(!show)} colorTheme="info">
            Close
          </Button>
          <div
            style={{
              display: "grid",
              marginTop: "30px",
              gap: "10px",
            }}
          >
            <NavLink afterNavigate={() => setShow(!show)} />
            {token?.email && (
              <Button
                onClick={handleLogOut}
                sx={{
                  marginTop: "30px",
                }}
                colorTheme="error"
              >
                Logout
              </Button>
            )}
          </div>
        </div>
        <div className="nav-container">
          <NavLink />
          {token?.email && (
            <Button onClick={handleLogOut} colorTheme="error">
              Logout
            </Button>
          )}
        </div>
        <div onClick={() => setShow(!show)} className="nav-button-parent">
          <span>|||</span>
        </div>
      </nav>
      <section
        style={{
          padding: "10px",
          minHeight: "calc(100dvh - 177px)",
        }}
      >
        <Outlet />
      </section>
      <Footer />
    </div>
  );
}

export default Drawer;
