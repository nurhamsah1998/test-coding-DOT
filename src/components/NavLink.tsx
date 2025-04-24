import { useNavigate } from "react-router-dom";

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

function NavLink({
  afterNavigate = () => {},
}: {
  afterNavigate?: (prop: PropsNav) => void;
}) {
  const nav = useNavigate();
  return navList?.map((item: PropsNav) => (
    <div
      onClick={() => {
        nav(item.path);
        afterNavigate(item);
      }}
      key={item.path}
    >
      <span
        style={{
          cursor: "pointer",
        }}
      >
        {item.title}
      </span>
    </div>
  ));
}

export default NavLink;
