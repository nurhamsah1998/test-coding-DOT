const TextField: React.FunctionComponent<
  React.InputHTMLAttributes<HTMLInputElement> & {
    isLoading?: boolean;
    ref?: React.Ref<HTMLInputElement>;
    sx?: React.CSSProperties;
  }
> = ({ sx, ref, isLoading, ...props }) => {
  return (
    <input
      ref={ref}
      style={{
        backgroundColor: isLoading ? "#a9a9a9" : "#f5f5f5",
        cursor: isLoading ? "not-allowed" : "text",
        color: isLoading ? "gray" : "#000",
        border: "#000 1px solid",
        borderRadius: "5px",
        outline: "none",
        padding: "5px 10px",
        fontSize: "16px",
        ...sx,
      }}
      {...props}
    />
  );
};
export default TextField;
