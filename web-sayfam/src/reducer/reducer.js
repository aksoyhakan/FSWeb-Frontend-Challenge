import React from "react";
import initialState from "../data/initialState";
import {
  FORM_REVISE,
  SUBMIT_BUTTON,
  ERROR_REVISE,
  REGIST_FORM,
} from "./actions";

function reducer(state = initialState, action) {
  switch (action.type) {
    case FORM_REVISE:
      console.log("Form revise");
      console.log(action.payload);
      return {
        ...state,
        form: {
          ...state.form,
          [action.payload.point]: action.payload.newPoint,
        },
      };
    case SUBMIT_BUTTON:
      return { ...state, submitButtonDisabled: action.payload };

    case ERROR_REVISE:
      return {
        ...state,
        formError: {
          ...state.formError,
          [action.payload.point]: action.payload.newPoint,
        },
      };
    case REGIST_FORM:
      return {
        ...state,
        registedForms: [...state.registedForms, action.payload],
      };
    default:
      return state;
  }
}

export default reducer;
