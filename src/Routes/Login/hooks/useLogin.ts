import { useContext } from "react";
import { AuthContext } from "../../../context/auth.context";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import login from "../api/login";
import { LoginFormSchema, LoginResponse } from "../types/login.types";

const useLogin = () => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();
  const { mutate: handleLogin, isPending, error } = useMutation<LoginResponse, Error, LoginFormSchema>({
    mutationFn: login,
    onSuccess: (response) => {
      context.setUser(response.user);
      localStorage.setItem("authToken", response.token);
      navigate("/");
    }
  });

  return { handleLogin, isPending, error };
}

export default useLogin;