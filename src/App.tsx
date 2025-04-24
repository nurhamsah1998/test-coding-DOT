import { BrowserRouter } from "react-router";
import Router from "./router";
import { CartProvider } from "./hooks/useCart";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Router />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
