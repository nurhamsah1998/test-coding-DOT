import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";

type PropsNav = {
  title: string;
  path: string;
};
const navList: PropsNav[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Todo list",
    path: "/todo",
  },
];
function Drawer() {
  const nav = useNavigate();
  return (
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "50px",
          backgroundColor: "#000",
          color: "#fff",
          padding: "20px",
        }}
      >
        {navList?.map((item: PropsNav) => (
          <div onClick={() => nav(item.path)} key={item.path}>
            <span
              style={{
                cursor: "pointer",
              }}
            >
              {item.title}
            </span>
          </div>
        ))}
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
