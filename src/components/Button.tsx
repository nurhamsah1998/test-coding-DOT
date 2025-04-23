import { BGVariant } from "./types";

// eslint-disable-next-line react-refresh/only-export-components
export const colorVariant = {
  default: "#000",
  error: "#aa2e25",
  success: "#357a38",
  info: "#0276aa",
};

const Button: React.FunctionComponent<
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    isLoading?: boolean;
    sx?: React.CSSProperties;
    colorTheme?: BGVariant;
  }
> = ({ children, colorTheme = "default", sx, isLoading, ...props }) => {
  return (
    <button
      style={{
        backgroundColor: isLoading ? "#a9a9a9" : colorVariant[colorTheme],
        cursor: isLoading ? "not-allowed" : "pointer",
        color: isLoading ? "gray" : "#fff",
        padding: "5px 10px",
        fontSize: "18px",
        borderRadius: "5px",
        outline: "none",
        border: "none",
        transition: "0.5s all",
        textTransform: "capitalize",
        ...sx,
      }}
      {...props}
      disabled={isLoading}
    >
      {children}
    </button>
  );
};
export default Button;
