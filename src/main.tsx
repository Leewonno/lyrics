import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
import StoreProvider from "./StoreProvider";
import { initGA } from "./lib/analytics";

if (process.env.NODE_ENV === "production") {
  initGA();
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StoreProvider>
    <RouterProvider router={router} />
  </StoreProvider>
);
