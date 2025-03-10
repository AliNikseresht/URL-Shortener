"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/slices/userSlice";
import { supabase } from "@/utils/supabaseClient";
import { useRouter } from "next/navigation";
import { authForm } from "@/data/authData";
import Loading from "@/app/loading";
import Link from "next/link";

// Zod schema definition for form validation
const schema = z.object({
  email: z.string().email(authForm.zodEmailErrorMessage),
  password: z.string().min(6, authForm.zodPasswordErrorMessage),
  username: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

interface AuthFormProps {
  isLogin: boolean;
}

export default function AuthForm({ isLogin }: AuthFormProps) {
  const dispatch = useDispatch();
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const handleAuth = async (data: FormData) => {
    setError("");

    let result;
    if (isLogin) {
      result = await supabase.auth.signInWithPassword(data);
    } else {
      result = await supabase.auth.signUp(data);
    }

    if (result.error) {
      setError(result.error.message);
    } else {
      const { session } = result.data;
      if (session) {
        await supabase.auth.setSession({
          access_token: session.access_token,
          refresh_token: session.refresh_token,
        });

        dispatch(
          setUser({
            id: session.user.id,
            name: session.user.email || "",
            email: session.user.email || "",
          })
        );

        router.push("/");
      }
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold bg-gradient-to-r from-[#144EE3] via-[#EB568E] to-[#144EE3] bg-clip-text text-transparent">
        {isLogin ? authForm.title[0] : authForm.title[1]}
      </h2>

      <div className="flex-col md:flex-row flex items-center w-full justify-center md:gap-[4em]">
        <form onSubmit={handleSubmit(handleAuth)} className="max-w-md w-full">
          {authForm.fields.map((field) => {
            if (field.name === "username" && isLogin) return null;

            return (
              <div key={field.name} className="flex flex-col gap-1">
                <label
                  htmlFor={field.name}
                  className="text-[#C9CED6] text-sm md:text-base"
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  {...register(field.name as keyof FormData)}
                  className="w-full p-2 mb-2 border border-[#818181] rounded-xl bg-transparent outline-none"
                />
                {errors[field.name as keyof FormData] && (
                  <p className="text-red-500 text-xs">
                    {errors[field.name as keyof FormData]?.message}
                  </p>
                )}
              </div>
            );
          })}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#818181] text-[#fff] p-2 rounded-3xl mt-4"
          >
            {isSubmitting ? (
              <Loading />
            ) : isLogin ? (
              authForm.submitButton.loginText
            ) : (
              authForm.submitButton.signInText
            )}
          </button>
        </form>
      </div>
      {authForm.accounts
        .filter((_, index) => index === (isLogin ? 0 : 1))
        .map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="text-[#C9CED6] font-semibold md:mt-4"
          >
            {item.title}
          </Link>
        ))}
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
