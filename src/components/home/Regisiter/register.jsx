import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { saveState } from "../../../config/storage";
import { useRegisterUser } from "../../service/mutation/useCreateRegister";
import { Link, useNavigate } from "react-router-dom";

const loginSchema = z.object({
  email: z.string().email("Please enter your email in the correct format"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export const Register = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const { mutate } = useRegisterUser();
  const navigate = useNavigate();

  const submit = (data) => {
    mutate(data, {
      onSuccess: (data) => {
        saveState("userData",data);
        toast.success("Sign up successful");
        navigate("/app");
      },
      onError: (err) => {
        console.log(err); 
        toast.error("Xatolik yuz berdi!"); 
      },
    });
  };

  return (
    <section className="max-w-[1240px] mx-auto h-[100vh] flex items-center justify-center bg-slate-200">
        <div className="flex-col gap-10 w-[400px] h-[500px] rounded-md flex items-center justify-center bg-blue-500">
            <h1 className="text-[20px] font-bold text-white">Sign Up</h1>
            <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-10 w-[350px]">
          <div className="w-full rounded-md">
            <input
              type="text"
              placeholder="name"
              {...register("name")}
              autoComplete="name"
              className="w-full h-[40px] rounded-[2px] pl-2"
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div className="w-full rounded-md">
            <input
              type="email"
              placeholder="email"
              {...register("email")}
              autoComplete="email"
              className="w-full h-[40px] rounded-[2px] pl-2"
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div className="w-full rounded-[2px]">
            <input
              type="password"
              placeholder="password"
              {...register("password")}
              autoComplete="current-password"
              className="w-full h-[40px] rounded-[2px] pl-2"
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <div className="flex items-center gap-2">
            <p className="text-white text-[18px]">If you have an account, click </p>
            <Link to="/" className="flex items-center gap-2">
              <p className="text-blue-900 text-[20px] font-medium hover:text-red-400">
                Sign In
              </p>
            </Link>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 h-[40px] rounded-md text-[18px] text-white font-semibold"
          >
            Send
          </button>
        </form>
        </div>
    </section>
  )
};
