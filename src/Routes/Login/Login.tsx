import LoginForm, { LoginFormSchema } from "./components/LoginForm";

const Login = () => {
  const onSubmit = (data: LoginFormSchema) => {
    console.log(data);
  }

  return (
    <div>
      <LoginForm onSubmitForm={onSubmit}/>
    </div>
  );
}

export default Login;