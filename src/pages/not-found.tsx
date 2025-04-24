import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const nav = useNavigate();
  return (
    <div
      style={{
        height: "100dvh",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>NotFound</h1>
      <Button onClick={() => nav("/")}>Go Back</Button>
    </div>
  );
}

export default NotFound;
