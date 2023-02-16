import React from "react";
import { useForm } from "react-hook-form";
import { changePage, addingProjectServer } from "../reducer/actions";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

export default function AddingNewProject() {
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
    let toolArray = data.tools.split(", ");
    let newData = { ...data, tools: toolArray };
    dispatch(addingProjectServer(newData));
    reset();
    history.push("/");
  }

  return (
    <div className="max-w-screen-xl mx-auto my-20 py-10 bg-slate-200 rounded-3xl border-slate-800 border-solid border-3">
      <h2 className="text-center text-5xl font-semibold mb-16">
        Adding New Project
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex w-2/3 justify-between mx-auto mb-12">
          <label className="block text-3xl" htmlFor="name">
            Project Name:
          </label>
          <input
            className="block border-2 border-black rounded-md border-solid w-1/2 px-4 py-2 text-1xl"
            type="text"
            id="name"
            {...register("name", {
              required: "Project name is required.",
            })}
          />
        </div>

        <div className="flex w-2/3 justify-between mx-auto mb-12">
          {" "}
          <label className="block text-3xl" htmlFor="explanation">
            Program Explanation:
          </label>
          <input
            className="block border-2 border-black rounded-md border-solid w-1/2  px-4 py-2 text-1xl"
            id="explanation"
            type="text"
            {...register("explanation", {
              required: "Explanation is required.",
            })}
          />
        </div>

        <div className="flex w-2/3 justify-between mx-auto mb-12">
          {" "}
          <label className="block text-3xl" htmlFor="tools">
            Tools:
          </label>
          <input
            className="block border-2 border-black rounded-md border-solid w-1/2  px-4 py-2 text-1xl"
            id="tools"
            type="text"
            {...register("tools", {
              required: "Tool is required.",
            })}
          />
        </div>

        <div className="flex w-2/3 justify-between mx-auto mb-12">
          {" "}
          <label className="block text-3xl" htmlFor="url">
            Project Photo Url:
          </label>
          <input
            className="block border-2 border-black rounded-md border-solid w-1/2  px-4 py-2 text-1xl"
            id="url"
            type="text"
            {...register("url", {
              required: "Url is required.",
            })}
          />
        </div>

        <div className="flex w-2/3 justify-between mx-auto mb-12">
          {" "}
          <label className="block text-3xl" htmlFor="gitHubPage">
            Project GitHub Page:
          </label>
          <input
            className="block border-2 border-black rounded-md border-solid w-1/2  px-4 py-2 text-1xl"
            id="gitHubPage"
            type="text"
            {...register("gitHubPage", {
              required: "GitHub Page is required.",
            })}
          />
        </div>

        <div className="flex w-2/3 justify-between mx-auto mb-12">
          {" "}
          <label className="block text-3xl" htmlFor="vercel">
            Project Vercel Website Page:
          </label>
          <input
            className="block border-2 border-black rounded-md border-solid w-1/2  px-4 py-2 text-1xl"
            id="vercel"
            type="text"
            {...register("vercel", {
              required: "Vercel url is required.",
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
