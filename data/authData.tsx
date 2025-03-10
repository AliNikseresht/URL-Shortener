import { TAuthForm } from "@/types/authForm";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export const authForm: TAuthForm = {
  title: ["Log In", " Sign In"],
  zodEmailErrorMessage: "Enter a valid email.",
  zodPasswordErrorMessage: "The password must be at least 6 characters long.",
  fields: [
    {
      name: "username",
      label: "User name",
      type: "username",
    },
    {
      name: "email",
      label: "Email address",
      type: "email",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
    },
  ],
  submitButton: {
    loginText: "Log in",
    signInText: "Sign in",
  },
  accounts: [
    {
      title: "Sign In",
      link: "/register",
    },
    {
      title: "Log in",
      link: "/login",
    },
  ],
  autoLogin: [
    {
      icon: <FcGoogle />,
      title: "Continue with Google",
      link: "/google",
    },
    {
      icon: <BsFacebook style={{ color: "#3725b9" }} />,
      title: "Continue with Facebook",
      link: "/facebook",
    },
    {
      icon: <MdEmail style={{ color: "#000000" }} />,
      title: "Sign up with email",
      link: "/email",
    },
  ],
};
