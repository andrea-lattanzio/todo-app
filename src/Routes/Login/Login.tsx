import login from "./api/post.login";
import LoginForm from "./components/LoginForm";
import { LoginFormSchema } from "./types/login";

const Login = () => {
  const onSubmit = async (data: LoginFormSchema) => {
    await login(data);
  };

  return (
    <div>
      <LoginForm onSubmitForm={onSubmit} />
    </div>
  );
};

export default Login;
