import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  LoginFormProps,
  LoginFormSchema,
  loginSchema,
} from "../types/login.types";
import FormError from "../../../components/ui/forms/Form.error";
import { NavLink } from "react-router-dom";

const LoginForm: React.FC<LoginFormProps> = ({ onSubmitForm, error }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginSchema),
    mode: "onSubmit",
  });

  return (
    <div className="flex flex-col sm:w-[90%] md:w-[50%] lg:w-[40%] xl:w-[30%]">
      <div className="space-y-6 rounded-2xl">
        <h2 className="text-3xl font-bold text-center text-white tracking-wider select-none">
          Login
        </h2>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <div className="space-y-4">
            <div>
              <input
                type="text"
                className="w-full px-4 py-2 mt-1 rounded-lg focus:ring-2 focus:ring-[#FB8B24] focus:outline-none bg-[#686c628b] text-[#9ca3b0]"
                placeholder="E-mail"
                {...register("email")}
              />
              {errors.email && (
                <FormError
                  message={errors.email.message ?? "E-mail is not valid"}
                />
              )}
            </div>
            <div>
              <input
                type="password"
                className="w-full px-4 py-2 mt-1 rounded-lg focus:ring-2 focus:ring-[#FB8B24] focus:outline-none bg-[#686c628b] text-[#9ca3b0]"
                placeholder="Password"
                {...register("password")}
              />
              {errors.password && (
                <FormError
                  message={errors.password.message ?? "Password is not valid"}
                />
              )}
            </div>
            <button
              type="submit"
              className="w-full py-2 text-white bg-[#FB8B24] rounded-lg hover:bg-[#bc732e] transition duration-200 cursor-pointer"
            >
              Sign In
            </button>
            {error && <FormError message={error} />}
          </div>
        </form>
        <p className="text-sm text-center text-white tracking-wide select-none">
          Don't have an account?{" "}
          <NavLink to="/register" className="text-[#bc732e] hover:underline">
            Sign up
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
