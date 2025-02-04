import { zodResolver } from "@hookform/resolvers/zod";
import {
  RegisterFormProps,
  RegisterFormSchema,
  registerSchema,
} from "../types/register.types";
import { useForm } from "react-hook-form";
import FormError from "../../../components/ui/forms/Form.error";
import { NavLink } from "react-router-dom";

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmitForm, error }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerSchema),
    mode: "onSubmit",
  });

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-6 rounded-2xl">
        <h2 className="text-3xl font-bold text-center text-white tracking-wider select-none">
          Sign up
        </h2>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white tracking-wide select-none">
                Email
              </label>
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
              <label className="block text-sm font-medium text-white tracking-wide select-none">
                Password
              </label>
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
              Sign up
            </button>
            {error && <FormError message={error} />}
          </div>
        </form>
        <p className="text-sm text-center text-white tracking-wide select-none">
          Already have an account?{" "}
          <NavLink to="/login" className="text-[#bc732e] hover:underline">
            Sign in
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
