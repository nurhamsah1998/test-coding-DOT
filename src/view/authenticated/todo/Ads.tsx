import { colorVariant } from "../../../components/Button";

function Ads() {
  return (
    <div>
      <div
        style={{
          backgroundColor: colorVariant.info,
          borderRadius: "10px",
          padding: "20px",
          color: "#fff",
        }}
      >
        <h1>Management</h1>
        <h4>TODO List By Nurhamsah</h4>
      </div>
      <div
        style={{
          backgroundColor: colorVariant.success,
          borderRadius: "10px",
          padding: "20px",
          color: "#fff",
          marginTop: "10px",
        }}
      >
        <h1>Online Test for DOT Indonesia</h1>
      </div>
    </div>
  );
}

export default Ads;
