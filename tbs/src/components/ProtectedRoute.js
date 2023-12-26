import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Login from "../pages/Login";
import Layout from "./Layouts/Layout";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const {id} = useSelector((state) => state.Auth.user);
  return id;
};

const ProtectedRoutesUser = () => {
  const isAuth = useAuth();
  return isAuth ? 
  <Layout>
    <Outlet /> 
  </Layout>
  : <Login />;
};

export default ProtectedRoutesUser;