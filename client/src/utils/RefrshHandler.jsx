import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const RefreshHandler = ({ setAuthenticated }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setAuthenticated(true);
      if (
        location.pathname === "/" ||
        location.pathname === "/login" ||
        location.pathname === "/signup" // ✅ Fixed typo
      ) {
        navigate("/home", { replace: true }); // ✅ Prevent infinite redirects
      }
    }
  }, [location.pathname, navigate, setAuthenticated]); // ✅ Optimized dependency array

  return null;
};

export default RefreshHandler;
