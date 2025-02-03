import { useContext, useState } from "react";
import login from "./api/post.login";
import LoginForm from "./components/LoginForm";
import { LoginFormSchema, LoginResponse } from "./types/login.types";
import Spinner from "../../components/Spinner";
import { AuthContext } from "../../context/auth.context";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = async (data: LoginFormSchema) => {
    setLoading(true);
    const response: LoginResponse = await login(data);
    context.setUser(response.user);
    setLoading(false);
    navigate('/');
  };

  return (
    <div>{loading ? <Spinner /> : <LoginForm onSubmitForm={onSubmit} />}</div>
  );
};

export default Login;
