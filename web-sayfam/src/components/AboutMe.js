import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import axios from "axios";
import { getData } from "../reducer/actions";

function AboutMe() {
  const SCAboutDiv = styled.div`
    width: 30rem;
    position: relative;

    @media (max-width: 550px) {
      width: 90%;
    }
  `;

  const SCAboutHead = styled.h2`
    font-size: 1.5rem;
    line-height: 2rem;
    font-family: "Playfair Display";
    font-weight: 500;
  `;

  const SCAboutParag = styled.p`
    font-size: 1.125rem;
    line-height: 1.7rem;
    margin-top: 1.5rem;
  `;
  const SCRectangleDiv = styled.div`
    background-color: rgb(59 130 246 / 0.5);
    width: min(15vw, 6rem);
    height: min(4vw, 1rem);
    border-radius: 0.25rem;
    position: absolute;
    left: -1rem;
    top: 1rem;
  `;

  const aboutParaghs = useSelector((store) => store.about);

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:5000/about")
      .then((res) => dispatch(getData(res.data, "about")))
      .catch((err) => console.log(err));
  }, []);

  return (
    <SCAboutDiv>
      <SCRectangleDiv></SCRectangleDiv>
      <SCAboutHead>About Me</SCAboutHead>
      {aboutParaghs.map((item) => (
        <SCAboutParag>{item}</SCAboutParag>
      ))}
    </SCAboutDiv>
  );
}

export default AboutMe;
