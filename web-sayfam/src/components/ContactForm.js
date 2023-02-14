import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  errorRevise,
  formRevise,
  submitButtonRevise,
  formRegister,
  getData,
} from "../reducer/actions";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { toast } from "react-toastify";
import axios from "axios";

const SCFormDiv = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: white;
  padding-top: 5rem;
  padding-bottom: 2rem;
`;

const SCFormHead = styled.h2`
  font-size: 3rem;
  text-align: center;
  font-weight: 600;
  margin-bottom: 2rem;
`;

const SCInputDiv = styled.div`
  max-width: 800px;
  boxing-size: border-box;
  display: flex;
  justify-content: space-between;
  margin-bottom: ${(props) => (props.visible ? "0" : "6rem")};

  @media (max-width: 750px) {
    flex-direction: column;
    padding: 0 1rem;
  }
`;

const SCInput = styled.input`
  border: 0.1rem solid black;
  padding: 0.5rem 1rem;
  display: block;
  width: 50%;

  @media (max-width: 750px) {
    width: 100%;
  }
`;

const SCButton2 = styled.button`
  border: 0.1rem solid black;
  border-radius: 2rem;
  padding: 1rem 3rem;
  display: block;
  margin: 3rem auto;
  font-size: 1.5rem;
  background-color: rgb(195, 222, 202);
  transition: all 0.3s ease-out;

  :disabled {
    opacity: 0.3;
  }

  &:hover {
    background-color: rgb(76, 138, 91);
  }
`;
const SCErrorDiv = styled.div`
  border: 0.1rem solid red;
  background-color: rgb(255, 200, 200);
  color: rgb(255, 50, 50);
  width: 80%;
  border-radius: 0.5rem;
  height: 4rem;
  display: ${(props) => (props.visible ? "block" : "none")};
  margin: 1rem auto;
  font-size: 1rem;
  padding: 1.25rem 2rem;
`;
const SCButton1 = styled.button`
  border: 0.1rem solid black;
  border-radius: 2rem;
  padding: 1rem 3rem;
  display: block;
  margin: 3rem auto;
  font-size: 1.5rem;
  background-color: white;
  transition: all 0.3s ease-out;

  &:hover {
    background-color: rgba(192, 192, 192, 1);
  }
`;

const SCLabel = styled.label`
  display: block;
  font-size: 1.5rem;

  @media (max-width: 750px) {
    margin-bottom: 1rem;
  }
`;

const SCInputDiv2 = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 17%;
`;

const SCLabel2 = styled.label`
  display: block;
  font-size: 1.5rem;
  margin: 0 1rem 0 2rem;
`;

const SCTextArea = styled.textarea`
  border: 0.1rem solid black;
  padding: 0.5rem 1rem;
  display: block;
  width: 50%;
  @media (max-width: 750px) {
    width: 100%;
  }
`;

