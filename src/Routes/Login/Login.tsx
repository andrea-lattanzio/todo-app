import { useContext, useState } from "react";
import login from "./api/login";
import LoginForm from "./components/LoginForm";
import { LoginFormSchema, LoginResponse } from "./types/login.types";
import Spinner from "../../components/Spinner";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const context = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: LoginFormSchema) => {
    setLoading(true);
    handleLogin(data);
    setLoading(false);
  };

  const handleLogin = async (data: LoginFormSchema) => {
    try {
      const response: LoginResponse = await login(data);
      context.setUser(response.user);
      localStorage.setItem("authToken", response.token);
      navigate("/");
    } catch (err) {
      if (err instanceof Error) setError(err.message);
    }
  };

  if (loading) return <Spinner />;

  return (
    <div className="flex items-center justify-center h-full w-full">
      <LoginForm onSubmitForm={onSubmit} error={error} />
    </div>
  );
};

export default Login;
