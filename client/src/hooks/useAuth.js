import { useMutation } from "@tanstack/react-query";
import { signUpUser, signInUser } from "../api/userApi";

export const useSignUp = () => {
  return useMutation({
    mutationFn: signUpUser,
  });
};

export const useSignIn = () => {
  return useMutation({
    mutationFn: signInUser,
  });
};
