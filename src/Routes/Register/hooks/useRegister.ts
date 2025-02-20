import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/auth.context";
import register from "../api/register";
import { LoginFormSchema, LoginResponse } from "../../Login/types/login.types";
import { useMutation } from "@tanstack/react-query";

const useRegister = () => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();
  const { mutate: handleRegister, isPending, error } = useMutation<LoginResponse, Error, LoginFormSchema>({
    mutationFn: register,
    onSuccess: (response) => {
      context.setUser(response.user);
      localStorage.setItem("authToken", response.token);
      navigate("/");
    }
  });

  return { handleRegister, isPending, error };
}

export default useRegister;