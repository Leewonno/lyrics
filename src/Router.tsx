// Router.tsx
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Album from "./album/Album";
import { Main } from "./main/Main";
import { Member } from "./member/Member";
import { Translate } from "./translate/Translate";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "",
				element: <Main />,
			},
			{
				path: "/translate",
				element: <Translate />,
			},
			{
				path: "/member",
				element: <Member />,
			},
			{
				path: "/album",
				element: <Album />,
			},
		],
	},
]);

export default router;
