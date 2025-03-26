import { useLoaderData } from "react-router-dom";

export const profileLoader = async () => {
  const token = localStorage.getItem('authToken');
  const response = await fetch('http://localhost:3000/user', {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: 'include',
  });
  const data = await response.json();
  console.log(data);
  return { data }
}



const Profile = () => {
  const { data } = useLoaderData();


	return (
		<div className="flex items-center h-screen w-full justify-center">
			<div className="max-w-xs">
				<div className="bg-white shadow-xl rounded-lg py-3">
					<div className="p-2">
						<h3 className="text-center text-xl text-gray-900 font-medium leading-8">
							{data.name}
						</h3>
						<table className="text-xs my-3">
							<tbody>
								<tr>
									<td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
									<td className="px-2 py-2">{data.email}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
