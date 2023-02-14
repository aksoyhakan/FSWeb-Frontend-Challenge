import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { changePage } from "../reducer/actions";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

export default function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const dispatch = useDispatch();
  const history = useHistory();

  function onSubmit(data) {
    axios.get("http://localhost:5000/administrator").then((res) => {
      if (
        data.administratorName === res.data.administratorName &&
        data.administratorPassword === res.data.administratorPassword
      ) {
        dispatch(changePage(true));
        toast.success("You have been granted as administrator");
        setTimeout(() => {
          history.push("/adding");
          reset();
        }, 1000);
      } else {
        dispatch(changePage(false));
        toast.error("Password or username are not correct");
        setTimeout(() => {
          history.push("/");
        }, 2000);
      }
    });
  }

  return (
    <div className="max-w-screen-xl mx-auto my-20 py-10 bg-slate-200 rounded-3xl border-slate-800 border-solid border-3">
      <h2 className="text-center text-5xl font-semibold mb-16">
        Administrator Login
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex w-1/2 justify-between mx-auto mb-12">
          <label className="block text-3xl" htmlFor="administratorName">
            Administrator Name:
          </label>
          <input
            className="block border-2 border-black rounded-md border-solid w-1/3 px-4 py-2 text-1xl"
            type="text"
            id="administratorName"
            {...register("administratorName", {
              required: "Username is required.",
            })}
          />
        </div>

        <div className="flex w-1/2 justify-between mx-auto mb-12">
          {" "}
          <label className="block text-3xl" htmlFor="administratorPassword">
            Administrator Password:
          </label>
          <input
            className="block border-2 border-black rounded-md border-solid w-1/3  px-4 py-2 text-1xl"
            id="administratorPassword"
            type="password"
            {...register("administratorPassword", {
              required: "Password is required.",
              validate: {
                mini: (p) => p.length >= 5 || "At least, 5 chars",
                max: (p) => p.length <= 10 || "At most, 10 chars",
              },
            })}
          />
        </div>

        <button
          className="block px-8 py-4 border-2 border-solid border-red-600 text-red-800 mx-auto bg-red-400 text-2xl rounded-md hover:bg-red-600 hover:text-red-900 transition-all disabled:opacity-50"
          type="submit"
          disabled={!isValid}
        >
          Login
        </button>
      </form>
      {errors.administratorName && (
        <p className="block mt-8 px-6 py-2 w-1/3 border-2 border-solid border-red-600 text-red-800 mx-auto bg-red-400 text-l rounded-md">
          {errors.administratorName.message}
        </p>
      )}
      {errors.administratorPassword && (
        <p className="block mt-8 px-6 py-2 w-1/3 border-2 border-solid border-red-600 text-red-800 mx-auto bg-red-400 text-l rounded-md">
          {errors.administratorPassword.message}
        </p>
      )}
    </div>
  );
}
