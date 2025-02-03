import { useState } from "react";
import login from "./api/post.login";
import LoginForm from "./components/LoginForm";
import { LoginFormSchema } from "./types/login.types";
import Spinner from "../../components/Spinner";

const Login = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: LoginFormSchema) => {
    setLoading(true);
    await login(data);
    setLoading(false);
  };

  return (
    <div>{loading ? <Spinner /> : <LoginForm onSubmitForm={onSubmit} />}</div>
  );
};

export default Login;
