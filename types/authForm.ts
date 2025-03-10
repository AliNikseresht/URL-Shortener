import { JSX } from "react";

export type TAuthForm = {
  title: string[];
  zodEmailErrorMessage: string;
  zodPasswordErrorMessage: string;
  fields: {
    name: string;
    label: string;
    type: string;
  }[];
  submitButton: {
    loginText: string;
    signInText: string;
  };
  accounts: {
    title: string;
    link: string;
  }[];
  autoLogin: {
    icon: JSX.Element;
    title: string;
    link: string;
  }[];
};
