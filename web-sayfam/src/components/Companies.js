import React, { useEffect } from "react";
import { getInfoFromServer } from "../reducer/actions";
import { useDispatch, useSelector } from "react-redux";
import Company from "./Company";
import { useHistory } from "react-router-dom";

export default function Companies() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getInfoFromServer("registedForms"));
  }, []);

  const proposals = useSelector((store) => store.registedForms);

  return proposals.length !== 0 ? (
    <div>
      {proposals.map((item) => (
        <Company data={item}></Company>
      ))}
      <button
        onClick={() => history.push("/")}
        className="block text-center mx-auto px-10 py-5 text-2xl bg-gray-300 border-gray-900 border-2 hover:bg-gray-500 transition-all rounded-md"
      >
        Back to Main Page
      </button>
    </div>
  ) : (
    <div
      onClick={() => history.push("/")}
      className="text-center text-3xl bg-slate-300 border-2 border-solid border-slate-600 px-5 py-10 rounded-2xl hover:bg-slate-500 transition-all"
    >
      Unfortunately, there is no proposal.
    </div>
  );
}
