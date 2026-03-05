import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CardProvider.jsx";
import { ToastContainer, Bounce } from "react-toastify";
import { Auth0Provider } from "@auth0/auth0-react";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CartProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <Auth0Provider
        domain="dev-ywd847qg8sw0w4a3.us.auth0.com"
        clientId="Cqg7ilXgmovq2r2l1tum6hPnITh6lmgB"
        authorizationParams={{ redirect_uri: window.location.origin }}
        cacheLocation="localstorage"
      >
        <App />
      </Auth0Provider>
    </CartProvider>
  </BrowserRouter>,
);
