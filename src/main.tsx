import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { initGA } from "./lib/analytics";
import router from "./Router";
import StoreProvider from "./StoreProvider";

if (process.env.NODE_ENV === "production") {
	initGA();
}

const root = document.getElementById("root");
if (!root) throw new Error("Root element not found");

ReactDOM.createRoot(root).render(
	<StoreProvider>
		<RouterProvider router={router} />
	</StoreProvider>,
);
