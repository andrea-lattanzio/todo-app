import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginResponse } from "../Login/types/login.types";
import { RegisterFormSchema } from "./types/register.types";
import register from "./api/register";
import Spinner from "../../components/Spinner";
import RegisterForm from "./components/RegisterForm";
import { AuthContext } from "../../context/auth.context";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const context = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: RegisterFormSchema) => {
    setLoading(true);
    handleRegister(data);
    setLoading(false);
  };

  const handleRegister = async (data: RegisterFormSchema) => {
    try {
      const response: LoginResponse = await register(data);
      context.setUser(response.user);
      localStorage.setItem("authToken", response.token);
      navigate("/");
    } catch (err) {
      if (err instanceof Error) setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen w-full">
      {loading ? (
        <Spinner />
      ) : (
        <RegisterForm onSubmitForm={onSubmit} error={error} />
      )}
    </div>
  );
};

export default Register;
