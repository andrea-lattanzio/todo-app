import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface LoginFormProps {
  onSubmitForm: (data: LoginFormSchema) => void;
}

const loginSchema = z.object({
  email: z.string().email("Email must be a valid email address"),
  password: z.string(),
});

export type LoginFormSchema = z.infer<typeof loginSchema>;

const LoginForm: React.FC<LoginFormProps> = ({ onSubmitForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Enter your email"
                {...register("email")}
              />
              {errors.email && <label>{errors.email.message}</label>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Enter your password"
                {...register("password")}
              />
              {errors.password && <label>{errors.password.message}</label>}
            </div>
            <button
              type="submit"
              className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-200"
              disabled={!isValid}
            >
              Sign In
            </button>
          </div>
        </form>
        <p className="text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
