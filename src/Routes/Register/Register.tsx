import { RegisterFormSchema } from "./types/register.types";
import Spinner from "../../components/Spinner";
import RegisterForm from "./components/RegisterForm";
import useRegister from "./hooks/useRegister";

const Register = () => {
  const { handleRegister, isPending, error } = useRegister();

  const onSubmit = async (data: RegisterFormSchema) => {
    handleRegister(data);
  };

  return (
    <div className="flex items-center justify-center h-screen w-full">
      {isPending ? (
        <Spinner />
      ) : (
        <RegisterForm onSubmitForm={onSubmit} error={error?.message} />
      )}
    </div>
  );
};

export default Register;
