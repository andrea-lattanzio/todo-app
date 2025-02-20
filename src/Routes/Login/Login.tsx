import LoginForm from "./components/LoginForm";
import { LoginFormSchema } from "./types/login.types";
import Spinner from "../../components/Spinner";
import useLogin from "./hooks/useLogin";

const Login = () => {
  const { handleLogin, isPending, error } = useLogin();

  const onSubmit = async (data: LoginFormSchema) => {
    handleLogin(data);
  };

  if (isPending) return <Spinner />;

  return (
    <div className="flex items-center justify-center h-full w-full">
      <LoginForm onSubmitForm={onSubmit} error={error?.message} />
    </div>
  );
};

export default Login;
