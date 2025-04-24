import { useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import Cookies from "universal-cookie";
import { PropsUsers } from "../view/Login";

type PropsNav = {
  title: string;
  path: string;
};

const navList: PropsNav[] = [
  {
    title: "Home Product",
    path: "/",
  },
  {
    title: "Cart",
    path: "/cart",
  },
  {
    title: "Todo list (add product)",
    path: "/todo",
  },
];

function NavLink({
  afterNavigate = () => {},
}: {
  afterNavigate?: (prop: PropsNav) => void;
}) {
  const nav = useNavigate();
  const { cart } = useCart();
  const cookie = new Cookies();
  const token: PropsUsers | undefined = cookie.get("token");
  return navList?.map((item: PropsNav) => (
    <div
      style={{
        cursor: "pointer",
      }}
      onClick={() => {
        nav(item.path);
        afterNavigate(item);
      }}
      key={item.path}
    >
      <span>{item.title}</span>
      {item.path === "/cart" && cart?.length !== 0 && token?.email && (
        <span>({cart?.length})</span>
      )}
    </div>
  ));
}

export default NavLink;
