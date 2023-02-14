import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { getData } from "../reducer/actions";

function Introduction() {
  const SCIntroductionDiv = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding-left: min(12vw, 11rem);
    padding-bottom: 6rem;
    padding-top: 9.44rem;
    position: relative;
    background-color: rgba(244, 244, 244, 1);

    @media (max-width: 900px) {
      flex-direction: column;
    }
  `;

  const SCWritingMainDiv = styled.div`
    width: 46%;

    @media (max-width: 900px) {
      width: 90%;
      text-align: center;
    }
  `;

  const SCWritingDiv = styled.div`
    margin-bottom: 3.6rem;
    position: relative;
  `;

  const SCHeading = styled.h1`
    font-size: 2rem;
    margin-bottom: 1.3rem;
    font-weight: 400;
  `;

  const SCIntroParagph = styled.p`
    font-size: 2.625rem;
    font-weight: 500;

    @media (max-width: 900px) {
      font-size: 2rem;
    }
  `;

  const SCIconDiv = styled.div`
    margin-bottom: 1.5rem;
  `;

  const SCRectangleDiv = styled.div`
    background-color: rgb(59 130 246 / 0.5);
    width: min(20vw, 9.25rem);
    height: min(8vw, 2rem);
    border-radius: 0.25rem;
    position: absolute;
    left: -1rem;
    top: 6.4rem;

    @media (max-width: 900px) {
      display: none;
    }
  `;

  const SCFotoDiv = styled.div`
    padding-right: min(12vw, 11rem);
    padding-top: 1.5rem;

    @media (max-width: 900px) {
      display: none;
    }
  `;

  const SCRectangle2Div = styled.div`
    background-color: rgb(59 130 246 / 0.5);
    width: min(23.8vw, 21.5rem);
    height: min(23.8vw, 21.5rem);
    border-radius: 2rem;
    position: absolute;
    right: min(13vw, 11.75rem);
    top: 11.69rem;
  `;

  const SCRectangle3Div = styled.div`
    background-color: rgb(192 192 192 / 0.5);
    width: min(32vw, 15rem);
    height: 8rem;
    border-radius: 0 0 8rem 8rem;
    position: absolute;
    left: min(40vw, 40rem);
    top: -4rem;
  `;

  const SCFoto = styled.img`
    width: min(23.8vw, 21.5rem);
    height: min(23.8vw, 21.5rem);
    border-radius: 2rem;
    position: absolute;
    right: min(11vw, 10.5rem);
    top: 207px;
  `;

  const SCWritingSpan = styled.span`
    color: rgb(59 130 246 / 1);
    font-weight: 500;
  `;

  const SCSpan2 = styled.span`
    color: black;
    font-weight: 400;
    transition: all 0.3s ease-in-out;

    :hover {
      color: rgb(59 130 246 / 1);
    }
  `;

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:5000/firstInfo")
      .then((response) => dispatch(getData(response.data, "firstInfo")))
      .catch((err) => console.log(err));
  }, []);

  const introductionData = useSelector((store) => store.firstInfo);
  console.log(introductionData);
  return (
    <SCIntroductionDiv>
      <SCRectangle3Div></SCRectangle3Div>
      <SCWritingMainDiv>
        <SCWritingDiv>
          <SCHeading>{introductionData.greeting}</SCHeading>
          <SCIntroParagph>{introductionData.introParagph}</SCIntroParagph>
          <SCRectangleDiv></SCRectangleDiv>
        </SCWritingDiv>
        <SCIconDiv>
          <a
            href="https://github.com/aksoyhakan?tab=repositories"
            target="_blank"
          >
            <FontAwesomeIcon
              style={{ width: "31px", height: "34px", marginRight: "1.25rem" }}
              icon={faGithub}
            />
          </a>
          <a
            href="https://tr.linkedin.com/in/hakan-aksoy-102727222"
            target="_blank"
          >
            <FontAwesomeIcon
              style={{ width: "34px", height: "36px" }}
              icon={faLinkedinIn}
            />
          </a>
        </SCIconDiv>
        <div>
          <p style={{ fontSize: "1.2rem" }}>
            Currently <SCWritingSpan>Freelancing</SCWritingSpan> for
            <SCWritingSpan> UX, UI & Web Design</SCWritingSpan> Project.
          </p>

          <p style={{ fontSize: "1.2rem" }}>
            Invite me to join your team ==>
            <Link to="/contact">
              <SCSpan2>{introductionData.email}</SCSpan2>
            </Link>
          </p>
        </div>
      </SCWritingMainDiv>
      <SCFotoDiv>
        <SCRectangle2Div></SCRectangle2Div>
        <SCFoto src={introductionData.photo}></SCFoto>
      </SCFotoDiv>
    </SCIntroductionDiv>
  );
}

export default Introduction;
