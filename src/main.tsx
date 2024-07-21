import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter.tsx";
import { Provider } from "./provider/Provider.tsx";
import { CartProvider } from "./provider/CartProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
        <Provider>
          <AppRouter />
        </Provider>
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
);
