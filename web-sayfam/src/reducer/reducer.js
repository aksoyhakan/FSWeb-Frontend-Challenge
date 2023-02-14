import initialState from "../data/initialState";
import {
  FORM_REVISE,
  SUBMIT_BUTTON,
  ERROR_REVISE,
  REGIST_FORM,
  GET_DATA,
  CHANGE_PAGE,
} from "./actions";

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_DATA:
      return { ...state, [action.payload.point]: action.payload.value };
    case FORM_REVISE:
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
    case CHANGE_PAGE:
      return { ...state, addPageStatus: action.payload };
    default:
      return state;
  }
}

export default reducer;
