export const FORM_REVISE = "FORM_REVISE";
export const SUBMIT_BUTTON = "SUBMIT_BUTTON";
export const ERROR_REVISE = "ERROR_REVISE";
export const REGIST_FORM = "REGIST_FORM";

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
