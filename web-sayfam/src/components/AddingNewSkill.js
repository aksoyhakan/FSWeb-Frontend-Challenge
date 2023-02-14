import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { changePage } from "../reducer/actions";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

export default function AddingNewSkill() {
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
    axios.post("http://localhost:5000/programs", data).then((res) => {
      toast.success(
        `ID number:${res.data.id} and ${res.data.name} program is add in Skill list succesfully.`
      );
      dispatch(changePage(false));
      history.push("/");
    });
  }

  return (
    <div className="max-w-screen-xl mx-auto my-20 py-10 bg-slate-200 rounded-3xl border-slate-800 border-solid border-3">
      <h2 className="text-center text-5xl font-semibold mb-16">
        Adding New Skills
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex w-2/3 justify-between mx-auto mb-12">
          <label className="block text-3xl" htmlFor="name">
            Program Name:
          </label>
          <input
            className="block border-2 border-black rounded-md border-solid w-1/2 px-4 py-2 text-1xl"
            type="text"
            id="name"
            {...register("name", {
              required: "Program name is required.",
            })}
          />
        </div>

        <div className="flex w-2/3 justify-between mx-auto mb-12">
          {" "}
          <label className="block text-3xl" htmlFor="url">
            Program Description Photo URL:
          </label>
          <input
            className="block border-2 border-black rounded-md border-solid w-1/2  px-4 py-2 text-1xl"
            id="url"
            type="text"
            {...register("url", {
              required: "URL is required.",
            })}
          />
        </div>

        <div className="flex w-2/3 justify-between mx-auto mb-12">
          {" "}
          <label className="block text-3xl" htmlFor="page">
            Program Web Site:
          </label>
          <input
            className="block border-2 border-black rounded-md border-solid w-1/2  px-4 py-2 text-1xl"
            id="page"
            type="text"
            {...register("page", {
              required: "Web site is required.",
            })}
          />
        </div>
        <div className="flex justify-between">
          <button
            className="block px-8 py-4 border-2 border-solid border-red-600 text-red-800 mx-auto bg-red-400 text-2xl rounded-md hover:bg-red-600 hover:text-red-900 transition-all disabled:opacity-50"
            type="button"
            onClick={() => {
              dispatch(changePage(false));
              toast.info("Administrator account is exited.");
              history.push("/");
            }}
          >
            Exit from Administrator Account
          </button>
          <button
            className="block px-8 py-4 border-2 border-solid border-green-600 text-green-800 mx-auto bg-green-400 text-2xl rounded-md hover:bg-green-600 hover:text-green-900 transition-all disabled:opacity-50"
            type="submit"
            disabled={!isValid}
          >
            Submit new skill...
          </button>
        </div>
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