export function ContactForm() {
  const formData = useSelector((store) => store.form);
  const errorData = useSelector((store) => store.formError);
  const submitButtonDisabled = useSelector(
    (store) => store.submitButtonDisabled
  );

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:5000/form")
      .then((response) => dispatch(getData(response.data, "form")))
      .catch((err) => console.log(err));
    axios
      .get("http://localhost:5000/formError")
      .then((response) => dispatch(getData(response.data, "formError")))
      .catch((err) => console.log(err));
    axios
      .get("http://localhost:5000/registedForms")
      .then((response) => dispatch(getData(response.data, "registedForms")))
      .catch((err) => console.log(err));
    axios
      .get("http://localhost:5000/submitButtonDisabled")
      .then((response) =>
        dispatch(getData(response.data.status, "submitButtonDisabled"))
      )
      .catch((err) => console.log(err));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:5000/registedForms", formData)
      .then((res) => {
        dispatch(formRegister(res.data));
        toast.success("Your form is received succesfully.");
        setTimeout(() => {
          dispatch(formRevise("company", ""));
          dispatch(formRevise("expectation", ""));
          dispatch(formRevise("salary", ""));
          dispatch(formRevise("workingType", ""));
          history.push("/");
        }, 2000);
      })
      .catch((err) => toast.error(err));
  }

  function handleChange(event) {
    if (event.target.type === "radio") {
      formValidation(event.target.name, event.target.id);
      dispatch(formRevise(event.target.name, event.target.id));
    } else {
      formValidation(event.target.id, event.target.value);
      dispatch(formRevise(event.target.id, event.target.value));
    }
  }

  const formSchema = yup.object().shape({
    company: yup.string().required("You must type company name."),
    expectation: yup
      .string()
      .required("You must enter your expectation")
      .min(10, "Your expectation must be longer than 10 chars"),
    salary: yup
      .number()
      .positive()
      .integer()
      .min(25000, "My expectation is 25K TL at least")
      .required("You must type company name.d"),
    workingType: yup
      .string()
      .oneOf(
        ["hybrid", "remote", "office"],
        "You must select your working type."
      ),
  });

  function formValidation(name, value) {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then((valid) => {
        dispatch(errorRevise(name, ""));
      })
      .catch((err) => {
        dispatch(errorRevise(name, err.errors[0]));
      });
  }

  useEffect(() => {
    formSchema.isValid(formData).then((valid) => {
      dispatch(submitButtonRevise(!valid));
    });
  }, [formData]);

  console.log();
  return (
    <SCFormDiv>
      <SCFormHead>Contact Form</SCFormHead>
      <form onSubmit={(event) => handleSubmit(event)}>
        <SCInputDiv visible={errorData.company}>
          <SCLabel style={{ fontSize: "1.5rem" }} htmlFor="company">
            Please, type your company name.
          </SCLabel>
          <SCInput
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={(event) => handleChange(event)}
            placeholder="Please, type your company name"
          ></SCInput>
        </SCInputDiv>
        <SCErrorDiv visible={errorData.company}>{errorData.company}</SCErrorDiv>
        <SCInputDiv visible={errorData.expectation}>
          <SCLabel
            style={{ display: "block", fontSize: "1.5rem" }}
            htmlFor="expectation"
          >
            What is the expectation from me?
          </SCLabel>
          <SCTextArea
            id="expectation"
            name="expectation"
            rows="4"
            cols="40"
            value={formData.expectation}
            onChange={(event) => handleChange(event)}
            placeholder="Please, twrite your expectation"
          ></SCTextArea>
        </SCInputDiv>
        <SCErrorDiv visible={errorData.expectation}>
          {errorData.expectation}
        </SCErrorDiv>
        <SCInputDiv visible={errorData.salary}>
          <SCLabel
            style={{ display: "block", fontSize: "1.5rem" }}
            htmlFor="salary"
          >
            Please, type your expectation from me.
          </SCLabel>
          <SCInput
            id="salary"
            name="salary"
            type="number"
            value={Number(formData.salary)}
            onChange={(event) => handleChange(event)}
          ></SCInput>
        </SCInputDiv>
        <SCErrorDiv visible={errorData.salary}>{errorData.salary}</SCErrorDiv>
        <SCInputDiv visible={errorData.workingType}>
          <SCLabel style={{ display: "block", fontSize: "1.5rem" }}>
            What is the working type?
          </SCLabel>
          <SCInputDiv2>
            <SCLabel2 htmlFor="remote">Remote</SCLabel2>
            <input
              id="remote"
              name="workingType"
              type="radio"
              checked={formData.workingType === "remote"}
              onClick={(event) => handleChange(event)}
            ></input>
          </SCInputDiv2>
          <SCInputDiv2>
            <SCLabel2 htmlFor="hybrid">Hybrid</SCLabel2>
            <input
              id="hybrid"
              name="workingType"
              type="radio"
              checked={formData.workingType === "hybrid"}
              onClick={(event) => handleChange(event)}
            ></input>
          </SCInputDiv2>
          <SCInputDiv2>
            <SCLabel2 htmlFor="office">Office</SCLabel2>
            <input
              id="office"
              name="workingType"
              type="radio"
              checked={formData.workingType === "office"}
              onClick={(event) => handleChange(event)}
            ></input>
          </SCInputDiv2>
        </SCInputDiv>
        <SCErrorDiv visible={errorData.workingType}>
          {errorData.workingType}
        </SCErrorDiv>
        <SCInputDiv>
          <SCButton1
            type="button"
            onClick={(event) => {
              event.preventDefault();
              history.push("/");
            }}
          >
            Back to Main Page
          </SCButton1>
          <a href="mailto:aksoyhakan1990@gmail.com?subject=Mail">
            <SCButton2 disabled={submitButtonDisabled} type="submit">
              Send the request...
            </SCButton2>
          </a>
        </SCInputDiv>
      </form>
    </SCFormDiv>
  );
}
