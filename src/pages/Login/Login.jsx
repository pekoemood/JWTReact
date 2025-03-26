import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();

	const defaultValues = {
		name: "",
		email: "",
		password: "",
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ defaultValues });

	const onsubmit = async ({ email, password }) => {
		const response = await fetch("http://localhost:3000/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
					email,
					password,
				},
			),
			credentials: 'include',
		});
    if(!response.ok){
      console.log("Sign up failed");
      return;
    }

    const data = await response.json();
		console.log(data);
    return navigate('/');
	};

	return (
		<>
			<div className="flex min-h-full flex-col justify-center px-6 py-12">
				<div className="mx-auto">
					<h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
						Login
					</h2>
				</div>
			</div>

			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<form className="space-y-6" onSubmit={handleSubmit(onsubmit, onerror)}>
					<div>
						<label className="block font-medium text-gray-900" htmlFor="name">
							Email
						</label>
						<div>
							<input
								className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600"
								id="email"
								type="email"
								{...register("email")}
							/>
						</div>
						<div>{errors.name?.message}</div>
					</div>
					<div>
						<label className="block font-medium text-gray-900" htmlFor="name">
							Password
						</label>
						<div>
							<input
								className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600"
								id="password"
								type="password"
								{...register("password")}
							/>
						</div>
						<div>{errors.name?.message}</div>
					</div>
					<div>
						<button
							type="submit"
							className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Login
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default Login;
