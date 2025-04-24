/* eslint-disable @typescript-eslint/no-explicit-any */
import TextField from "../../../components/TextField";
import Button from "../../../components/Button";
import Ads from "./Ads";

function LeftSection({
  refInput,
  handleSubmit,
  isLoading,
}: {
  refInput: any;
  isLoading: boolean;
  handleSubmit: (prop: React.FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <div
      style={{
        flex: 1,
      }}
    >
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <TextField
            isLoading={isLoading}
            ref={refInput}
            onChange={(e) => (refInput.current.value = e.target.value)}
            sx={{
              width: "100%",
            }}
          />
          <Button isLoading={isLoading} type="submit">
            Create
          </Button>
        </div>
        {isLoading && (
          <span
            style={{
              fontSize: "12px",
              color: "gray",
            }}
          >
            sending...
          </span>
        )}
      </form>
      <div className="container-form-ads">
        <Ads />
      </div>
    </div>
  );
}

export default LeftSection;
