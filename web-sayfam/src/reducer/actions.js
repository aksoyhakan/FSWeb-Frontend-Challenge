export const FORM_REVISE = "FORM_REVISE";
export const SUBMIT_BUTTON = "SUBMIT_BUTTON";
export const ERROR_REVISE = "ERROR_REVISE";
export const REGIST_FORM = "REGIST_FORM";
export const GET_DATA = "GET_DATA";
export const CHANGE_PAGE = "CHANGE_PAGE";

export function formRevise(key, value) {
  return { type: FORM_REVISE, payload: { point: key, newPoint: value } };
}

export function submitButtonRevise(status) {
  return { type: SUBMIT_BUTTON, payload: status };
}

export function errorRevise(key, err) {
  return { type: ERROR_REVISE, payload: { point: key, newPoint: err } };
}

export function formRegister(formInfo) {
  return { type: REGIST_FORM, payload: formInfo };
}

export function getData(data, key) {
  return { type: GET_DATA, payload: { value: data, point: key } };
}

export function changePage(status) {
  return { type: CHANGE_PAGE, payload: status };
}
