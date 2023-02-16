import axios from "axios";
import { toast } from "react-toastify";

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

export function formRegisted(forms) {
  return { type: REGIST_FORM, payload: forms };
}

export const getInfoFromServer = (key) => (dispatch) => {
  axios
    .get(`https://hakan-aksoy-database.vercel.app/${key}`)
    .then((response) => dispatch(getData(response.data, key)))
    .catch((err) => console.log(err));
};

export const formRegisterServer = (form) => (dispatch) => {
  console.log("burafdayım");
  axios
    .post("https://hakan-aksoy-database.vercel.app/registedForms", form)
    .then((res) => {
      toast.success(`ID NO:${res.data.id} form is received succesfully.`);
    })
    .catch((err) => toast.error(err));
};

export const adminCheck = (data) => (dispatch) => {
  axios
    .get("https://hakan-aksoy-database.vercel.app/administrator")
    .then((res) => {
      if (
        data.administratorName === res.data.administratorName &&
        data.administratorPassword === res.data.administratorPassword
      ) {
        dispatch(changePage(true));
        localStorage.setItem("changePage", JSON.stringify(true));
        toast.success(
          "You have been granted as administrator.You are forwarded to Adding Page"
        );

        return true;
      } else {
        dispatch(changePage(false));
        localStorage.setItem("changePage", JSON.stringify(false));
        toast.error("Password or username are not correct");
        return false;
      }
    });
};

export const addingSkillServer = (data) => (dispatch) => {
  axios
    .post("https://hakan-aksoy-database.vercel.app/programs", data)
    .then((res) => {
      toast.success(
        `ID number:${res.data.id} and ${res.data.name} program is add in Skill list succesfully.`
      );
      dispatch(changePage(false));
    });
};

export const addingProjectServer = (data) => (dispatch) => {
  console.log("buradayım");
  axios
    .post("https://hakan-aksoy-database.vercel.app/project", data)
    .then((res) => {
      toast.success(
        `ID number:${res.data.id} and ${res.data.name} project is add in Projects list succesfully.`
      );
      dispatch(changePage(false));
    });
};

export function getData(data, key) {
  return { type: GET_DATA, payload: { value: data, point: key } };
}

export function changePage(status) {
  return { type: CHANGE_PAGE, payload: status };
}
