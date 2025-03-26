import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async() => {
      const response = await fetch('http://localhost:3000/logout', {
        method: "DELETE",
        credentials: 'include',
      });

      if (response.ok){
        console.log("Logged out successfully");
        navigate('/');
      } else {
        console.log('Logout failed');
      }
    };
    logout();
  }, [navigate]);
  return null;
}

export default Logout;