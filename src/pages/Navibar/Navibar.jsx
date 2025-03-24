import { Link } from "react-router-dom";

const Navibar = () => {
	return (
		<header className="flex justify-between border-b border-gray-300 p-2">
			<Link to="/" className="flex items-center text-4xl text-brand">
				<h1>Navbar</h1>
			</Link>
			<nav className="flex items-center gap-4 font-semibold">
        <Link to='/createAccount'>Sing Up</Link>
				<Link to="/login">login</Link>
				<Link to="/logout">logout</Link>
				<Link to="/profile">profile</Link>
			</nav>
		</header>
	);
};

export default Navibar;
