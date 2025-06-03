import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div class="fixed inset-0 bg-white bg-opacity-80 flex flex-col items-center justify-center z-50 space-y-4">
        <div class="w-16 h-16 border-4 border-indigo-500 border-dashed rounded-full animate-spin"></div>
        <p class="text-indigo-600 text-lg font-medium">Loading...</p>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"}></Navigate>;
};

export default PrivateRoute;
