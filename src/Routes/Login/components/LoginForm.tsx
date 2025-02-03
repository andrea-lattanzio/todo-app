import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  LoginFormProps,
  LoginFormSchema,
  loginSchema,
} from "../types/login.types";

const LoginForm: React.FC<LoginFormProps> = ({ onSubmitForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginSchema),
    mode: "onSubmit",
  });

  return (
    <div className="mt-36 flex flex-col items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-6 rounded-2xl">
        <h2 className="text-3xl font-bold text-center text-white tracking-wider select-none">
          Login
        </h2>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white tracking-wide select-none">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 mt-1 rounded-lg focus:ring-2 focus:ring-[#FB8B24] focus:outline-none bg-[#686c628b] text-[#9ca3b0]"
                placeholder="Enter your email"
                {...register("email")}
              />
              {errors.email && (
                <label className="text-red-500">{errors.email.message}</label>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-white tracking-wide select-none">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 mt-1 rounded-lg focus:ring-2 focus:ring-[#FB8B24] focus:outline-none bg-[#686c628b] text-[#9ca3b0]"
                placeholder="Enter your password"
                {...register("password")}
              />
              {errors.password && <label>{errors.password.message}</label>}
            </div>
            <button
              type="submit"
              className="w-full py-2 text-white bg-[#FB8B24] rounded-lg hover:bg-[#bc732e] transition duration-200 cursor-pointer"
            >
              Sign In
            </button>
          </div>
        </form>
        <p className="text-sm text-center text-white tracking-wide select-none">
          Don't have an account?{" "}
          <a href="#" className="text-[#bc732e] hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
