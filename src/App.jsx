import { Outlet } from "react-router-dom";
import Navibar from "./pages/Navibar/Navibar";

const App = () => {
	return (
		<>
			<Navibar />
			<Outlet />
		</>
	);
};

export default App;
