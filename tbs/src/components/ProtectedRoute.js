import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Login from "../pages/Login";

const useAuth = () => {
  const {id} = useSelector((state) => state.Auth.user);
  return id;
};

const ProtectedRoutesUser = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Login />;
};

export default ProtectedRoutesUser;